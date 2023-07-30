export function WebsiteCard({ children, link, pic, title }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="bg-sky-100 rounded-md p-6 flex flex-col space-y-4">
        <h1 className="text-center font-bold">{title}</h1>
        <img src={pic} alt={`${title} screenshot`} />
        <div>{children}</div>
      </div>
    </a>
  );
}
