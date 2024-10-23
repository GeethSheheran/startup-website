import notification1 from "../assets/notification/hero3.png";
import notification2 from "../assets/notification/2.png";
import notification3 from "../assets/notification/3.png";
import notification4 from "../assets/notification/1.png";

const Notification = ({ className, title }) => {
    return (
        <div className={`${className || ""} flex items-center p-4 pr-6 bg-[#474060]/40 backdrop-blur border border-white/10 rounded-2xl gap-5`}>
            <img src={notification1} width={62} height={62} alt="Notification Icon" className="rounded-xl" />

            <div className="flex-1">
                <h6 className="mb-1 font-semibold text-base">{title}</h6>

                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        <li className="flex w-6 h-6 border-2 border-[#2E2A41] rounded-full overflow-hidden">
                            <img src={notification4} className="w-full" width={20} height={20} alt="User Avatar" />
                        </li>
                        <li className="flex w-6 h-6 border-2 border-[#2E2A41] rounded-full overflow-hidden">
                            <img src={notification3} className="w-full" width={20} height={20} alt="User Avatar" />
                        </li>
                        <li className="flex w-6 h-6 border-2 border-[#2E2A41] rounded-full overflow-hidden">
                            <img src={notification2} className="w-full" width={20} height={20} alt="User Avatar" />
                        </li>
                    </ul>
                    <div className="body-2 text-[#6C7275]">24/7</div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
