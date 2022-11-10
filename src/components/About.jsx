import githubLogo from '../images/GitHub.png'
import emailLogo from '../images/Outlook.png'
import linkedinLogo from '../images/LinkedIn.png'

export default function About() {
  return (
    <footer id="About" className="bg-slate-700 min-h-screen flex items-center justify-center">
      <article className="text-2xl text-center p-5 sm:p-24" id="About">
        <h1 className="py-4 text-9xl font-fjalla-one">About</h1>
        <p className="text-center">
          A pragmatic, self-motivated, team player with an excellent work-ethic,
          I enjoy challenging tasks that require me to utilise my patience and
          problem-solving skills. I am a Junior Developer with experience
          working with: HTML, CSS, JavaScript (including jQuery & React),
          TailwindCSS, Bootstrap and Git. I have experience handling material
          knowledge and performing time sensitive website updates for some of
          the largest companies in the world and am well-regarded for my strong
          attention to detail. I am confident fetching data from an API,
          managing state within React and I even know how to centre a div.
          Valuing excellent UX, my projects utilise semantic HTML, and are
          responsive and accessible. I have an extensive background in customer
          service and use a high level of interpersonal skills to understand the
          needs of internal and external stakeholders.
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
