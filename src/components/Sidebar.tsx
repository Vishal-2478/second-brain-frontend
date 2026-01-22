import { useNavigate } from "react-router-dom";
import { DocumentIcon } from "../icons/DocumentIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const SideBar = () => {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/signin");
    }

    return (
        <div className="h-screen w-59 border-r-2 border-gray-300 fixed left-0 top-0
        flex flex-col justify-between">

            <div>
                <div className="text-xl font-semibold flex items-center gap-1 mb-2 p-2 ">
                    <span className="flex items-center gap-1 bg-gradient-to-l from-violet-400 to-orange-300 rounded-xl pl-1.5 pr-2">
                        <img src="https://framerusercontent.com/images/9g2qKJHGB0ahDdEw6tCAfnV9o4.png" width="50" height="50" />
                        Second Brain
                    </span>
                </div>

                <SidebarItem text="Tweets" icon={<TwitterIcon />} />
                <SidebarItem text="Videos" icon={<YoutubeIcon />} />
                <SidebarItem text="Documents" icon={<DocumentIcon />} />
            </div>

            {/* LOGOUT BUTTON */}
            <div className="p-3">
                <button
                    onClick={handleLogout}
                    className="w-full py-2 rounded-lg text-white bg-gradient-to-l from-red-400 to-red-600 hover:opacity-90 transition-all"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};
