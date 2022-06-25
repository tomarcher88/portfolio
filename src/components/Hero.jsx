export default function Hero() {
  return (
    <header
      className="grid min-h-screen place-content-center bg-slate-700"
      id="Home"
    >
      <p className="text-2xl text-center p-5 sm:px-24 md:px-60">
        <span className="text-9xl font-fjalla-one">Hello</span>
        <br />
        I'm Tom, a self taught developer with experience using{" "}
        <a href="https://github.com/tomarcher88" target="_blank">
          <span className="bg-opacity-60 bg-slate-300 px-1 rounded font-fjalla-one">
            HTML
          </span>
          ,{" "}
          <span className="bg-opacity-60 bg-slate-300 px-1 rounded font-fjalla-one">
            CSS
          </span>{" "}
          &{" "}
          <span className="bg-opacity-60 bg-slate-300 px-1 rounded font-fjalla-one">
            JavaScript
          </span>
        </a>
        . I'm eager to build a career in the world of Web Development and{" "}
        <a
          className="bg-opacity-60 bg-slate-300 px-1  rounded font-fjalla-one"
          href="https://www.linkedin.com/in/tom-archer/"
          target="_blank"
        >
          network
        </a>{" "}
        with other professionals to enhance my skillset. Keep scrolling for some
        of my latest{" "}
        <a
          className="bg-opacity-60 bg-slate-300 px-1  rounded font-fjalla-one"
          href="#Projects"
        >
          projects
        </a>
        !
      </p>
    </header>
  );
}
