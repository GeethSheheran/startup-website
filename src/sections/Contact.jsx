import Section from "../components/Section";
import Heading from "../components/Heading";
import { service1, service2, loading } from "../assets";
import ChatBubbleWing from "../assets/svg/ChatBubbleWing";

const Contact = () => {
    return (
        <Section id="contact">
            <div className="container">
                <Heading title="Contact Us" text="We're here to help! Reach out to us, and we'll get back to you promptly." />

                <div className="flex flex-wrap justify-between items-start gap-8 mt-12">
                    {/* Left Card - Contact Form */}
                    <div className="relative z-1 flex-1 h-[30rem] p-8 border border-white/10 rounded-3xl overflow-hidden lg:p-10">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            <img className="w-full h-full object-cover" width={800} alt="Service 1" height={730} src={service1} />
                        </div>

                        <div className="relative z-1 max-w-[40rem]">
                            <h4 className="h4 mb-4">Contact Us</h4>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-n-3">Name</label>
                                    <input 
                                        type="text" 
                                        required 
                                        className="mt-1 block w-full p-2 bg-black/30 backdrop-blur-md border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-n-5" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-n-3">Email</label>
                                    <input 
                                        type="email" 
                                        required 
                                        className="mt-1 block w-full p-2 bg-black/30 backdrop-blur-md border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-n-5" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-n-3">Message</label>
                                    <textarea 
                                        required 
                                        rows={4} 
                                        className="mt-1 block w-full p-2 bg-black/30 backdrop-blur-md border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-n-5" 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full px-4 py-2 text-white bg-n-6 rounded-md hover:bg-n-8 focus:outline-none"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Card - Contact Details with Background Image */}
                    <div className="relative z-1 flex-1 h-[30rem] p-8 border border-white/10 rounded-3xl overflow-hidden lg:p-10">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            <img className="w-full h-full object-cover" width={800} alt="Service 2" height={730} src={service2} />
                        </div>

                        <div className="relative z-1 max-w-[30rem]">
                            <h4 className="h4 mb-4">Contact Details</h4>
                            <p className="body-2 mb-[2rem] text-n-3">Reach out to us for inquiries or support. We are here to help you unlock the full potential of your business.</p>
                            <ul className="body-2">
                                <li className="flex items-start py-2">
                                    <strong className="w-24 text-n-3">Name:</strong>
                                    <span>Ceriture</span>
                                </li>
                                <li className="flex items-start py-2">
                                    <strong className="w-24 text-n-3">Email:</strong>
                                    <span>info@ceriture.com</span>
                                </li>
                                <li className="flex items-start py-2">
                                    <strong className="w-24 text-n-3">Contact:</strong>
                                    <span>+1 (800) 123-4567</span>
                                </li>
                                <li className="flex items-start py-2">
                                    <strong className="w-24 text-n-3">Address:</strong>
                                    <span>123 Innovation Way, Tech City, USA</span>
                                </li>
                                <li className="flex items-start py-2">
                                    <strong className="w-24 text-n-3">Location:</strong>
                                    <span>https://maps.google.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Contact;
