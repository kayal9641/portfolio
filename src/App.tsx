import { useEffect, useMemo, useRef, useState } from "react";
import { User, FlaskConical, Terminal, Archive, Briefcase, GraduationCap, Radio, Github, Linkedin, Mail, FileText, X, ArrowUp, ArrowLeft, Play } from "lucide-react";
import { profile, experience, research, skills, projects, extras, type Project } from "./config";

const missions = [
  { id: "about", n: "About me", d: "The person behind the code.", I: User },
  { id: "projects", n: "Project lab", d: "Eight project explorations.", I: FlaskConical },
  { id: "skills", n: "Skills terminal", d: "Confirmed tools and open slots.", I: Terminal },
  { id: "research", n: "Research archive", d: "Breast ultrasound paper, presented.", I: Archive },
  { id: "experience", n: "Experience hub", d: "Six-month app developer internship.", I: Briefcase },
  { id: "education", n: "Education", d: "National Engineering College.", I: GraduationCap },
  { id: "contact", n: "Contact station", d: "GitHub, LinkedIn and more.", I: Radio },
];
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
const Ext = ({ href, children, cls = "btn" }: { href: string; children: React.ReactNode; cls?: string }) =>
  <a className={cls} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;

function Net() {
  const pts = useMemo(() => Array.from({ length: 22 }, (_, i) => ({ x: (i * 97 % 100) * 6, y: (i * 53 % 100) * 3.2, d: i * 0.3 })), []);
  return <svg className="net" viewBox="0 0 600 320" aria-hidden="true">
    {pts.map((a, i) => pts.slice(i + 1, i + 4).map((b, j) => <line key={i + "-" + j} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />))}
    {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" style={{ animationDelay: p.d + "s" }} />)}
  </svg>;
}

function Art({ p }: { p: Project }) {
  const c = `hsl(${p.hue} 90% 62%)`, d = `hsl(${p.hue} 60% 18%)`;
  const body = {
    face: <><rect x="70" y="20" width="80" height="100" rx="40" fill="none" stroke={c} /><path d="M60 30h20M60 30v20M160 110h-20M160 110v-20" stroke={c} /><circle cx="110" cy="70" r="6" fill={c} /><text x="170" y="40" fill={c} fontSize="9">age ? / presentation ?</text></>,
    doc: <>{[0, 1, 2, 3].map(i => <rect key={i} x={20 + i * 8} y={20 + i * 6} width="70" height="90" rx="4" fill={d} stroke={c} />)}<path d="M120 70h30" stroke={c} /><rect x="160" y="40" width="70" height="60" rx="4" fill="none" stroke={c} />{[55, 65, 75].map(y => <line key={y} x1="168" x2="222" y1={y} y2={y} stroke={c} />)}</>,
    movie: <>{[0, 1, 2, 3].map(i => <rect key={i} x={20 + i * 52} y="30" width="44" height="66" rx="4" fill={d} stroke={c} />)}<path d="M20 112h208" stroke={c} strokeDasharray="4 3" /></>,
    npc: <><circle cx="120" cy="60" r="34" fill={d} stroke={c} /><circle cx="108" cy="56" r="4" fill={c} /><circle cx="132" cy="56" r="4" fill={c} /><path d="M106 74q14 10 28 0" fill="none" stroke={c} /><rect x="30" y="104" width="180" height="22" rx="4" fill="none" stroke={c} /><path d="M10 100q40-30 70-8M230 100q-40-30-70-8" stroke={c} fill="none" /></>,
    travel: <><path d="M20 100q50-80 100-30t100-40" fill="none" stroke={c} strokeDasharray="5 4" />{[20, 120, 220].map((x, i) => <circle key={x} cx={x} cy={[100, 70, 30][i]} r="7" fill={c} />)}</>,
    sight: <><rect x="14" y="14" width="100" height="112" rx="4" fill={d} stroke={c} />{[30, 42, 54, 78, 90].map(y => <line key={y} x1="24" x2="104" y1={y} y2={y} stroke={c} opacity=".5" />)}<rect x="22" y="60" width="84" height="10" fill={c} opacity=".35" /><rect x="126" y="14" width="100" height="112" rx="4" fill="none" stroke={c} /><rect x="136" y="26" width="60" height="14" rx="7" fill={c} opacity=".3" /><rect x="156" y="52" width="60" height="22" rx="7" fill="none" stroke={c} /></>,
    circuit: <><path d="M20 70h50M110 70h60M200 70h30M45 70v40h160V70" fill="none" stroke={c} /><path d="M70 70l8-14 8 28 8-28 8 28 8-14" fill="none" stroke={c} /><circle cx="185" cy="70" r="15" fill="none" stroke={c} /></>,
    cosmic: <>{Array.from({ length: 24 }, (_, i) => <circle key={i} cx={(i * 83) % 240} cy={(i * 47) % 140} r={i % 5 ? 1 : 1.8} fill={c} />)}<path d="M200 10L80 130M230 30L130 130M170 10L60 100" stroke={c} opacity=".7" /><rect x="60" y="86" width="120" height="30" fill="none" stroke={c} strokeDasharray="3 3" /></>,
  }[p.art];
  return <svg className="art" viewBox="0 0 240 140" role="img" aria-label={`Illustration for ${p.title}`}>{body}</svg>;
}

const Field = ({ label, value }: { label: string; value?: string | string[] }) => {
  const v = Array.isArray(value) ? value.join(", ") : value;
  return v ? <div className="field"><h4>{label}</h4><p>{v}</p></div> : null;
};

function Detail({ p, onClose }: { p: Project; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; prev?.focus(); };
  }, [onClose]);
  return <div className="scrim" onClick={onClose}><div className="modal" ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={p.title} onClick={e => e.stopPropagation()} style={{ ["--h" as string]: p.hue }}>
    <button className="btn ghost" onClick={onClose}><ArrowLeft size={16} /> Back to projects</button>
    <Art p={p} />
    <h3>{p.title} {p.ongoing && <span className="tag">Ongoing</span>}</h3>
    <p className="cat">{p.category}</p>
    <p>{p.blurb}</p>
    <Field label="Problem" value={p.problem} /><Field label="Objective" value={p.objective} />
    <Field label="Methodology" value={p.methodology} /><Field label="Technologies" value={p.technologies} />
    <Field label="My contribution" value={p.contribution} />
    <Field label="Implementation status" value={p.ongoing ? "Ongoing project" : p.status} /><Field label="Results" value={p.results} />
    {p.extra.map(x => <Field key={x.label} label={x.label} value={x.value} />)}
    {p.note && <p className="note">{p.note}</p>}
    {p.link && <Ext href={p.link}>Open project</Ext>}
  </div></div>;
}

