import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";

const testimonials = [
    {
        id: "0",
        name: "Emma Cooray",
        position: "Director at Innovate Designs",
        feedback: "I recently collaborated with Ceriture, and the experience was simply amazing! Their team exceeded all my expectations, delivering a website that was both stunning and incredibly functional. The attention to detail and dedication to quality were evident in every aspect of their work. Communication was seamless, and they were always receptive to my feedback, ensuring that my vision was brought to life perfectly. I couldn’t have asked for a better team, and I am thrilled with the final result. I highly recommend Ceriture to anyone in need of professional web development services.",
    },
    {
        id: "1",
        name: "Thushara Dissanayake",
        position: "Founder of YooGoo",
        feedback: "Ceriture has been very helpful and communicative. I believe this is the best service I could ever find on any SriLanken platform. Clean code. Good job! Highly recommended.",
    },
    {
        id: "2",
        name: "Dominic J. Stella",
        position: "Founder of Metamoth",
        feedback: "Definitely recommend. very good communication, great quality work and very satisfied delivery time frame. we found them to be nothing but professional, but in an easy going way. they really worked with us for us to achieve our desired outcome, cannot fault them. we look forward to working with them again!.",
    },
    {
        id: "3",
        name: "Daniel Alexander Froreich",
        position: "Founder of AssetAvenue",
        feedback: "As the founder of AssetAvenue, I am delighted to share our exceptional experience working with the development team at Ceriture. Their communication has been outstanding, ensuring that we were always informed and involved throughout the project. The quality of their work surpassed our expectations, and they consistently delivered within the agreed time frames. The team at Ceriture demonstrated professionalism in every aspect, yet maintained an approachable and easy-going manner. They collaborated with us closely to ensure our vision was realized, and we couldn't be more satisfied with the results. We have found no faults in their service and are eager to partner with them again for future projects. We highly recommend Ceriture for anyone seeking top-notch development services.",
    }
];

const Testimonials = () => (
    <Section className="overflow-hidden" id="testimonials">
        <div className="container">
            <Heading tag="Client Testimonials" title="What our clients say" />

            <div className="grid gap-6 md:grid-cols-2 md:gap-4">
                {testimonials.map((item) => (
                    <div className="bg-n-6 rounded-lg shadow-md h-full flex" key={item.id}>
                        <div className="bg-n-8 rounded-lg flex-grow p-4">
                            <h4 className="h6 mb-2">{item.name}</h4>
                            <p className="body-2 text-n-4 italic mb-4">{item.position}</p>
                            <p className="body-2 text-n-4">{`"${item.feedback}"`}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                {/* <Button href="#testimonials">View more testimonials</Button> */}
            </div>
        </div>
    </Section>
);

export default Testimonials;
