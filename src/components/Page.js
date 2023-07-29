
export const Page = ({ children, title, pic }) => {
    return (
        <div className="grow py-6 px-12">
            <div className="flex flex-col items-center mt-8 mb-6">
                <img src={pic} alt={`icon for ${title}`} className="w-24"/>
                <div className="text-3xl text-sky-400 font-semibold">{title}</div>
            </div>
            {children}
        </div>)
}