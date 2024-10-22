import Section from "../components/Section";
import { smallSphere, stars, lines } from "../assets"; // Replace with appropriate paths for your images
import Heading from "../components/Heading";

// Import images directly or dynamically
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

const pricing = [
    {
        title: "Basic",
        image: image1, // Imported image
        description: "AI chatbot, personalized recommendations",
    },
    {
        title: "Premium",
        image: image2, // Imported image
        description: "Advanced AI chatbot, priority support, analytics dashboard",
    },
    {
        title: "Enterprise",
        image: image2, // Same image as Premium, replace if needed
        description: "Custom AI chatbot, advanced analytics, dedicated account",
    },
    {
        title: "Ultimate",
        image: image3, // Imported image
        description: "Full AI customization, enterprise support, unlimited analytics",
    },
];

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="our-project">
            <div className="container relative z-2">
                {/* Background effect */}
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                {/* Heading */}
                <Heading tag="Get started with Ceriture" title="Our Projects" />

                {/* Pricing cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {pricing.map((item, i) => (
                        <div
                            key={i}
                            className="relative group w-full h-[20rem] bg-n-8 border border-n-6 rounded-[2rem] overflow-hidden flex flex-col justify-center items-center"
                        >
                            {/* Card Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Hidden description that appears on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-white text-center px-4">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative lines */}
                <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                    <img className="w-full" src={lines} width={1480} height={177} alt="" />
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                    <img className="w-full" src={lines} width={1480} height={177} alt="" />
                </div>

                {/* See full details link */}
                <div className="flex justify-center mt-10">
                    <a className="text-xs font-code font-bold tracking-wider uppercase border-b" href="#pricing">
                        {/* See the full details */}
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Pricing;
