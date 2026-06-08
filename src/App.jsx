import { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Sparkles,
} from 'lucide-react';

const profileImage =
  'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/profiles/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/1cf89822-3dae-44d3-99b7-1b00d51755f7.jpg';

const portfolio = {
  name: 'Tarikua Misganaw',
  role: 'AI Engineer',
  location: 'Addis Ababa, Ethiopia',
  email: 'tarikuamisganaw@gmail.com',
  github: 'https://github.com/tarikuamisganaw',
  linkedin: 'https://www.linkedin.com/in/tarikua-misganaw-307769258/',
  summary:
    'I’m an AI Engineer, focused on building production-ready LLM applications, RAG architectures, and self-verifying AI agents. My work includes designing grounded retrieval pipelines, orchestrating explainable agentic workflows, and developing a certificate-driven RL framework for safe, verifiable skill reuse. I’ve also optimized search and pattern-discovery algorithms to boost accuracy and reduce system failures. I have also contributed to AI-powered graph motif interpretation systems. I’m seeking ML/AI Engineer roles where I can design, deploy, and scale dependable, real-world AI products.',
  focus: [
    'Reliable AI systems',
    'RAG applications',
    'Agentic systems',
    'Graph intelligence',
    'Reinforcement learning',
  ],
};

const skills = [
  'Python',
  'PyTorch',
  'FAISS',
  'SentenceTransformers',
  'Gemini API',
  'Graph Neural Networks (GNNs)',
  'Beam Search',
  'Monte Carlo Tree Search (MCTS)',
  'FastAPI',
  'Express.js',
  'React',
  'Vite',
  'TailwindCSS',
  'MeTTa',
  'NetworkX',
  'LangChain',
];

const projects = [
  {
    name: 'AI Agentic Research Assistant',
    impact:
      'Built a production-ready self-verifying RAG application using FastAPI, FAISS, Gemini API, and React to generate grounded answers from PDF documents with confidence scoring, citation tracking, and dynamic clarification routing for hallucination-resistant AI responses.',
    github: 'https://github.com/tarikuamisganaw/AI-Agentic-Research-Assistant.git',
    tags: ['FastAPI', 'FAISS', 'Gemini API', 'React'],
    screenshots: [
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/6aff0df8-4237-4c72-a3d5-ba597670181d.png',
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/2a636a0e-8f59-40a7-bf05-fe8a36575363.png',
    ],
  },
  {
    name: 'AI Knowledge Assistant',
    impact:
      'Built a production-grade RAG document assistant using FastAPI, FAISS, SentenceTransformers, and React to process PDF documents and deliver context-aware answers with adaptive retrieval, page-level citations, and sub-millisecond vector similarity search.',
    github: 'https://github.com/tarikuamisganaw/Ai-knowledge-assistant.git',
    tags: ['RAG', 'SentenceTransformers', 'FAISS', 'React'],
    screenshots: [
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/8e6a093a-089a-400d-8a18-bd1ffadd28be.png',
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/e43836a9-4edb-411b-8c8d-7e8966b72cd7.png',
    ],
  },
  {
    name: 'NeuroGraph AI Assistant',
    impact:
      'Built an AI-powered motif interpretation system for a graph intelligence platform using Gemini API, MeTTa, NetworkX, and React to generate topology-aware, hallucination-resistant explanations for mined graph motifs and enable interactive exploration of knowledge graph patterns.',
    github: 'https://github.com/kedistS/NeuroGraph-AI-Assistant.git',
    tags: ['Gemini API', 'MeTTa', 'NetworkX', 'Graph AI'],
    screenshots: [
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/1fc58b7d-8238-4458-93fa-bf5a1abcd108.png',
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/c8295024-5ac4-4fae-8e45-e8f306c47e70.png',
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/d31e6fa3-1bbe-4b2a-a1a0-aa6cbf1db5f8.png',
    ],
  },
  {
    name: 'SubRep: Subgoal Refinement and Representation Learning',
    impact:
      'Led the development of a certificate-driven reinforcement learning framework using PyTorch and MO-Gymnasium to generate, validate, and store compositional skills through CDS/PDS certification tests, enabling auditable and negative-transfer-resistant skill reuse for multi-objective RL environments.',
    github: 'https://github.com/iCog-Labs-Dev/subrep.git',
    tags: ['PyTorch', 'MO-Gymnasium', 'RL', 'Skill reuse'],
    screenshots: [],
  },
  {
    name: 'Health & Wellness RAG Chatbot',
    impact:
      'Developed a RAG-based chatbot using Mixtral-8x7B and LangChain to deliver context-grounded health advice.',
    github: 'https://github.com/tarikuamisganaw/health_chat.git',
    tags: ['LangChain', 'Mixtral', 'RAG', 'Chatbot'],
    screenshots: [
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/ecd9188d-5ad8-4437-8fc2-06d059e56f65.png',
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/5f0a0dc2-858a-4bcc-8d09-e465d3b19efd.png',
    ],
  },
  {
    name: 'Tweet Sentiment Analyzer',
    impact:
      'Built a real-time NLP web app using RoBERTa to classify tweet sentiment with confidence scoring.',
    github: 'https://github.com/tarikuamisganaw/twitter-sentiment-analyzer.git',
    tags: ['NLP', 'RoBERTa', 'Sentiment', 'Web app'],
    screenshots: [
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/screenshots/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/ba0d5519-cb21-4a37-8559-9494700091f9.png',
    ],
  },
];

