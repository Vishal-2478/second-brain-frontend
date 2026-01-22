import type { ReactElement } from "react"

export const SidebarItem = ({ text, icon }: { text: string, icon: ReactElement }) => {
    return (
        <div className="flex gap-2 p-2 m-1 cursor-pointer hover:bg-gradient-to-l from-violet-400 to-orange-300 rounded-lg transition-all duration-300">
            {icon}{text}
        </div>
    )
}