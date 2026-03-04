import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

const About = () => {

    const classPhotos = [
        { src: "/assets/class pic.jpg", alt: "Class Photo 1" },
        { src: "/assets/class pic 1.jpg", alt: "Class Photo 2" },
        { src: "/assets/class pic 2.jpg", alt: "Class Photo 3" },
        { src: "/assets/class pic 3.jpg", alt: "Class Photo 4" },
        { src: "/assets/class pic 4.jpg", alt: "Class Photo 5" },
        { src: "/assets/class pic 5.jpeg", alt: "Class Photo 6" },
    ];

    return (
        <div className="w-full min-h-screen overflow-x-hidden bg-[#FFF8DE]/44">
            <Navbar />

            {/* HEADER SECTION */}
            <main className="text-center py-20 px-5">
                <h1 className="text-[#8A6E5D] lg:text-7xl text-5xl font-bold mb-8">
                    About Our Block
                </h1>
                <p className="text-[#7FBF83] text-xl lg:text-2xl font-light italic leading-relaxed max-w-4xl mx-auto">
                    Welcome to our little corner of the digital world — a
                    classroom where curiosity, creativity, and code come
                    together. We are BSIT 3-3 from the Polytechnic
                    University of the Philippines, a family of 56 students
                    united by technology, collaboration, and a passion for learning.
                </p>
            </main>


            <section className="w-full py-20 lg:px-10 px-5 relative bg-[url('/assets/42624.png')] bg-cover bg-center bg-[#FFF8DE]/60 bg-blend-overlay">
                <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                    {classPhotos.map((photo, index) => (
                        <div 
                            key={index} 
                            className="bg-white/30 backdrop-blur-md p-5 rounded-[40px] border border-white/20 shadow-2xl flex flex-col items-center transition-all duration-500 hover:scale-[1.03] hover:bg-white/40 group cursor-pointer"
                        >
                            <div className="w-full aspect-video overflow-hidden rounded-[30px] border-4 border-white/30 shadow-inner">
                                <img 
                                    src={photo.src} 
                                    alt={photo.alt}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                            
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;