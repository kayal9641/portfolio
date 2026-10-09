// ============ EDIT YOUR PORTFOLIO HERE ============
// Empty strings / empty arrays are hidden automatically. Nothing is shown as "coming soon".
export const profile = {
  name: "Janani",
  resumeUrl: "", // paste your Google Drive share link (or direct PDF URL) here
  email: "jananisankar2005@gmail.com", // from your résumé; set to "" to hide
  github: "https://github.com/kayal9641",
  linkedin: "https://www.linkedin.com/in/janani-sankar41/",
  institution: "National Engineering College, Kovilpatti, Tamil Nadu, India",
  department: "Artificial Intelligence and Data Science",
  degree: "B.Tech, Artificial Intelligence & Data Science", graduationYear: "", cgpa: "9.03 (up to 6th semester)", // set cgpa to "" to hide
  bio: "I am Janani, an Artificial Intelligence and Data Science student passionate about building intelligent applications, exploring machine learning, solving problems with data, and developing creative software solutions. Through hands-on projects, academic research, and industry internship experience, I enjoy exploring how technology can turn ideas into meaningful digital experiences.",
  interests: ["AI", "Machine learning", "Data-driven systems", "Computer vision", "Interactive applications", "Research"],
};

export const experience = {
  org: "Synnoviq Technologies Private Limited", role: "App Developer Intern", duration: "Six months — completed",
  description: "Completed a six-month app development internship at Synnoviq Technologies Private Limited, gaining industry exposure to application development.",
  startDate: "Jun 2025", endDate: "Jan 2026", technologies: [] as string[], responsibilities: ["Developed and tested application features as part of a cross-functional engineering team, taking work from spec through implementation to release.","Worked directly with senior developers on code reviews and structured delivery practices, strengthening debugging and production-readiness habits."],
  applications: [] as string[], contributions: [] as string[], lessons: [] as string[],
};

export const research = {
  title: "Explainable Deep Learning Framework for Breast Ultrasound Image Enhancement and Tumor Boundary Detection",
  domain: "Medical image analysis / Explainable deep learning",
  description: "Research exploring an explainable deep learning framework for breast ultrasound image enhancement and tumor boundary detection.",
  abstract: "", methodology: "",
};

// Skills: only set confirmed:true after you verify them.
export const skills = [
  { category: "Programming", name: "Python", confirmed: true },
  { category: "Databases", name: "SQL", confirmed: true },
  { category: "Artificial Intelligence", name: "", confirmed: false },
  { category: "Machine Learning", name: "", confirmed: false },
  { category: "Computer Vision", name: "", confirmed: false },
  { category: "Data Science", name: "", confirmed: false },
  { category: "Application Development", name: "", confirmed: false },
  { category: "Web Technologies", name: "", confirmed: false },
];

