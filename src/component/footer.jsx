import Link from "next/link";

const Footer = () => {
    /* NAV LIST ITEMS */
    const navItems = [
        { title: "Home", link: "/" },
        { title: "About Our Block", link: "/about" },
        { title: "Announcement", link: "/announcement" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Class Profiles", link: "/class" },
        { title: "Contact", link: "/contact" },
    ];

    return (
        <div className="bg-[#FFF8DE]/44 border-t border-[#8A6E5D]/10 py-8 lg:px-16 px-8 flex justify-between lg:items-start items-center lg:flex-row flex-col gap-8">
            
            {/* LOGO */}
            <div className="flex flex-col items-center lg:items-start gap-3">
                <img
                    src="/assets/studiot3ch_logo.png"
                    alt="studiot3ch_logo"
                    className="min-w-16 lg:w-44 w-32" 
                />
                <p className="text-[#9E8576] text-[10px] font-medium italic">© 2026 Studio T3CH.</p>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-24 gap-10 lg:text-start text-center">
                
                {/* QUICK LINKS */}
                <ul className="list-none">
                    <li className="text-lg text-[#7FBF83] font-bold mb-2">
                        Quick Links
                    </li>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="text-[#9E8576] text-sm font-medium mb-1 hover:text-[#8A6E5D] transition-colors"
                        >
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

                {/* CONTACT SECTION */}
                <div className="flex flex-col max-w-xs">
                    <p className="text-lg text-[#7FBF83] font-bold mb-2">
                        Contact
                    </p>
                    <p className="text-[11px] text-[#7FBF83] font-medium italic mb-4 leading-tight">
                        For questions or concerns, contact our block officers.
                    </p>

                    {/* PRESIDENT INFO */}
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-[#8A6E5D] font-bold">
                            President:
                        </p>
                        <p className="text-sm text-[#9E8576] font-semibold">
                            Lance Joseph Dayawon
                        </p>
                        <div className="flex flex-col">
                            <a 
                                href="https://www.facebook.com/lance.joseph.dayawon" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[11px] text-[#9E8576] hover:underline"
                            >
                                facebook.com/lance.joseph.dayawon
                            </a>
                            <a 
                                href="mailto:bsit33.2525@gmail.com" 
                                className="text-[11px] text-[#9E8576] hover:underline"
                            >
                                bsit33.2525@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;