import { useNavigate } from "react-router-dom";

export function Card({ children, link, pic, title, navigateTo }) {
  const navigate = useNavigate();
  return (
    link ? <a href={link} target="_blank" rel="noreferrer">
      <InnerCardContents pic={pic} title={title}>{children}</InnerCardContents>
    </a> :
      <button onClick={() => navigate(navigateTo)}>
        <InnerCardContents pic={pic} title={title}>{children}</InnerCardContents>
      </button>
  );
}

function InnerCardContents({ children, pic, title }) {
  return <div className="bg-sky-100 rounded-md p-6 flex flex-col space-y-4 h-full">
    <h1 className="text-center font-bold">{title}</h1>
    {pic && <img src={pic} alt={`${title} screenshot`} />}
    <div>{children}</div>
  </div>
}
