export default function ProjectTile({
  title,
  codebase,
  description,
  url,
  image,
}) {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:odd:flex-row-reverse sm:justify-center w-screen odd:bg-slate-300 even:bg-slate-500">
      <div className="m-4">
        <img
          className="m-auto rounded-lg"
          src={image}
          alt="Screenshot of homepage"
        />
      </div>
      <div className="rounded-lg text-center bg-slate-700 sm:min-h-[405px]">
        <h6 className="text-4xl py-3">{title}</h6>
        <div className="px-4">
          <p className="py-2">{description}</p>
          <ul className="flex justify-center gap-4">
            {codebase.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <a className="text-xl" href={url}>
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
}
