import Heading from "../components/Heading";
import Section from "../components/Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefitIcon1, benefitIcon2, benefitIcon3, benefitIcon4, benefitImage2 } from "../assets";

const benefits = [
    {
        title: "Web Development",
        text: "Our team specializes in crafting dynamic and responsive web applications tailored precisely to your business needs. Leveraging the latest technologies and industry best practices, we deliver robust, scalable, and secure web solutions. From intuitive user interfaces to seamless back-end functionality, we ensure your web application not only looks exceptional but also performs flawlessly.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        title: "Web3 Development",
        text: "Embark on a journey into the decentralized realm with Ceriture's cutting-edge Web3 development services. We excel in building secure, transparent, and efficient blockchain-based applications that empower businesses to harness the full potential of decentralized technologies. Whether it's creating smart contracts, developing decentralized apps (dApps), or integrating blockchain solutions, Ceriture serves as your trusted partner in navigating and thriving within the Web3 ecosystem.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        title: "Software Development",
        text: "At Ceriture, our software development services are meticulously designed to tackle complex business challenges with tailored software solutions. We follow a rigorous development process to ensure your software meets your specific requirements and exceeds expectations. From enterprise-grade applications to innovative software products, we deliver solutions that drive efficiency, foster innovation, and fuel business growth.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        title: "Brand Development - Ceriture Viral",
        text: "Build a resilient and impactful brand with our comprehensive brand development services. From strategic brand positioning to identity design and digital marketing, we collaborate closely with you to create a cohesive and compelling brand identity. Our goal is to craft a brand that resonates deeply with your target audience, enhances market presence, and establishes a lasting impression in the competitive landscape.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        title: "Mobile Application Development",
        text: "Stay ahead in the mobile-first era with our exceptional mobile application development services. We specialize in creating intuitive and engaging mobile apps for both iOS and Android platforms, ensuring seamless user experiences across devices. From initial concept to deployment, our team manages every phase of the development process, delivering apps that not only delight users but also drive tangible business outcomes.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    // {
    //     title: "Improve everyday",
    //     text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    //     backgroundUrl: "./src/assets/benefits/card-6.svg",
    //     iconUrl: benefitIcon2,
    //     imageUrl: benefitImage2,
    // },
];

const Benefits = () => {
    return (
        <Section id="services">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="Our Services" />

                <div className="flex flex-wrap gap-10 mb-10">
                    {benefits.map((item, i) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={i}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    {/* <img src={item.iconUrl} width={48} height={48} alt={item.title} /> */}
                                    {/* <p className="ml-auto font-code text-xs font-bold text-white uppercase tracking-wider">Explore more</p> */}
                                    {/* <Arrow /> */}
                                </div>
                            </div>

                            {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}

                            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">{item.imageUrl && <img src={item.imageUrl} width={380} height={362} alt={item.title} className="w-full h-full object-cover" />}</div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Benefits;
