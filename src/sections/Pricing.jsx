import Section from "../components/Section";
import { smallSphere, stars, lines } from "../assets"; // Replace with appropriate paths for your images
import Heading from "../components/Heading";

// Import images directly or dynamically
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

const pricing = [
    {
        title: "Basic",
        image: image1, 
        description: "BTC Layer is a Layer 2 as a Service (L2aaS) and liquid staking platform enhancing Bitcoin's scalability and security, allowing users to stake assets and earn rewards.",
        link: "https://btclayer.org", 
    },
    {
        title: "Premium",
        image: image2, 
        description: "AssetAvenue is a crypto-based platform for investing in real estate. It features the AAV token, staking, investment options, presales, and airdrops, allowing users to easily participate in property ownership using blockchain technology.",
        link: "https://assetavenue.capital", 
    },
    {
        title: "Enterprise",
        image: image4, 
        description: "Sokari is a virtual platform that brings Sri Lankan folklore and culture to life through interactive digital experiences.",
        link: "https://sokari.click", 
    },
    {
        title: "Ultimate",
        image: image3, 
        description: "Ibex Films is a videography team that creates high-quality visual content, specializing in storytelling through cinematic techniques for various projects.",
        link: "https://example.com/ultimate", 
    },
];

const Pricing = () => {
    return (
        <Section className="overflow-hidden" id="our-project">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img src={smallSphere} className="relative z-1" width={255} height={255} alt="" />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} className="w-full" width={950} height={400} alt="" />
                    </div>
                </div>

                <Heading tag="Get started with Certiure" title="Our Projects" />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {pricing.map((item, i) => (
                        <a
                            key={i}
                            href={item.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative group w-full h-[20rem] bg-n-8 border border-n-6 rounded-[2rem] overflow-hidden flex flex-col justify-center items-center"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-white text-center px-4">{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
                    <img className="w-full" src={lines} width={1480} height={177} alt="" />
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
                    <img className="w-full" src={lines} width={1480} height={177} alt="" />
                </div>

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
