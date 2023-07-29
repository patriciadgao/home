import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Page = ({ children, title, icon }) => {
    return (
        <div className="grow py-6 px-10">
            <div className="flex flex-col items-center space-y-3 mt-8 mb-6">
                <FontAwesomeIcon icon={icon} size="6x" className="text-sky-400" />
                <div className="text-3xl">{title}</div>
            </div>
            {children}
        </div>)
}