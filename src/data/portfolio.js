const publicPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

export const profile = {
  name: 'Khalil Bou Khalil',
  title: 'Junior AI Engineer',
  specialization: 'LLM Applications, AI Agents, RAG and Machine Learning',
  summary:
    "AI Master's candidate at CNAM Paris building end-to-end AI applications: LLM agents, RAG pipelines, FastAPI backends and machine learning models. Currently developing CTCARCH's internal multi-model AI platform.",
  opportunity: 'Seeking a full-time AI Engineer position in France',
  availability: 'Available from October 2026',
  links: {
    email: 'mailto:khalil_bou_khalil@hotmail.com',
    github: 'https://github.com/Khalil-Boukhalil',
    linkedin: 'https://www.linkedin.com/in/khalil-bou-khalil-0587bb235/',
    portfolio: 'https://khalil-boukhalil.github.io/Portfolio/',
    cv: `${publicPath('Khalil_Bou_Khalil_CV.pdf')}?v=0c1c48f8`,
  },
  contact: {
    email: 'khalil_bou_khalil@hotmail.com',
    github: 'github.com/Khalil-Boukhalil',
    linkedin: 'linkedin.com/in/khalil-bou-khalil-0587bb235',
  },
}

export const engineeringLayers = [
  {
    label: 'AI / LLM layer',
    detail: 'Agents, prompt construction, model routing, LLM APIs',
  },
  {
    label: 'Retrieval layer',
    detail: 'Document parsing, chunking, embeddings and pgvector search',
  },
  {
    label: 'Backend & data',
    detail: 'Python, FastAPI, PostgreSQL, permissions and RBAC',
  },
  {
    label: 'Application & delivery',
    detail: 'Next.js, Docker and a governance dashboard under development',
  },
]

export const projects = [
  {
    id: 'docurag',
    number: '01',
    name: 'DocuRAG',
    type: 'Document Question-Answering Platform',
    summary:
      'A full-stack RAG application that combines dense and sparse retrieval to answer questions over documents with source citations.',
    details: [
      {
        label: 'Retrieval',
        text: 'Combined FAISS vector search and BM25 over sentence-transformer embeddings in a hybrid retrieval pipeline.',
      },
      {
        label: 'Application',
        text: 'Connected the retrieval flow to a FastAPI backend and React interface, returning answers with source citations.',
      },
      {
        label: 'Platform',
        text: 'Added JWT authentication, SQLAlchemy persistence, rate limiting and Docker packaging for Ollama or LLM APIs.',
      },
    ],
    flow: [
      'Documents',
      'Sentence-transformer embeddings',
      'FAISS + BM25 retrieval',
      'Ollama / LLM API',
      'Cited answer',
    ],
    technologies: ['Python', 'FastAPI', 'React', 'FAISS', 'SQLAlchemy', 'Docker'],
    link: null,
  },
  {
    id: 'genai-agents',
    number: '02',
    name: 'GenAI Multi-Agent Automation System',
    type: 'Human-in-the-loop Document Workflow',
    summary:
      'A three-agent Python workflow for data extraction, memo generation and human-in-the-loop validation.',
    details: [
      {
        label: 'Agent workflow',
        text: 'Designed specialized stages for extracting data, generating a memo and validating the result.',
      },
      {
        label: 'Review path',
        text: 'Kept human approval inside the workflow so non-technical reviewers can validate the output.',
      },
      {
        label: 'Interface',
        text: 'Exposed the system through FastAPI and Streamlit for review and approval.',
      },
    ],
    flow: ['Data extraction', 'Memo generation', 'Human validation'],
    technologies: ['Python', 'LLM APIs', 'FastAPI', 'Streamlit'],
    link: 'https://github.com/Khalil-Boukhalil/GenAi',
  },
]

export const professionalExperience = [
  {
    company: 'CTCARCH Pty Ltd',
    position: 'AI Engineer Intern',
    duration: 'Jul 2026 - Present',
    location: 'Remote · Company based in Sydney, Australia',
    current: true,
    initials: 'CT',
    description: [
      'Analyse workflows across architecture, construction, estimating and operations to identify practical AI use cases.',
      'Architect and develop the foundation of an internal multi-model AI platform that centralises company knowledge and delivers department-specific assistants to around 12 employees.',
      'Build the RAG and document-processing pipeline for PDF, Word and Excel ingestion, parsing, chunking, embeddings and pgvector search.',
      'Implement task classification, retrieval, prompt construction, automatic routing across OpenAI, Anthropic and Google APIs, and human review, with routing driven by task type, quality, speed, cost and privacy.',
      'Specify the governance layer under development: RBAC, permissions, employee quotas, token and cost tracking, audit logs and an administrator dashboard.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'pgvector',
      'Docker',
      'RAG',
      'LLM APIs',
    ],
  },
  {
    company: 'Safo Systems',
    position: 'AI Agents Developer Intern',
    duration: 'Jul 2025 - Sep 2025',
    location: 'Tripoli, Lebanon',
    initials: 'SS',
    description: [
      'Developed Python multi-agent workflows that automated document generation with drafting, validation and human approval.',
      'Applied LLM APIs, prompt engineering, tool calling and backend integration, and refined agent behaviour for reliability.',
    ],
    technologies: ['Python', 'AI Agents', 'LLM APIs', 'Prompt Engineering', 'Tool Calling'],
  },
  {
    company: 'MA Tech',
    position: 'Full-Stack Developer Intern',
    duration: 'Jun 2024 - Sep 2024',
    location: 'Minieh-Dannieh, Lebanon',
    initials: 'MT',
    description: [
      'Contributed to full-stack React.js and Node.js applications, including frontend interfaces, dashboards, backend services and APIs.',
      'Participated in testing, debugging, performance improvements and Git-based development workflows.',
    ],
    technologies: ['React.js', 'Node.js', 'REST APIs', 'Git'],
  },
]

export const skillCategories = [
  {
    title: 'LLM Engineering',
    items: [
      'LLM APIs (OpenAI, Anthropic, Google)',
      'AI Agents',
      'RAG',
      'Prompt Engineering',
      'Embeddings',
      'Vector Search',
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'LSTM',
      'Model Training & Evaluation',
      'Data Preprocessing',
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      'FastAPI',
      'Flask',
      'Node.js',
      'REST APIs',
      'Authentication',
      'RBAC',
      'PostgreSQL',
      'pgvector',
      'FAISS',
      'MongoDB',
    ],
  },
  {
    title: 'Programming',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Bash'],
  },
  {
    title: 'Frontend & DevOps',
    items: ['React', 'Next.js', 'Docker', 'Git', 'GitHub', 'Linux'],
  },
]

export const education = [
  {
    institution: 'CNAM Paris',
    qualification:
      'Master 1 & Master 2, Artificial Intelligence for Connected Industries (AI4CI)',
    period: '2024 - 2026',
    location: 'Paris, France',
  },
  {
    institution: 'Lebanese International University (LIU)',
    qualification: 'BSc in Computer Science',
    period: '2021 - 2024',
    location: 'Koura, Lebanon',
  },
]

export const languages = [
  { language: 'Arabic', level: 'Native' },
  { language: 'English', level: 'B2 · Professional working proficiency' },
  { language: 'French', level: 'B1 · Intermediate' },
]
