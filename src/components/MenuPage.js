import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MenuPage = ({ children, onMenuClick }) => {
    return (
        <div className="bg-yellow-200 grow p-6 flex flex-col">
            <div><FontAwesomeIcon onClick={onMenuClick} icon={faBars} className="hover:cursor-pointer" /></div>
            {children}
        </div>)
}