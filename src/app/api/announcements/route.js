import { google } from "googleapis";

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "ANNOUNCEMENTS!A:C",
    });

    const rows = response.data.values || [];

    const announcements = rows
      .slice(1)
      .filter(row => row.length === 3)
      .map(row => ({
        title: row[0],
        message: row[1],
        date: row[2],
      }))
      .sort((a, b) => {
        const aIsTBA = a.date?.toUpperCase() === "TBA" || a.date?.toUpperCase() === "N/A" || a.date?.toUpperCase() === "";
        const bIsTBA = b.date?.toUpperCase() === "TBA" || b.date?.toUpperCase() === "N/A" || b.date?.toUpperCase() === "";

        if (aIsTBA && bIsTBA) return 0;
        if (aIsTBA) return 1;
        if (bIsTBA) return -1;

        return new Date(a.date) - new Date(b.date);
      });

    return new Response(JSON.stringify(announcements), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}