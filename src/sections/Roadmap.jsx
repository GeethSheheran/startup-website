import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Tagline from "../components/Tagline";

const testimonials = [
    {
        id: "0",
        name: "Emily Carter",
        position: "CEO, InnovateX",
        feedback: "Working with this team has been a fantastic experience. Their dedication to delivering the best results exceeded our expectations!",
    },
    {
        id: "1",
        name: "David Johnson",
        position: "Founder, TechWave",
        feedback: "We appreciated their transparency and collaborative approach. They understood our vision and made it a reality.",
    },
    {
        id: "2",
        name: "Sarah Williams",
        position: "COO, Bright Solutions",
        feedback: "The team was proactive, communicated clearly, and delivered high-quality work ahead of schedule. Highly recommend!",
    },
    {
        id: "3",
        name: "James Lee",
        position: "CTO, NexGen Labs",
        feedback: "The process was seamless from start to finish. They delivered exactly what we needed, with great attention to detail.",
    }
];

const Testimonials = () => (
    <Section className="overflow-hidden" id="testimonials">
        <div className="container md:pb-10">
            <Heading tag="Client Testimonials" title="What our clients say" />

            <div className="grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {testimonials.map((item) => (
                    <div className="p-[1px] bg-n-6 rounded-lg shadow-md" key={item.id}>
                        <div className="p-4 bg-n-8 rounded-lg">
                            <h4 className="h6 mb-2">{item.name}</h4>
                            <p className="body-2 text-n-4 italic mb-4">{item.position}</p>
                            <p className="body-2 text-n-4">{`"${item.feedback}"`}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                {/* <Button href="#testimonials">View more testimonials</Button> */}
            </div>
        </div>
    </Section>
);

export default Testimonials;
