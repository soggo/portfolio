import { useState } from 'react'
import './App.css'
import anthropicLogo from './assets/Claude_AI_symbol.svg'
import awsLogo from './assets/aws-svgrepo-com.svg'
import bootstrapLogo from './assets/Bootstrap_logo.svg'
import geminiLogo from './assets/Google-gemini-icon.svg'
import gitLogo from './assets/git-icon-logo-svgrepo-com.svg'
import htmlLogo from './assets/html-5-logo-svgrepo-com.svg'
import javascriptLogo from './assets/javascript-logo-svgrepo-com.svg'
import azureLogo from './assets/Microsoft_Azure.svg'
import nodejsLogo from './assets/nodejs-icon-svgrepo-com.svg'
import openaiLogo from './assets/openai-svgrepo-com.svg'
import postgresLogo from './assets/postgresql-logo-svgrepo-com.svg'
import pythonLogo from './assets/python-svgrepo-com.svg'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind-svgrepo-com.svg'
import c2lVideo from './assets/c2l.mkv'
import fixVideo from './assets/fix.mkv'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

const highlightPoints = [
  'Full-stack Dev',
  'Problem Solver',
  'Shipping AI-enabled products',
]

const techStack = [
  { label: 'JavaScript', icon: javascriptLogo },
  { label: 'Node.js', icon: nodejsLogo },
  { label: 'Python', icon: pythonLogo },
  { label: 'React', icon: reactLogo },
  { label: 'HTML/CSS', icon: htmlLogo },
  { label: 'Bootstrap', icon: bootstrapLogo },
  { label: 'Tailwind', icon: tailwindLogo },
  { label: 'Postgres', icon: postgresLogo },
  { label: 'AWS', icon: awsLogo },
  { label: 'Azure', icon: azureLogo },
  { label: 'Git', icon: gitLogo },
  { label: 'openAI LLMs', icon: openaiLogo },
  { label: 'Anthropic LLMs', icon: anthropicLogo },
  { label: 'Gemini LLMs', icon: geminiLogo },
]

const projects = [
  {
    title: 'chat2linkd.in',
    url: 'https://chat2linkd.in',
    tag: 'Instant Messanger Bot',
    summary:
      'An instant messanger based bot that allows you to create linkedin posts from casual texts, and posts them to your linkedin profile, all without having to leave your your messaging app, currenlty works with whatsapp and telegram',
    tech: 'React · Node · Postgres  Gemini ',
    videoPreview: c2lVideo,
  },
  {
    title: 'fixslop.xyz',
    url: 'https://fixslop.xyz',
    tag: 'Productivity Tool',
    summary:
      'A full stack application that uses AI to change AI known slop output to be more human like',
    tech: 'React · Node · Postgres  Sonnet',
    videoPreview: fixVideo,
  },
  {
    title: 'Cover Letter Whiz',
    url: 'https://coverwhiz.pages.dev/',
    tag: 'Productivity Tool',
    summary:
      'A full stack application that uses AI to create tailored cover letters based on your job description, your resume and additional context provided',
    tech: 'React · Node · AWS  Gemini',
    preview: {
      width: 1366,
      height: 900,
      scale: 0.29,
      offsetY: 0,
    },
  },
]

const moreProjects = [
  {
    title: 'X DM Scraper',
    url: 'https://github.com/soggo/xScrpr',
    tag: 'Productivity Tool',
    summary:
      'Scrapes your X DMs and requests, feeds them to LLM which then flags things that may interest you or not depending on your config, built with VCs in mind.',
    
  },
  {
    title: 'Whatsapp Text2Doc ',
    url: 'https://github.com/soggo/WhatsappText2Doc',
    tag: 'Productivity Tool',
    summary:
      'A instant messanger based bot that allows you to convert your text messages to docx files, and docx files to text',
  },
  {
    title: 'Zapchat',
    url: 'https://www.youtube.com/watch?si=04GhCQf0Po-r3Czq&v=BQ3v_pzgFR8&feature=youtu.be',
    tag: 'AI + Automation',
    summary:
      'A slack bot linked to your Zapier account, that allows you create Zaps via chat',
    
  },
  {
    title: 'FitFusion',
    url: 'https://buyfitfusion.netlify.app/',
    tag: 'E-commerce',
    summary:'E-commerce site'    
  },

  {
    title: 'Bounty Store',
    url: 'https://shopbounty.netlify.app/',
    tag: 'E-commerce',
    summary:
      'E-commerce site',
   
  },
]

const services = [
  {
    title: 'Product Engineering',
    copy: 'Rapid prototyping through production-ready builds with obsessive attention to UX details and platform scalability.',
  },
  {
    title: 'AI Integration',
    copy: 'Strategic adoption of AI into existing products: model selection, integration, guardrails, and measurement.',
  },
  {
    title: 'Team Enablement',
    copy: 'Partnering with founders and teams to shape process, improve velocity, and mentor engineers through delivery.',
  },
]