export default function App() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [seen, setSeen] = useState<string[]>([]);
  const [selectedMission, setSelectedMission] = useState("about");
  const [missionPopup, setMissionPopup] = useState<{ id: string; title: string } | null>(null);
  const [top, setTop] = useState(false);
  const [par, setPar] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!started) {
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }
    setLoading(false);
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setSeen(s => s.includes(e.target.id) ? s : [...s, e.target.id])), { threshold: 0.35 });
    missions.forEach(m => { const el = document.getElementById(m.id); el && io.observe(el); });
    const sc = () => setTop(scrollY > 600); addEventListener("scroll", sc);
    return () => { io.disconnect(); removeEventListener("scroll", sc); };
  }, [started]);

  const filters = ["All", "AI", "Data", "Computer Vision", "Interactive"];
  const shown = projects.filter(p => filter === "All" || p.filter === filter);
  const pct = Math.round(seen.length / missions.length * 100);
  const ex = experience;
  const confirmedSkills = skills.filter(s => s.confirmed && s.name);
  const inventory = ["AI models", "Python tools", "Data pipelines", "Research notes"];
  const achievements = ["Prompt War winner", "Query Quest winner", "ISTE Vice President", "AI research explorer"];
  const activeMission = missions.find(m => m.id === selectedMission) ?? missions[0];

  useEffect(() => {
    if (!missionPopup) return;
    const timer = window.setTimeout(() => setMissionPopup(null), 1800);
    return () => window.clearTimeout(timer);
  }, [missionPopup]);

  const handleMissionSelect = (id: string) => {
    const mission = missions.find(m => m.id === id);
    setSelectedMission(id);
    if (mission) {
      setMissionPopup({ id, title: mission.n });
    }
    go(id);
  };

  if (!started) return <main className="start" onPointerMove={e => setPar({ x: e.clientX / innerWidth - .5, y: e.clientY / innerHeight - .5 })}>
    <Net />
    <div className="planet" aria-hidden="true" style={{ transform: `translate(${par.x * -30}px,${par.y * -30}px)` }}><i /></div>
    <div className="startbody">
      {loading ? <div className="boot-screen">
        <p className="status"><span className="dot" /> LOADING WORLD</p>
        <p className="logo">JANANI.EXE</p>
        <div className="boot-progress"><span style={{ width: "100%" }} /></div>
        <p className="boot-text">Initializing AI world • connecting missions • unlocking portfolio</p>
      </div> : <>
        <p className="status"><span className="dot" /> SYSTEM ONLINE • EXPLORATION READY</p>
        <p className="logo">JANANI.EXE</p>
        <p className="welcome">Welcome to my digital universe.</p>
        <h1>Building Intelligence.<br />Designing Possibilities.</h1>
        <p className="role">AI &amp; Data Science Student | Python Developer | Creative Technology Explorer</p>
        <p className="intro">I explore the intersection of intelligent systems, data, computer vision, and interactive technology through hands-on projects and research.</p>
        <div className="row">
          <button className="btn big" onClick={() => { setStarted(true); scrollTo(0, 0); }}><Play size={18} /> START EXPLORING</button>
          {profile.resumeUrl && <Ext href={profile.resumeUrl} cls="btn ghost big"><FileText size={18} /> VIEW MY RESUME</Ext>}
        </div>
      </>}
    </div>
  </main>;

  return <>
    <header className="nav"><button className="brand" onClick={() => scrollTo({ top: 0 })}>JANANI.EXE</button>
      <nav aria-label="Primary">
        {["projects", "research", "experience"].map(id => <button key={id} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}</button>)}
        {profile.resumeUrl && <Ext href={profile.resumeUrl} cls="navres">Resume</Ext>}
      </nav>
      <div className="nav-hud">
        <span className="hud-pill">Quest {seen.length}/{missions.length}</span>
        <span className="hud-pill alt">Mission: {activeMission.n}</span>
      </div>
      <div className="prog" title="Sections viewed"><span style={{ width: pct + "%" }} /></div>
    </header>
    <main className="world">
      <section className="hub" aria-label="Mission map">
        <div className="quest-banner">
          <div>
            <p className="status"><span className="dot" /> QUEST LOG</p>
            <h2>Choose a mission</h2>
          </div>
          <div className="banner-stats">
            <div><span>Inventory</span><strong>AI + Data</strong></div>
            <div><span>Focus</span><strong>Research</strong></div>
            <div><span>State</span><strong>Live</strong></div>
          </div>
        </div>
        <p className="sub">Explore the mind of an AI and Data Science developer.</p>
        <div className="map">{missions.map((m, i) => <button key={m.id} className={"mission m" + i + (seen.includes(m.id) ? " seen" : "") + (selectedMission === m.id ? " active" : "")} onClick={() => handleMissionSelect(m.id)}>
          <m.I size={26} /><b>Mission {String(i + 1).padStart(2, "0")}</b><strong>{m.n}</strong><span>{m.d}</span></button>)}</div>
        <div className="mission-brief">
          <div>
            <p className="status"><span className="dot" /> ACTIVE MISSION</p>
            <h3>{activeMission.n}</h3>
          </div>
          <p>{activeMission.d}</p>
          <div className="mission-tracker">
            {missions.map(m => <span key={m.id} className={selectedMission === m.id ? "track done" : seen.includes(m.id) ? "track done" : "track"}>{m.n}</span>)}
          </div>
        </div>
      </section>

      <section id="about" className="sec quest-panel">
        <div className="section-flag">
          <span className="tag">Player profile</span>
          <span className="tag alt">Online</span>
        </div>
        <h2>The person behind the code</h2>
        <div className="about">
          <div className="profile-panel">
            <div className="profile-header">
              <div className="avatar-badge" aria-hidden="true">J</div>
              <div>
                <p className="status-label">Player</p>
                <h3>{profile.name}</h3>
              </div>
            </div>
            <div className="player-card">
              <span className="mini-label">Profile</span>
              <strong>{profile.name}</strong>
            </div>
            <div className="inventory-box">
              <span className="mini-label">Inventory</span>
              <ul>{inventory.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="map-panel" aria-label="Minimap">
              <span className="mini-label">Minimap</span>
              <div className="map-mini">
                <span className="node active" />
                <span className="node" />
                <span className="node" />
                <span className="node" />
                <span className="node" />
                <span className="node" />
                <span className="node" />
              </div>
            </div>
          </div>
          <div className="info-stack">
            <p className="lead">{profile.bio}</p>
            <dl className="sheet">
              <div><dt>Name</dt><dd>{profile.name}</dd></div><div><dt>Department</dt><dd>{profile.department}</dd></div>
              <div><dt>Institution</dt><dd>National Engineering College, Kovilpatti</dd></div>
              <div><dt>Confirmed skills</dt><dd>{skills.filter(s => s.confirmed).map(s => s.name).join(" and ")}</dd></div>
              <div><dt>Experience</dt><dd>Six-month App Developer internship</dd></div>
              <div><dt>Interests</dt><dd>{profile.interests.join(", ")}</dd></div>
            </dl>
            <div className="achievement-box">
              <span className="mini-label">Achievements</span>
              <ul>{achievements.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="sec quest-panel"><div className="section-flag"><span className="tag">Quest board</span><span className="tag alt">8 active</span></div><h2>Project lab</h2>
        <p className="sub">Eight explorations across intelligent systems, data, interactive technology, and scientific computing.</p>
        <div className="row" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} className={"chip" + (f === filter ? " on" : "")} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>)}</div>
        <div className="grid">{shown.map(p => <button key={p.id} className={"card" + (p.featured ? " feat" : "") + " c-" + p.id} style={{ ["--h" as string]: p.hue }} onClick={() => setOpen(p)}>
          <Art p={p} /><h3>{p.title}</h3><p className="cat">{p.category}</p>{p.ongoing && <span className="tag">Ongoing</span>}<p>{p.blurb}</p></button>)}</div>
      </section>

      <section id="skills" className="sec quest-panel"><div className="section-flag"><span className="tag">Skill tree</span><span className="tag alt">Unlocked</span></div><h2>My technical toolkit</h2>
        <div className="term" role="list">{confirmedSkills.map((s, i) => <div role="listitem" key={i} className="skill ok">
          <span className="k">{s.category}</span><b>{s.name}</b></div>)}</div>
        {extras.certifications.length > 0 && <><h3 className="h3">Certifications</h3><ul>{extras.certifications.map(c => <li key={c}>{c}</li>)}</ul></>}
      </section>

      <section id="research" className="sec quest-panel"><div className="section-flag"><span className="tag">Archive</span><span className="tag alt">Research log</span></div><h2>Research archive</h2>
        <div className="paper"><svg className="art" viewBox="0 0 240 140" aria-hidden="true"><ellipse cx="120" cy="70" rx="100" ry="55" fill="none" stroke="var(--cy)" opacity=".5" /><path d="M80 70q10-30 40-24t30 30-30 22-40-28z" fill="none" stroke="var(--li)" strokeDasharray="4 3" /><path d="M20 70h200" stroke="var(--cy)" opacity=".3" /></svg>
          <div><p><span className="tag">Paper presented</span> <span className="tag alt">Not yet published</span></p>
            <h3>{research.title}</h3><p className="cat">{research.domain}</p><p>{research.description}</p>
            <Field label="Abstract" value={research.abstract} /><Field label="Methodology" value={research.methodology} />
            <p className="note">This work has been presented but is not published, peer-reviewed or indexed. It is a research exploration, not a clinically validated diagnostic system.</p></div></div></section>

      <section id="experience" className="sec quest-panel"><div className="section-flag"><span className="tag">Career path</span><span className="tag alt">Completed</span></div><h2>Professional experience</h2>
        <div className="line"><i /><div><h3>{ex.role}</h3><p className="cat">{ex.org}</p>
          <p>{ex.duration}{ex.startDate && ` (${ex.startDate} – ${ex.endDate})`}</p><p>{ex.description}</p>
          {ex.responsibilities.length > 0 && <ul>{ex.responsibilities.map(r => <li key={r}>{r}</li>)}</ul>}
          <Field label="Technologies" value={ex.technologies} /><Field label="Applications developed" value={ex.applications} />
          <Field label="Specific contributions" value={ex.contributions} /><Field label="Lessons learned" value={ex.lessons} /></div></div></section>

      <section id="education" className="sec quest-panel"><div className="section-flag"><span className="tag">Academy</span><span className="tag alt">Core stats</span></div><h2>Education</h2>
        <div className="paper"><GraduationCap size={48} /><div><h3>{profile.institution}</h3><p className="cat">{profile.department}</p>
          <Field label="Degree" value={profile.degree} /><Field label="CGPA" value={profile.cgpa} /><Field label="Graduation year" value={profile.graduationYear} /></div></div>
        {extras.achievements.length > 0 && <><h3 className="h3">Achievements and activities</h3><ul>{extras.achievements.map(a => <li key={a}>{a}</li>)}</ul></>}
      </section>

      <section id="contact" className="sec quest-panel contact"><div className="section-flag"><span className="tag">Mission control</span><span className="tag alt">Open channel</span></div><h2>Let's build something intelligent.</h2>
        <p className="sub">Interested in AI, data, creative applications, or emerging technology? Let's connect.</p>
        <div className="termbox"><p>&gt; connect --channel</p>
          <div className="row"><Ext href={profile.github}><Github size={18} /> GitHub</Ext><Ext href={profile.linkedin}><Linkedin size={18} /> LinkedIn</Ext>
            {profile.email && <a className="btn" href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>}
            {profile.resumeUrl && <Ext href={profile.resumeUrl}><FileText size={18} /> View my resume</Ext>}</div></div>
      </section>
    </main>
    {top && <button className="totop" aria-label="Back to top" onClick={() => scrollTo({ top: 0 })}><ArrowUp /></button>}
    {missionPopup && <div className="mission-toast" role="status" aria-live="polite">
      <div className="toast-icon">✓</div>
      <div>
        <span className="toast-label">Mission complete</span>
        <strong>{missionPopup.title}</strong>
      </div>
    </div>}
    {open && <Detail p={open} onClose={() => setOpen(null)} />}
  </>;
}
