import img from '../images/company-x.png'

export default function ProjectTile({
  title,
  codebase,
  description,
  url,
  image,
}) {
  
  return (
    <div className="bg-slate-500 h-screen">
      <h6>{title}</h6>
      <img src={img} alt="Screenshot of homepage" />
      <p>{description}</p>
      <a href={url}>Link</a>
      <ul className="bg-teal-300">
        {codebase.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}
