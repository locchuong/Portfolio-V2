import PORTFOLIO_DATA from "@constants/PORTFOLIO_DATA";
import ExperienceItem from "@components/ExperienceItem";

import { ReactComponent as ArrowRightIcon } from "@assets/icons/ArrowRight.svg";
import { ReactComponent as GithubIcon } from "@assets/icons/Github.svg";
import { ReactComponent as LinkedInIcon } from "@assets/icons/LinkedIn.svg";
import { ReactComponent as EnvelopeIcon } from "@assets/icons/Envelope.svg";

import ProjectItem from "@components/ProjectItem";
import { useMemo, useState } from "react";
import useIntersection from "@hooks/useIntersection";
import CalloutLink from "@components/CalloutLink";
import SocialLink from "@components/SocialLink";

enum Section {
  About,
  Experience,
  Projects,
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.About);

  const AboutSectionRef = useIntersection(() => setActiveSection(Section.About));
  const ExperienceSectionRef = useIntersection(() => setActiveSection(Section.Experience));
  const ProjectsContainerRef = useIntersection(() => setActiveSection(Section.Projects));

  const AboutSectionIsActive = useMemo(() => activeSection === Section.About, [activeSection]);
  const ExperienceSectionIsActive = useMemo(() => activeSection === Section.Experience, [activeSection]);
  const ProjectsSectionIsActive = useMemo(() => activeSection === Section.Projects, [activeSection]);

  return (
    <div className="relative z-[1] m-auto min-h-screen max-w-7xl px-24">
      <div className="flex justify-between gap-4">
        <header className="sticky top-0 flex max-h-screen flex-1 flex-col justify-between py-24">
          <div>
            <h1 className="w-fit bg-backdrop font-bold text-white">{PORTFOLIO_DATA.fullName}</h1>
            <h2 className="mt-2 w-fit bg-backdrop text-white">{PORTFOLIO_DATA.role}</h2>
            <p className="mt-4 w-fit max-w-xs bg-backdrop text-neutral-400">{PORTFOLIO_DATA.catchPhrase}</p>
            <nav className="mt-16">
              <ul>
                <li>
                  <a className="group flex w-fit items-center py-3" href="#about">
                    <span
                      className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-white ${
                        AboutSectionIsActive ? "w-16 bg-white" : "w-8 bg-neutral-400"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest group-hover:text-white ${
                        AboutSectionIsActive ? "text-white" : "text-neutral-400"
                      }`}
                    >
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex w-fit items-center py-3" href="#experience">
                    <span
                      className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-white ${
                        ExperienceSectionIsActive ? "w-16 bg-white" : "w-8 bg-neutral-400"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest group-hover:text-white ${
                        ExperienceSectionIsActive ? "text-white" : "text-neutral-400"
                      }`}
                    >
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex w-fit items-center py-3" href="#projects">
                    <span
                      className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-white ${
                        ProjectsSectionIsActive ? "w-16 bg-white" : "w-8 bg-neutral-400"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest group-hover:text-white ${
                        ProjectsSectionIsActive ? "text-white" : "text-neutral-400"
                      }`}
                    >
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="flex flex-row gap-4">
            {PORTFOLIO_DATA.socials?.githubUrl && (
              <li>
                <SocialLink href={PORTFOLIO_DATA.socials?.githubUrl} icon={<GithubIcon />} />
              </li>
            )}
            {PORTFOLIO_DATA.socials?.linkedInUrl && (
              <li>
                <SocialLink href={PORTFOLIO_DATA.socials?.linkedInUrl} icon={<LinkedInIcon />} />
              </li>
            )}
            {PORTFOLIO_DATA.socials?.email && (
              <li>
                <SocialLink href={`mailto:${PORTFOLIO_DATA.socials?.email}`} icon={<EnvelopeIcon />} />
              </li>
            )}
          </ul>
        </header>
        <main className="flex min-h-screen flex-1 flex-col gap-24 py-24">
          <section className="mb-4" id="about" ref={AboutSectionRef}>
            <div className="flex flex-col gap-4 ">
              <p className="bg-backdrop text-neutral-400">
                From an early age, I was captivated by technology. From dismantling my first computer to building my{" "}
                <CalloutLink href="https://locchuong.github.io/locchuong/">first website</CalloutLink>, nothing beats the satisfaction of
                understanding how it all comes together.
              </p>
              <p className="bg-backdrop text-neutral-400">
                Fast-forward to today, I'm focused on building the next generation of Accounting workflows at{" "}
                <CalloutLink href="https://www.sage.com/en-gb/sage-network/">Sage Network</CalloutLink>. I've had the pleasure of contributing to
                groundbreaking projects and collaborating with some of the best minds in the industry.
              </p>
              <p className="bg-backdrop text-neutral-400">
                When I'm not coding, you'll find me hitting the gym, playing with my two cats, or gaming on{" "}
                <CalloutLink id="League_Cursor">Summoner's Rift</CalloutLink>.
              </p>

              <p className="bg-backdrop text-neutral-400">Thanks for taking the time to read about my journey!</p>
              <p className="bg-backdrop text-neutral-400">
                Let's <CalloutLink href="https://www.linkedin.com/in/loc-chuong/">connect</CalloutLink>
                {" and have a proper conversation :)"}
              </p>
            </div>
          </section>

          <section className="flex flex-col" id="experience" ref={ExperienceSectionRef}>
            <p className="mb-8 w-fit bg-backdrop text-lg text-white">Experience</p>
            <ul className="group/list flex flex-col gap-12">
              {PORTFOLIO_DATA.experience.map((data) => (
                <ExperienceItem key={data.position + data.description} data={data} />
              ))}
            </ul>
            <a
              className="align-center mt-8 flex w-fit items-center justify-center gap-1 text-neutral-400 transition-all hover:gap-2 hover:text-primary hover:underline"
              href={PORTFOLIO_DATA.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Resume
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </section>

          <section id="projects" ref={ProjectsContainerRef}>
            <p className="mb-8 w-fit bg-backdrop text-lg text-white">Projects</p>
            <ul className="group/list flex flex-col gap-12">
              {PORTFOLIO_DATA.projects.map((data) => (
                <ProjectItem key={data.title} data={data} />
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
