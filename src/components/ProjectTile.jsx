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
      <div className="rounded-b-md sm:rounded-lg text-center bg-slate-700 aspect-video basis-1/2 max-w-[720px] drop-shadow-md flex flex-col justify-center">
        <h6 className="text-4xl py-3 underline">{title}</h6>
        <br />
        <div className="">
          <p className="py-2">{description}</p>
          <br />
          <ul className="flex justify-center gap-4">
            {codebase.map((item) => (
              <li className="bg-opacity-60 bg-slate-300 px-1 rounded">
                {item}
              </li>
            ))}
          </ul>
          <br />
          <a className="text-xl" href={url}>
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
}
