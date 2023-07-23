import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { classname } from "../funcs/classname";

export function NavButton({ navTo, title, icon }) {
    return (
        <NavLink
            to={navTo}
            className={({isActive}) => classname("flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-white hover:text-sky-400", isActive ? "bg-white text-sky-400" : "text-slate-300")}
        >
            <FontAwesomeIcon icon={icon} className="w-5" />
            <div className="text-slate-700">{title}</div>
        </NavLink>
    )
}