const process = [
  {
    label: '01 — Discover',
    detail: 'Clarify outcomes, map workflow friction, and shape a measurable north star.',
  },
  {
    label: '02 — Design & Prototype',
    detail: 'Translate insights into flows, clickable prototypes, and technical architecture.',
  },
  {
    label: '03 — Build & Ship',
    detail: 'Tight build loops, comprehensive QA, and thoughtful launch support.',
  },
]

function App() {
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/VICTOR SOGO-SERIKI   CV.pdf'
    link.download = 'VICTOR SOGO-SERIKI CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#0d1b1e]">
      <header className="border-b border-[#e1e1dc] bg-[#0d7c5a] text-[#e6f7ef]">
        <div className="bg-[size:32px_32px] bg-[linear-gradient(#0c6f51_1px,transparent_1px),linear-gradient(90deg,#0c6f51_1px,transparent_1px)]">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 text-sm tracking-tight">
          </div>
        </div>
      </header>

      <div className="border-b border-[#e1e1dc] bg-[#f9f9f6]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
          <a href="#top" onClick={(e) => handleNavClick(e, 'top')} className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#0d7c5a]">Hire Victor</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#0f271b]/80 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href.substring(1))}
                className="group relative font-mono text-[13px] uppercase tracking-[0.08em] transition-all duration-300 hover:text-[#0d7c5a] hover:scale-105"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#0d7c5a] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-md bg-[#0d7c5a]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
             <button
              onClick={handleDownloadResume}
              className="cursor-pointer rounded-sm border border-[#0d7c5a] bg-[#0d7c5a] px-4 py-2 text-sm font-mono uppercase tracking-[0.08em] text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_rgba(13,124,90,0.2)]"
            >
              Download resume
            </button>
          </div>
        </div>
      </div>

      <main className="relative">
        <div className="mx-auto max-w-[1200px] border-x border-[#e1e1dc] bg-[#f7f7f5] px-6 pb-24">
          <section className="grid gap-12 border-b border-[#e1e1dc] pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr]" id="top">
            <div className="flex flex-col justify-center gap-8">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#d5d5d0] bg-white px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-[#0d7c5a]">
                 Victor Seriki
                </span>
                <h1 className="text-4xl font-semibold leading-[1.05] text-[#0b4a36] sm:text-5xl lg:text-6xl">
                   FULL STACK DEVELOPER + AI SOLUTIONS
                </h1>
                <p className="max-w-xl text-base text-[#384240]">
                   I specialize in creating end-to-end web applications that blend modern frontend frameworks, robust backend systems, and intelligent AI integrations.
                </p>
              </div>
              <ul className="space-y-2 font-mono text-[13px] uppercase tracking-[0.12em] text-[#0d7c5a]">
                {highlightPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-[#0d7c5a]/50" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 text-sm font-mono uppercase tracking-[0.1em] text-[#0d7c5a] sm:flex-row sm:items-center">
                <a
                  href="mailto:victor@hirevictor.com"
                  className="inline-flex items-center justify-center rounded-sm border border-[#0d7c5a] bg-[#0d7c5a] px-6 py-3 !text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_rgba(13,124,90,0.25)]"
                >
                  Contact me →
                </a>
                <a
                  href="#work"
                  onClick={(e) => handleNavClick(e, 'work')}
                  className="inline-flex items-center justify-center rounded-sm border border-[#0d7c5a]  px-6 py-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_rgba(13,124,90,0.25)] "
                >
                  View featured work
                  <span aria-hidden>↗</span>
                </a>
              </div>
              
            </div>
          </section>

          <section className="border-b border-[#e1e1dc] py-10" aria-label="Tech focus">
            <div className="mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0d7c5a]">skilled with:</span>
            </div>
            <div className="relative overflow-hidden rounded-full border border-[#dcdcd6] bg-white/60 py-4">
              <div
                className="tech-carousel flex items-center gap-10 whitespace-nowrap text-xs font-mono uppercase tracking-[0.2em] text-[#0b4a36]"
              >
                {[...techStack, ...techStack].map((tech, index) => (
                  <span key={`${tech.label}-${index}`} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-[#d2d2cd]" aria-hidden />
                    <img src={tech.icon} alt={`${tech.label} logo`} className="h-6 w-6 flex-shrink-0" />
                    {tech.label}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f7f7f5] to-transparent" aria-hidden />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f7f7f5] to-transparent" aria-hidden />
            </div>
          </section>

          <section className="grid gap-10 border-b border-[#e1e1dc] py-16" id="work">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7b8b8e]">Featured Work</span>
              <h2 className="max-w-xl text-3xl font-semibold text-[#0b4a36] sm:text-4xl">
               Some interesting things I've worked on
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col gap-5 rounded-2xl border border-[#d9d9d4] bg-white/80 p-6 transition-transform hover:-translate-y-1 hover:border-[#0d7c5a]"
                >
                  <div
                    className="relative overflow-hidden rounded-xl border border-[#d6d6d1] bg-[#f3f3ee]"
                    style={{ height: project.videoPreview ? '245px' : (project.preview?.height ?? 768) * (project.preview?.scale ?? 0.3) }}
                  >
                    {project.videoPreview ? (
                      <video
                        src={project.videoPreview}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover rounded-lg"
                      />
                    ) : (
                      <>
                        <div
                          className="pointer-events-none absolute left-1/2 top-0"
                          style={{
                            width: project.preview?.width ?? '100%',
                            height: project.preview?.height ?? '100%',
                            transform: project.preview
                              ? `translate(-50%, ${project.preview.offsetY ?? 0}px) scale(${project.preview.scale})`
                              : 'translate(-50%, 0) scale(0.3)',
                            transformOrigin: 'top center',
                          }}
                        >
                          <iframe
                            src={project.url}
                            title={`${project.title} preview`}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            className="h-full w-full border-0"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#00000040_8%,transparent_9%)] bg-[length:14px_14px] mix-blend-multiply opacity-10" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#f7f7f5] via-[#f7f7f5]/60 to-transparent" />
                      </>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#7b8b8e]">
                      <span>{project.tag}</span>
                      <span className="text-[#0d7c5a]">Live</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0d1b1e]">{project.title}</h3>
                    <p className="text-sm text-[#384240]">{project.summary}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.2em] text-[#0d7c5a] gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition-transform hover:translate-x-1 hover:text-[#0b4a36]"
                    >
                      Visit
                      <span aria-hidden>↗</span>
                    </a>
                    <span className="text-[12px] text-[#7b8b8e]">{project.tech}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => setShowMoreProjects((prev) => !prev)}
                className="inline-flex w-max items-center gap-2 rounded-sm border border-[#0d7c5a] bg-white px-4 py-2 font-mono text-[12px] uppercase tracking-[0.18em] text-[#0d7c5a] transition-all hover:-translate-y-0.5 hover:bg-[#0d7c5a] hover:text-white"
                aria-expanded={showMoreProjects}
              >
                {showMoreProjects ? 'Hide additional work' : 'View more work'}
                <span aria-hidden>{showMoreProjects ? '↑' : '↓'}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  showMoreProjects ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="grid gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
                  {moreProjects.map((project) => (
                    <article
                      key={project.title}
                      className="flex h-full flex-col gap-4 rounded-2xl border border-[#d9d9d4] bg-white/80 p-6"
                    >
                      <div className="space-y-3">
                        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7b8b8e]">
                          {project.tag}
                        </div>
                        <h3 className="text-lg font-semibold text-[#0d1b1e]">{project.title}</h3>
                        <p className="text-sm text-[#384240]">{project.summary}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[#0d7c5a]">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 transition-transform hover:translate-x-1 hover:text-[#0b4a36]"
                        >
                          Visit
                          <span aria-hidden>↗</span>
                        </a>
                        <span className="text-[#7b8b8e]">{project.tech}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
           
          </section>

          <section className="py-16" id="about">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#7b8b8e]">About Victor</span>
                <h2 className="text-3xl font-semibold text-[#0b4a36] sm:text-4xl">
                 Generalist Problem Solver
                </h2>
                <p className="text-sm text-[#384240]">
                 Full-stack developer with a passion for building efficient, elegant solutions. I bring a CS background and generalist approach to every layer of the stack from backend architecture to frontend experiences. As a naturally curious problem solver, I'm constantly exploring cutting-edge technologies and experimenting with new tools to optimize systems and build smarter solutions. My entrepreneurial mindset keeps me focused on shipping real value.
                </p>
            
              </div>
              <div className="flex flex-col gap-6 rounded-3xl border border-[#d9d9d4] bg-white/70 p-8">
                <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-[#0d7c5a]">
                  FUN FACTS
                </h3>
                <ul className="space-y-4 text-sm text-[#384240]">
                  <li className="flex items-start gap-4">
                    <span className="mt-1 h-px w-6 bg-[#0d7c5a]/40" aria-hidden />
                   Top 1% nationally in OSINT, if it's online I can probably find it.
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 h-px w-6 bg-[#0d7c5a]/40" aria-hidden />
                   I have a 1 of 1 way of getting real time info without using X APIs
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 h-px w-6 bg-[#0d7c5a]/40" aria-hidden />
                    I know a lot about financial markets
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer id="contact" className="border-t border-[#e1e1dc] bg-[#f9f9f6]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#0b4a36]">Let's build something.</h2>
          </div>
          <div className="flex flex-col items-start gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-[#0d7c5a] md:items-end">
            <a href="mailto:victor@hirevictor.com" className="inline-flex items-center gap-2 transition-colors hover:text-[#0b4a36]">
              Email
              <span aria-hidden>↗</span>
            </a>
            <a href="https://www.linkedin.com/in/victor-seriki-40750b241/" className="inline-flex items-center gap-2 transition-colors hover:text-[#0b4a36]">
              LinkedIn
              <span aria-hidden>↗</span>
            </a>
            <a href="https://github.com/soggo" className="inline-flex items-center gap-2 transition-colors hover:text-[#0b4a36]">
              GitHub
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
        <div className="border-t border-[#e1e1dc] bg-[#f7f7f5]">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 text-[11px] font-mono uppercase tracking-[0.18em] text-[#7b8b8e]">
            <span>© {new Date().getFullYear()} Victor Seriki</span>
         
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
