export default function ProjectTile({
  title,
  codebase,
  description,
  url,
  image,
}) {
  return (
    <div className="flex py-4 px-2 sm:gap-5 flex-col items-center sm:flex-row sm:odd:flex-row-reverse sm:justify-center odd:bg-slate-300 even:bg-slate-500">
      <div className="sm:my-4 basis-1/2 max-w-[720px] drop-shadow-md">
        <img
          className="m-auto rounded-t-md sm:rounded-lg"
          src={image}
          alt="Screenshot of homepage"
        />
      </div>
      <div className="rounded-b-md sm:rounded-lg text-center bg-slate-700 aspect-video basis-1/2 max-w-full sm:max-w-[720px] drop-shadow-md flex flex-col justify-center">
        <h6 className="sm:text-4xl sm:py-3 pb-1 text-2xl underline">{title}</h6>
        <div className="">
          <p className="py-1 sm:py-2">{description}</p>
          <ul className="flex justify-center gap-4 py-2">
            {codebase.map((item) => (
              <li className="bg-opacity-60 bg-slate-300 px-1 rounded">
                {item}
              </li>
            ))}
          </ul>
          <a target="_blank" className="text-base" href={url}>
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
}
