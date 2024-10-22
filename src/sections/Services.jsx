import Section from "../components/Section";
import Heading from "../components/Heading";
import { service1, service2, service3, check, openaiWhiteSymbol, gradient, play, loading, recording03, recording01, disc02, chromecast, sliders04 } from "../assets";
import ChatBubbleWing from "../assets/svg/ChatBubbleWing"

const openaiServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

const Services = () => {
    return (
        <Section id="technologies">
            <div className="container">
                <Heading title="HumAIn Approach" text="Ceriture unlocks the potential of AI-powered applications" />

                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-white/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img className="w-full h-full object-cover md:object-right" width={800} alt="" height={730} src={service1} />
                        </div>

                        <div className="relative z-1 max-w-[27rem] ml-auto">
                            {/* <h4 className="h4 mb-4">Smartest AI</h4> */}
                            <p className="body-2 mb-[3rem] text-n-3">At Ceriture, our humAIn approach seamlessly blends human creativity with artificial intelligence. By leveraging AI for data analysis, automation, and trend prediction, we deliver fast, accurate results. Meanwhile, our talented team ensures that each solution is personalized and creatively aligned with your brand’s goals. This collaboration fosters open communication and trust, involving you at every stage. By combining the precision of AI with human insight, we drive success and growth, delivering exceptional, tailored solutions</p>
                            {/* <ul className="body-2">
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Photo generating</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Photo enhance</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Seamless Integration</p>
                                </li>
                            </ul> */}
                        </div>

                        <div className="flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] absolute left-4 right-4 bottom-4 border-white/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 text-base">
                            <img className="w-5 h-5 mr-4" src={loading} alt="" />
                            Generating HumAIn
                        </div>
                    </div>

                   
                </div>
            </div>
        </Section>
    );
};

export default Services;
