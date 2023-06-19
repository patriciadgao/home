import { NavButton } from "./NavButton";

const navInfo = [
    {
        title: "home",
        navTo: "/"
    },
    {
        title: "about",
        navTo: "about"
    },
    {
        title: "collage book",
        navTo: "collagebook"
    },
    {
        title: "poetry",
        navTo: "poetry"
    },
    {
        title: "other adventures",
        navTo: "otheradventures"
    }
]

export const Sidebar = ({ isMenuOpen }) => {
    const classes = isMenuOpen ? "bg-pink-200 transition-width duration-500 w-[90vw] sm:w-[50vw] md:w-[30vw] lg:w-[20vw]" : "bg-pink-200 w-0 overflow-hidden transition-width duration-500";
    return (
        <div className={classes}>
            <div className="p-6">
                <div className="flex flex-col space-y-2">
                    {
                        navInfo.map((i, j) => (
                            <NavButton
                                key={j}
                                title={i.title}
                                navTo={i.navTo}
                            />
                        ))
                    }
                </div>
            </div>
        </div>)
}