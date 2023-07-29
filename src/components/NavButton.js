// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { classname } from "../funcs/classname";

export function NavButton({ navTo, title, icon, pic }) {
    return (
        <NavLink
            to={navTo}
            className={({isActive}) => classname("flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-white hover:text-sky-500 font-medium", isActive ? "bg-white text-sky-500" : "text-slate-600")}
        >
            {/* <FontAwesomeIcon icon={icon} className="w-5" /> */}
            <img src={pic} className="w-5" alt={`icon for ${title}`}/>
            <div>{title}</div>
        </NavLink>
    )
}