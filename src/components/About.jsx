import githubLogo from '../images/GitHub.png'
import emailLogo from '../images/Outlook.png'
import linkedinLogo from '../images/LinkedIn.png'

export default function About() {
  return (
    <footer className="bg-slate-700 min-h-screen flex items-center justify-center">
      <article className="text-2xl text-center p-5 sm:p-24" id="About">
        <h1 className="py-4 text-9xl font-fjalla-one">About</h1>
        <p className="text-center">
          Having spent the last two years embracing self-improvement and
          devoting myself to learning web development, I have built up an
          understanding of HTML, CSS, JavaScript & React, and a portfolio that
          demonstrates the skills and knowledge I have acquired over that time.
          I know how to fetch data from an API, build a React component and even
          centre a div; now I feel it's time for me to take the next step and
          start building a career along with my knowledge.
        </p>
        <div className="py-6">
          <ul className="flex flex-col gap-8 sm:flex-row justify-evenly text-xl w-3/4 m-auto ">
            <li>
              <a
                className="grid text-base sm:text-lg justify-items-center"
                href="https://github.com/tomarcher88"
                target="_blank"
              >
                <img
                  className="max-h-8 sm:max-h-12"
                  src={githubLogo}
                  alt="GitHub Logo"
                />
                @tomarcher88
              </a>
            </li>
            <li>
              <a
                className="grid text-base sm:text-lg justify-items-center"
                href="mailto:hello@tomarcher.uk"
                target="_blank"
              >
                <img
                  className="max-h-8 sm:max-h-12"
                  src={emailLogo}
                  alt="Outlook logo"
                />
                hello@tomarcher.uk
              </a>
            </li>
            <li>
              <a
                className="grid text-base sm:text-lg justify-items-center"
                href="https://www.linkedin.com/in/tom-archer/"
                target="_blank"
              >
                <img
                  className="max-h-8 sm:max-h-12"
                  src={linkedinLogo}
                  alt="LinkedIn Logo"
                />
                @Tom Archer
              </a>
            </li>
          </ul>
        </div>
      </article>
    </footer>
  );
}