const experiences = [
  {
    title: 'AI Engineer',
    company: 'iCog-Labs',
    period: '12/2024 - Present',
    description:
      'Contributed to NeuroGraph AI Assistant using graph neural networks and search algorithms. Designed a Gemini interpreter with topology-first prompting and built a Dockerized orchestrator for a production REST API. Enhanced Beam Search for pattern discovery and contributed to the Economic Attention Allocation system using C++ and MeTTa. Lead development of SubRep, a certificate-driven reinforcement learning framework for auditable and negative-transfer-resistant skill reuse.',
  },
  {
    title: 'Website Developer Intern',
    company: 'Trip Ways',
    period: '06/2023 - 09/2023',
    description:
      'Developed an e-commerce website using React, Firebase, and Supabase. Implemented secure authentication methods and integrated a secure payment gateway through PayPal.',
  },
  {
    title: 'Full-Stack Web Developer Intern',
    company: 'Afronex Tech Hub',
    period: '04/2024',
    description:
      'Developed a responsive MERN-stack blog website with user authentication and dynamic post creation. Ensured seamless cross-device experience and secure session management.',
  },
  {
    title: 'Back End Developer Intern',
    company: 'Eskalate',
    period: '05/2024 - 08/2024',
    description:
      'Built a scalable blog platform backend using Go and MongoDB. Implemented CRUD operations, advanced search, role-based access control, and AI-powered content suggestions.',
  },
];

const education = {
  degree: 'BSc in Software Engineering',
  school: 'Addis Ababa Science and Technology University',
  period: '2019 - 2024',
  result: 'CGPA 3.59/4.0',
  image:
    'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/education/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/601b9888-2c60-4e25-a907-a567e830b8c6.png',
};

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '03/10/2024',
    description:
      'Completed supervised learning, unsupervised learning, neural networks, recommender systems, and reinforcement learning coursework with hands-on model building and evaluation.',
    image:
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/certifications/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/67a6d8b2-2230-49e6-b7a3-62172b05627b.png',
  },
  {
    title: 'Software Engineering Program',
    issuer: 'Africa to Silicon Valley Academy',
    date: '1000+ hour program',
    description:
      'Completed a Google-backed software engineering program focused on data structures, algorithms, and backend development.',
    image:
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/certifications/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/c4fb6389-65d4-4864-a5a3-3efc4f09b9cb.jpg',
  },
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    date: '25/11/2024',
    description:
      'Studied neural network architecture, forward and backpropagation, activation functions, gradient descent optimization, and practical deep learning workflows.',
    image:
      'https://dndlidgnkmmubchimejr.supabase.co/storage/v1/object/public/avatars/certifications/user_3DXGg6WWZs5g7WGPEeH3HpHSUxY/658bf3fe-c288-4ce7-921f-852ba097f8b5.png',
  },
];

