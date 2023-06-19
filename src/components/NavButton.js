import { NavLink } from "react-router-dom";

export function NavButton({ navTo, title }) {
    return (
        <NavLink
            to={navTo}
            className={({ isActive }) => isActive ? "bg-blue-500" : "bg-blue-200"}
        >
            {title}
        </NavLink>
    )
}