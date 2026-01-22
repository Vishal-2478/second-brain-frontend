import { DocumentIcon } from "../icons/DocumentIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"

export const SideBar = () => {
    return (
        <div className="h-screen w-59 border-r-2 border-gray-300 fixed left-0 top-0
        flex flex-col justify-self-start ">
            <div className="text-xl font-semibold flex items-center gap-1 mb-2 p-2 ">
                <span className="flex items-center gap-1   bg-gradient-to-l from-violet-400 to-orange-300 focus:bg-red-700 rounded-xl pl-1.5 pr-2">
                    <img src="https://framerusercontent.com/images/9g2qKJHGB0ahDdEw6tCAfnV9o4.png" width="50" height="50" />
                    Second Brain
                </span>
            </div>
            <SidebarItem text="Tweets" icon={<TwitterIcon />} />
            <SidebarItem text="Videos" icon={<YoutubeIcon />} />
            <SidebarItem text="Documents" icon={<DocumentIcon />} />
        </div>
    )
}