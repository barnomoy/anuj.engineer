import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUp,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building,
  CalendarDays,
  ChevronRight,
  Download,
  ExternalLink,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react'
import { education, experiences, expertise, navItems, projects } from './data/portfolio'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -65%', threshold: [0.05, 0.25, 0.5] },
    )
    sections.forEach(section => section && observer.observe(section))

    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(String(data.get('subject') || 'Portfolio enquiry'))
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
    )
    window.location.href = `mailto:anujkumardey.cuet@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
          <span className="brand-mark">AK</span>
          <span><strong>Anuj Kumar Dey</strong><small>Civil Engineer</small></span>
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              className={activeSection === id ? 'active' : ''}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(value => !value)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-image" aria-label="Illustrative highway infrastructure" />
          <div className="hero-overlay" />
          <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-status"><span /> Engineering Infrastructure & Development</div>
            <p className="designation">Civil Engineer <b>|</b> Transportation & Highway Engineering Specialist</p>
            <h1>Engineering sustainable roads and <em>building better connections.</em></h1>
            <p className="hero-description">Experienced Civil Engineer working in transportation infrastructure, highway development, pavement engineering, bridge rehabilitation, and project management.</p>
            <div className="hero-actions">
              <button className="btn btn-gold" onClick={() => scrollTo('projects')}>Explore My Projects <ChevronRight size={18} /></button>
              <a className="btn btn-outline" href="/Anuj-Kumar-Dey-CV.pdf" download><Download size={18} /> Download My CV</a>
            </div>
          </motion.div>
          <motion.div className="hero-profile" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="profile-frame">
              <div className="profile-placeholder"><span>AK</span><small>Professional Profile Photograph</small></div>
            </div>
            <div className="experience-badge"><strong>7+</strong><span>Years in<br />Engineering</span></div>
          </motion.div>
          <button className="scroll-indicator" onClick={() => scrollTo('about')} aria-label="Scroll to about section">
            <span>SCROLL</span><ArrowDown size={16} />
          </button>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <motion.div {...reveal} className="about-copy">
              <SectionHeading eyebrow="01 / Professional Profile" title="Building resilient infrastructure through engineering excellence." />
              <p>Anuj Kumar Dey is a Civil Engineer with professional experience across transportation infrastructure, highway development, pavement engineering, bridge rehabilitation, geotechnical engineering, and construction project management.</p>
              <p>He holds a Bachelor of Science in Civil Engineering from Chittagong University of Engineering & Technology (CUET). His career includes service at the Roads & Highways Department and previous experience at the Nuclear Power Plant Company Bangladesh Limited, following an internship with Orient Trading & Builders Limited.</p>
            </motion.div>
            <motion.div {...reveal} className="philosophy-card">
              <span className="philosophy-number">MY ENGINEERING PHILOSOPHY</span>
              <blockquote>“Durable infrastructure begins with responsible planning, informed engineering decisions, and disciplined execution.”</blockquote>
              <div className="philosophy-facts">
                <div><strong>RHD</strong><span>Government Engineering</span></div>
                <div><strong>DPM</strong><span>Project Leadership</span></div>
                <div><strong>CUET</strong><span>Civil Engineering</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="expertise" className="section expertise-section">
          <div className="container">
            <SectionHeading eyebrow="02 / Areas of Expertise" title="Technical capabilities across the infrastructure lifecycle." />
            <div className="expertise-grid">
              {expertise.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.article {...reveal} transition={{ duration: 0.45, delay: index * 0.025 }} className="expertise-card" key={item.title}>
                    <div className="expertise-icon"><Icon size={23} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <SectionHeading eyebrow="03 / Professional Journey" title="Experience in public infrastructure and development." />
            <div className="timeline">
              {experiences.map((item, index) => (
                <motion.article {...reveal} className="timeline-item" key={item.organization}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div><span className="period">{item.period}</span><h3>{item.organization}</h3><h4>{item.role}</h4></div>
                      <div className="timeline-employer">{item.detail}</div>
                    </div>
                    <p className="employer">{item.employer}</p>
                    <ul>{item.responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}</ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <SectionHeading eyebrow="04 / Featured Projects" title="Engineering work at scale." text="Selected professional infrastructure projects. Project imagery is illustrative and does not represent verified project photographs." />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.article {...reveal} className={index === 0 ? 'project-card featured' : 'project-card'} key={project.title}>
                  <div className="project-image">
                    <img src={project.image} alt="Illustrative civil engineering and infrastructure" loading="lazy" />
                    <span className="project-code">{project.code}</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-period"><CalendarDays size={15} /> {project.period}</div>
                    <h3>{project.title}</h3>
                    <div className="project-stats">
                      <div><span>Project Length</span><strong>{project.length}</strong></div>
                      <div><span>Project Cost</span><strong>{project.cost}</strong></div>
                    </div>
                    <div className="project-meta"><span>{project.funding}</span><strong>{project.role}</strong></div>
                    {index < 2 && <div className="works-list"><span>Key work scope</span><p>Embankment improvement · pavement widening and strengthening · culverts · drains · footpaths · retaining walls · slope protection · intersection development</p></div>}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="section leadership-section">
          <div className="container leadership-grid">
            <motion.div {...reveal}>
              <SectionHeading eyebrow="05 / Leadership & Management" title="Coordinating complex infrastructure delivery." />
              <p className="leadership-intro">Deputy Project Manager responsibilities across highway improvement and bridge infrastructure projects.</p>
            </motion.div>
            <motion.div {...reveal} className="leadership-list">
              {[
                ['Z-7704 District Highway', 'Deputy Project Manager (DPM), PIU', '2024 — 2025'],
                ['R-850 Regional Highway', 'Deputy Project Manager (DPM), PIU', '2024 — 2025'],
                ['37.20 m PC Girder Bridge', 'Deputy Project Manager (DPM)', '2022 — 2023'],
              ].map(([title, role, period]) => (
                <div className="leadership-row" key={title}>
                  <div className="leadership-icon"><BriefcaseBusiness size={21} /></div>
                  <div><h3>{title}</h3><p>{role}</p></div>
                  <span>{period}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="education" className="section education-section">
          <div className="container">
            <SectionHeading eyebrow="06 / Academic Background" title="Education grounded in civil engineering." />
            <div className="education-grid">
              {education.map((item, index) => (
                <motion.article {...reveal} className="education-card" key={item.degree}>
                  <div className="education-year">{item.year}</div>
                  <div className="education-icon">{index === 0 ? <GraduationCap /> : <BookOpen />}</div>
                  <h3>{item.degree}</h3>
                  <p className="institution">{item.institution}</p>
                  <strong>{item.score}</strong>
                  <span>{item.detail}</span>
                  {item.extra && <small>{item.extra}</small>}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section training-section">
          <div className="container training-grid">
            <motion.div {...reveal}>
              <SectionHeading eyebrow="07 / Training & Development" title="Continuous professional development." />
            </motion.div>
            <motion.div {...reveal} className="training-list">
              {[
                ['2023', 'BUET', 'Safety Management in Construction Industry'],
                ['2022', 'RHD Training Centre, Mirpur', 'Engineers’ Estimate, Technical Specification & Road Safety'],
                ['2020', 'Bangladesh Public Administration Training Centre', 'Foundation Training for BCS Officers'],
                ['2020', 'Bangladesh Public Administration Training Centre', 'Workshop on Annual Performance Agreement (APA)'],
                ['2020', 'Bangladesh Academy for Rural Development', 'Attachment Program on Poverty Reduction & Rural Development'],
                ['20219*', 'Engineering Staff College, Bangladesh', 'Technical Foundation Training for RHD Assistant Engineers'],
                ['2019', 'Kanchpur, Meghna & Gumti 2nd Bridges Project', 'Bridge construction and existing bridge rehabilitation'],
                ['2019', 'Engineering Staff College, Bangladesh', 'Training on Road Safety'],
              ].map(([year, place, name]) => (
                <div className="training-row" key={`${year}-${name}`}>
                  <span className={year.includes('*') ? 'year flagged' : 'year'}>{year.replace('*', '')}</span>
                  <div><h3>{name}</h3><p>{place}</p>{year.includes('*') && <small>CV year marked “20219”; requires verification.</small>}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section research-section">
          <div className="container">
            <SectionHeading eyebrow="08 / Research Interests" title="Focused areas for future study and innovation." />
            <div className="research-grid">
              {[
                ['Pavement Maintenance', 'Maintenance and rehabilitation strategies', ShieldCheck],
                ['Transport Optimization', 'Data-driven transport management', MapPin],
                ['Infrastructure Reliability', 'Road and bridge operation, maintenance, and service reliability', Building],
                ['Digital Twin', 'Smart road infrastructure monitoring and maintenance', Languages],
              ].map(([title, text, Icon]) => {
                const ResearchIcon = Icon as typeof ShieldCheck
                return (
                  <motion.article {...reveal} className="research-card" key={title as string}>
                    <ResearchIcon size={28} />
                    <h3>{title as string}</h3>
                    <p>{text as string}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section affiliations-section">
          <div className="container affiliations-grid">
            <div>
              <SectionHeading eyebrow="09 / Professional Affiliations" title="Memberships & associations." />
              <div className="affiliation-list">
                {[
                  ['2019 — Present', 'Roads & Highways Engineer’s Association (RHEA), Bangladesh'],
                  ['2022 — 2024', 'CUET Career Club, CUET'],
                  ['2022', 'American Concrete Institute (ACI), CUET Chapter'],
                  ['2025', 'Institute of Engineers Bangladesh (IEB)'],
                ].map(([period, name]) => (
                  <div className="affiliation-row" key={name}><Users size={18} /><span>{period}</span><strong>{name}</strong></div>
                ))}
              </div>
            </div>
            <motion.div {...reveal} className="awards-panel">
              <SectionHeading eyebrow="10 / Awards" title="Academic & personal recognition." />
              {[
                ['2011 — 2015', 'University Scholarship', 'Good academic records'],
                ['2010', 'Dutch-Bangla Scholarship', 'GPA 5.00 in HSC'],
                ['2008', 'Dutch-Bangla Scholarship', 'GPA 5.00 in SSC'],
                ['2023', 'Best Footballer Award', 'Shikerpur, Jhenaidah'],
              ].map(([year, title, detail]) => (
                <div className="award-row" key={title}><Award size={20} /><div><span>{year}</span><h3>{title}</h3><p>{detail}</p></div></div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-header">
              <SectionHeading eyebrow="11 / Get in Touch" title="Let’s build better infrastructure together." />
              <div className="contact-cards">
                <a href="mailto:anujkumardey.cuet@gmail.com"><Mail size={20} /><span><small>Email</small><strong>anujkumardey.cuet@gmail.com</strong></span></a>
                <a href="tel:+8801730269090"><Phone size={20} /><span><small>Phone</small><strong>+880 1730-269090</strong></span></a>
                <div><MapPin size={20} /><span><small>Location</small><strong>Gopalganj, Bangladesh</strong></span></div>
              </div>
            </div>
            <div className="contact-grid">
              
              <div className="language-card">
                <Languages size={28} />
                <span>Languages</span>
                <h3>English</h3>
                <p>Proficient in reading, writing, listening, and speaking.</p>
                <div className="placeholder-social"><ExternalLink size={18} /><span>LinkedIn profile link available upon request</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand footer-brand"><span className="brand-mark">AK</span><span><strong>Anuj Kumar Dey</strong><small>Civil Engineer</small></span></div>
          <p>© {new Date().getFullYear()} Anuj Kumar Dey. All rights reserved.</p>
          <button onClick={() => scrollTo('home')}>Back to top <ExternalLink size={14} /></button>
        </div>
      </footer>

      {showTop && <button className="scroll-top" onClick={() => scrollTo('home')} aria-label="Scroll to top"><ArrowUp size={18} /></button>}
    </>
  )
}

export default App
