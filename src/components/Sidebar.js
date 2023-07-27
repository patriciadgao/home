import { faBook, faDove, faHouse, faMountainSun, faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { classname } from "../funcs/classname";
import { NavButton } from "./NavButton";

const navInfo = [
    {
        title: "home",
        navTo: "/",
        icon: faHouse
    },
    {
        title: "about",
        navTo: "about",
        icon: faMugSaucer
    },
    {
        title: "collage book",
        navTo: "collagebook",
        icon: faBook
    },
    {
        title: "poetry",
        navTo: "poetry",
        icon: faDove
    },
    {
        title: "other adventures",
        navTo: "otheradventures",
        icon: faMountainSun
    }
]

export const Sidebar = ({ isMenuOpen }) => {
    return (
        <div className={classname("bg-slate-100 transition-width duration-500", isMenuOpen ? "w-[90vw] sm:w-[50vw] md:w-[30vw] lg:w-[20vw]" : "w-0 overflow-hidden")}>
            <div className={classname("py-6 pl-6 transition-opacity duration-200 bg-slate-100", isMenuOpen ? "opacity-100" : "opacity-0")}>
                <div className="flex justify-center mb-6 mt-3">
                    <div className="w-48 h-48 bg-slate-200 rounded-full shrink-0"></div>
                </div>
                <div className="flex flex-col space-y-2">
                    {
                        navInfo.map((i, j) => (
                            <NavButton
                                key={j}
                                title={i.title}
                                navTo={i.navTo}
                                icon={i.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </div>)
}