const achievements = [
  {
    title: 'Judge & Mentor - HackIndia 2025',
    date: '2025',
    description:
      'Evaluated AI and Web3 student projects at Chitkara and Lloyd Institute, guiding teams toward socially impactful solutions.',
  },
  {
    title: 'Semi Finalist - A2SV Internal Hackathon',
    date: 'Hackathon',
    description:
      'Created a platform to directly connect farmers with merchants, reducing intermediaries and inflation in agricultural goods.',
  },
];

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const hasImages = project.screenshots.length > 0;
  const currentImage = hasImages ? project.screenshots[index] : null;

  const showPrevious = () => {
    setIndex((current) =>
      current === 0 ? project.screenshots.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setIndex((current) =>
      current === project.screenshots.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <article className="project-card">
      <div className="project-media">
        {hasImages ? (
          <>
            <img src={currentImage} alt={`${project.name} screenshot`} />
            {project.screenshots.length > 1 && (
              <div className="media-controls">
                <button type="button" onClick={showPrevious} aria-label="Previous image">
                  <ChevronLeft size={18} />
                </button>
                <span>
                  {index + 1}/{project.screenshots.length}
                </span>
                <button type="button" onClick={showNext} aria-label="Next image">
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="code-panel">
            <Sparkles size={28} />
            <span>Certificate-driven RL framework</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-heading">
          <h3>{project.name}</h3>
          <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} repository`}>
            <ArrowUpRight size={20} />
          </a>
        </div>
        <p>{project.impact}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to top">
          TM
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="location-pill">
              <MapPin size={17} />
              <span>{portfolio.location}</span>
            </div>
            <h1>{portfolio.name}</h1>
            <p className="role">{portfolio.role}</p>
            <div className="profile-frame">
              <img src={profileImage} alt={portfolio.name} />
            </div>
            <div className="intro-card">
              <p className="summary">{portfolio.summary}</p>
            </div>
            <div className="focus-row">
              {portfolio.focus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="primary-action" href={`mailto:${portfolio.email}`}>
                <Mail size={18} />
                Email me
              </a>
              <a href={portfolio.github} target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="content-section" id="skills">
          <SectionTitle eyebrow="Stack" title="Skills" />
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <SectionTitle eyebrow="Selected work" title="Projects" />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="split-section" id="experience">
          <SectionTitle eyebrow="Career" title="Experience" />
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.title}`}>
                <div className="timeline-icon">
                  <BriefcaseBusiness size={18} />
                </div>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section credentials-section" id="credentials">
          <SectionTitle eyebrow="Credentials" title="Education & Certifications" />

          <div className="education-card">
            <img src={education.image} alt={education.school} />
            <div>
              <div className="card-icon">
                <GraduationCap size={20} />
              </div>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
              <span>
                {education.period} / {education.result}
              </span>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="credential-card" key={cert.title}>
                <img src={cert.image} alt={cert.title} />
                <div>
                  <span>{cert.date}</span>
                  <h3>{cert.title}</h3>
                  <strong>{cert.issuer}</strong>
                  <p>{cert.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section achievements-section">
          <SectionTitle eyebrow="Recognition" title="Achievements" />
          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <article key={achievement.title}>
                <div className="achievement-icon">
                  {achievement.date === '2025' ? <Award size={22} /> : <Medal size={22} />}
                </div>
                <span>{achievement.date}</span>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <span>Available for ML/AI engineering roles</span>
          <h2>Let us build reliable intelligent systems.</h2>
        </div>
        <div className="footer-actions">
          <a href={`mailto:${portfolio.email}`}>
            <Mail size={18} />
            {portfolio.email}
          </a>
          <a href={portfolio.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
