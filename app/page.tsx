"use client";

import { ArrowRight, Bot, CalendarDays, Code2, Gem, Play, Video } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { n: "01", title: "Brand & Marketing", icon: Gem, items: ["Branding & identity", "Strategy & campaigns", "Social media & advertising", "SEO / SEM", "Copywriting & growth"] },
  { n: "02", title: "Production", icon: Video, items: ["Video production", "Photography & drone", "Editing & VFX", "Audio & music production", "Podcasts & livestreaming"] },
  { n: "03", title: "Digital Products", icon: Code2, items: ["Websites & e-commerce", "Web platforms", "Mobile apps", "Custom software", "UI/UX design"] },
  { n: "04", title: "AI & Automation", icon: Bot, items: ["AI integrations", "Business automation", "Chatbots & tools", "Digital transformation", "Technology consulting"] },
  { n: "05", title: "Experiences", icon: CalendarDays, items: ["Events & activations", "Concerts & festivals", "Conferences & fairs", "Artist management", "Sponsorships"] }
];

const work = [
  ["BORN BOLD", "Brand Campaign", "linear-gradient(135deg,#45120c,#bd281c 55%,#171717)"],
  ["DRIVE FURTHER", "Video Production", "linear-gradient(135deg,#191919,#75452b 55%,#101010)"],
  ["NEXTGEN PLATFORM", "Web & App Development", "linear-gradient(135deg,#090909,#38313d 60%,#111)"],
  ["SOUND OF TOMORROW", "Event Production", "linear-gradient(135deg,#081321,#18305c 55%,#05080d)"]
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="heroBg" style={{ backgroundImage: "url(/hero-factory.jpg)" }} aria-hidden="true" />
        <div className="heroShade" />
        <nav className="nav shell">
          <a className="brand" href="#home">FACTORY<span>CREATIVE + TECHNOLOGY STUDIO</span></a>
          <div className="navlinks">
            <a href="#home">Home</a><a href="#services">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
          </div>
          <a className="pill small" href="#contact">LET&apos;S TALK <ArrowRight size={15}/></a>
        </nav>

        <div className="heroContent shell">
          <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
            <div className="eyebrow">IDEAS IN.<br/>IMPACT OUT.</div>
            <h1>WE MAKE<br/>THINGS THAT<br/>MOVE BUSINESSES.</h1>
            <p>Factory is a creative and technology studio.<br/>We build brands, produce content, develop digital<br/>products and create experiences that make an impact.</p>
            <div className="actions">
              <a className="pill" href="#contact">START A PROJECT <ArrowRight size={17}/></a>
              <button className="showreel"><span><Play size={13} fill="currentColor"/></span> WATCH SHOWREEL</button>
            </div>
          </motion.div>
        </div>

        <div className="verticalTag">STRATEGY<br/>DESIGN<br/>PRODUCTION<br/>TECHNOLOGY<br/>EXPERIENCES</div>
      </section>

      <section className="section shell" id="services">
        <div className="sectionIntro">
          <div><div className="eyebrow line">WHAT WE DO</div><h2>FROM IDEAS<br/>TO IMPACT</h2></div>
          <p>We combine creativity, strategy and technology to help brands grow, engage and lead in a changing world.</p>
        </div>
        <div className="serviceGrid">
          {services.map(({n,title,icon:Icon,items}) => (
            <article className="service" key={title}>
              <span className="num">{n}</span><Icon size={38} strokeWidth={1.25}/>
              <h3>{title}</h3>
              <ul>{items.map(x => <li key={x}>{x}</li>)}</ul>
              <ArrowRight className="corner" size={17}/>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="eyebrow">SELECTED WORK</div>
        <div className="workHead"><h2>REAL PROJECTS.<br/>REAL IMPACT.</h2><div className="filters">ALL　 BRAND　 PRODUCTION　 DIGITAL　 EVENTS</div></div>
        <div className="workGrid">
          {work.map(([title,type,bg]) => <article key={title} className="project">
            <div className="projectVisual" style={{background:bg}}><div className="projectMark">F.</div></div>
            <strong>{title}</strong><span>{type}</span>
          </article>)}
        </div>
      </section>

      <section className="mission shell" id="about">
        <div><div className="eyebrow">OUR MISSION</div><h2>A MORE CREATIVE,<br/>CONNECTED TOMORROW.</h2></div>
        <div><p>We believe in the power of ideas, technology and people to create a better, more inspired future. Factory is where creativity meets execution, and vision turns into real-world results.</p><a className="pill" href="#contact">OUR STORY <ArrowRight size={16}/></a></div>
      </section>

      <section className="stats shell">
        <div><b>150+</b><span>Projects Delivered</span></div><div><b>80+</b><span>Happy Clients</span></div><div><b>5</b><span>Core Service Areas</span></div><div><b>∞</b><span>Ideas in Progress</span></div>
      </section>

      <footer id="contact" className="footer shell">
        <div><div className="eyebrow">START SOMETHING</div><h2>HAVE AN IDEA?<br/>BRING IT TO FACTORY.</h2></div>
        <a className="pill" href="mailto:hello@factory.al">hello@factory.al <ArrowRight size={17}/></a>
      </footer>
    </main>
  );
}
