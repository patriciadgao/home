import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MenuPage = ({ children, onMenuClick }) => {
    return (
        <div className="grow flex flex-row">
            <div className="bg-slate-100 p-6"><FontAwesomeIcon onClick={onMenuClick} icon={faBars} className="hover:cursor-pointer" /></div>
            {children}
        </div>)
}