export type Project = {
  id: string; title: string; category: string; filter: "AI" | "Data" | "Computer Vision" | "Interactive";
  hue: number; art: string; featured?: boolean; ongoing?: boolean; blurb: string;
  problem: string; objective: string; methodology: string; technologies: string[]; contribution: string;
  status: string; results: string; note?: string; extra: { label: string; value: string }[];
  link?: string; // add a real URL only when you have one
};
const none = { problem: "", objective: "", methodology: "", technologies: [] as string[], contribution: "", status: "", results: "" };
export const projects: Project[] = [
  { ...none, id: "age", title: "Gender and Age Detection", category: "Computer Vision / AI", filter: "Computer Vision", hue: 190, art: "face",
    blurb: "An AI-based computer vision project focused on estimating age and predicting gender presentation from facial images.",
    note: "Automated predictions can be inaccurate and should not be treated as definitive personal attributes.",
    extra: ["Dataset", "Model", "Results and limitations"].map(label => ({ label, value: "" })) },
  { ...none, id: "summ", title: "Text Summarizer Using Big Data Tools", category: "Natural Language Processing / Big Data", filter: "Data", hue: 150, art: "doc",
    blurb: "A text summarization project designed to condense lengthy documents into shorter, more readable summaries using big data tools.",
    extra: ["Summarization method", "Data-processing pipeline", "Big data tools", "Dataset", "Evaluation results"].map(label => ({ label, value: "" })) },
  { ...none, id: "movie", title: "SQL-Powered Movie Recommendation System", category: "SQL / Recommendation Systems", filter: "Data", hue: 330, art: "movie",
    blurb: "A movie recommendation project using SQL-powered data retrieval and querying to help users explore movies and discover recommendations.",
    note: "The preview uses illustrative movie titles only. It is not a live database.",
    extra: ["Database schema", "SQL queries", "Recommendation logic", "Dataset"].map(label => ({ label, value: "" })) },
  { ...none, id: "npc", title: "Real-Time Emotion-Aware NPC for Web Metaverse", category: "Interactive AI / Web Metaverse", filter: "Interactive", hue: 275, art: "npc", featured: true,
    blurb: "An interactive project exploring emotion-aware non-player characters in a web-based metaverse environment.",
    note: "The preview is an illustration, not a working demo.",
    extra: ["Emotion recognition", "NPC behavior", "Real-time interaction", "Virtual environment"].map(label => ({ label, value: "" })) },
  { ...none, id: "travel", title: "Travel Itinerary Planner", category: "Travel Technology / Intelligent Planning", filter: "Interactive", hue: 40, art: "travel",
    blurb: "A travel planning application designed to help users organize destinations and build structured itineraries.",
    note: "Sample content in the preview is illustrative.",
    extra: ["Planning logic", "Destination data", "User inputs", "Itinerary generation", "APIs used"].map(label => ({ label, value: "" })) },
  { ...none, id: "sight", title: "Sightline AI: AI-Based User Manual Assistant", category: "AI Assistant / Document Intelligence", filter: "AI", hue: 160, art: "sight", featured: true,
    blurb: "Sightline AI is an AI-based user manual assistant intended to help users navigate technical documentation and find relevant information from user manuals.", technologies: ["RAG", "Groq API", "Multimodal image analysis"], contribution: "Developed an AI-powered diagnostic assistant that uses RAG, the Groq API and multimodal image analysis to support hardware troubleshooting, with semantic search and step-by-step repair guidance backed by source citations.",
    note: "The preview is an illustrative mockup, not real output or verified citations.",
    extra: ["Document processing", "Retrieval approach", "Language model", "Implemented features", "Limitations"].map(label => ({ label, value: "" })) },
  { ...none, id: "vsmart", title: "V-SMART: Virtual Circuit Simulation Platform", category: "Circuit Simulation / Engineering Technology", filter: "Interactive", hue: 55, art: "circuit", ongoing: true,
    blurb: "V-SMART is an ongoing virtual circuit simulation platform project.", technologies: ["Logic simulation engine", "Random Forest classifier"], contribution: "Interactive virtual simulation platform for engineering students to design and test electronic circuits, with a logic simulation engine and a Random Forest classifier that analyzes designs and gives adaptive feedback.",
    note: "The preview is decorative and is not an electrical simulation.",
    extra: ["Supported circuit components", "Simulation capabilities", "Current development progress", "Planned features"].map(label => ({ label, value: "" })) },
  { ...none, id: "cosmic", title: "Cosmic Ray Detection", category: "Scientific Computing / Detection", filter: "Data", hue: 250, art: "cosmic", featured: true,
    blurb: "A project focused on cosmic ray detection.",
    note: "The preview is an illustrative graphic, not detector data.",
    extra: ["Detection methodology", "Data source", "Instrumentation", "Algorithms", "Scientific findings"].map(label => ({ label, value: "" })) },
];

export const extras = {
  certifications: ["The Joy of Computing using Python — NPTEL (Elite)", "Cloud Computing — NPTEL (Elite)"],
  achievements: ["Vice President of the ISTE Club, organizing and leading student events and technical activities", "Winner, “Prompt War” — Ramco Institute of Technology", "Winner, “Query Quest” — Mepco Schlenk Engineering College"],
};
