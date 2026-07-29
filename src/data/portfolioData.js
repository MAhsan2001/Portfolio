// ============================================================
// portfolioData.js — Centralized configuration for Mohammed Ahsan's Portfolio
// All personal info, projects, skills, experience, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Mohammed Ahsan",
  firstName: "Mohammed",
  brandName: "Ahsan",
  title: "Associate Software Engineer & ML Specialist",
  location: "Colombo 03, Sri Lanka",
  phone: "+94 77 280 5190",
  emails: {
    primary: "mohamedahsan621@gmail.com",
    secondary: "mohamedahsan621@gmail.com",
  },
  summary:
    "Motivated and detail-oriented Software Engineering undergraduate specializing in Machine Learning and Data Science. Skilled in Python, Java, SQL, and ML frameworks, with hands-on experience building predictive models for classification and regression. Proficient in data preprocessing, feature engineering, and model optimization to deliver scalable enterprise solutions.",
  resumeUrl: "/Mohammed_Ahsan_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/MAhsan2001",
  linkedin: "https://www.linkedin.com/in/mohammed-ahsan-873a221b9/",
  email: "mailto:mohamedahsan621@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Mohammed Ahsan",
  titleHighlight: "Associate Software Engineer",
  subtitle:
    "Specializing in Machine Learning, Data Science, Python, Java, Spring Boot, React, and AS400 Enterprise Systems.",
  ctaPrimary: { text: "View My Projects", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mohamedahsan621@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Mohammed Ahsan,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Mohammed_Ahsan_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mohammed Ahsan</span>, a Software Engineering undergraduate at IIT (affiliated with the University of Westminster) and Associate Software Engineer at HCL Technologies Lanka. I specialize in Machine Learning, Data Science, Full Stack Web Applications, and Enterprise Backend Systems using Java, Spring Boot, Python, and AS400.`,
  techStack: ["Python & ML", "Java & Spring Boot", "React JS", "SQL & AS400"],
};

export const skillsContent = {
  badge: "My Engineering Approach",
  heading: "From Machine Learning Models to Scalable Enterprise Apps",
  description:
    "I follow an analytical, structured, and agile software development lifecycle to transform data and business requirements into high-performance software.",
  cards: [
    {
      number: "01",
      title: "Data & Requirements",
      text: "Understanding domain requirements, preprocessing raw datasets, performing feature selection, and analyzing system constraints.",
    },
    {
      number: "02",
      title: "Architecture & ML Modeling",
      text: "Designing clean database schemas, selecting optimal ML algorithms (Regression, KNN, Naïve Bayes), and architecting responsive UI workflows.",
    },
    {
      number: "03",
      title: "Full-Stack Development",
      text: "Building robust RESTful microservices in Java/Spring Boot and Python, integrated with interactive ReactJS frontends and AS400 core logic.",
    },
    {
      number: "04",
      title: "Optimization & Deployment",
      text: "Performing hyperparameter tuning, model evaluation (AUC-ROC, MAE, MSE), rigorous testing, and seamless continuous integration.",
    },
  ],
  endText: "Engineered to Perform!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Machine Learning & Data Science",
      skills: [
        { name: "Python (ML & Analytics)", level: 92 },
        { name: "Logistic Regression & Decision Trees", level: 90 },
        { name: "KNN & Naïve Bayes", level: 88 },
        { name: "Data Preprocessing & Feature Selection", level: 92 },
        { name: "Model Tuning (AUC-ROC, MAE, MSE)", level: 86 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 94 },
        { name: "Java", level: 90 },
        { name: "SQL", level: 92 },
        { name: "JavaScript / HTML / CSS", level: 88 },
        { name: "RPGLE IV & CLLE (AS400)", level: 84 },
        { name: "COBOL", level: 78 }
      ]
    },
    {
      title: "Backend & Web Development",
      skills: [
        { name: "Spring Boot", level: 88 },
        { name: "React JS", level: 86 },
        { name: "REST APIs", level: 90 },
        { name: "WordPress", level: 85 }
      ]
    },
    {
      title: "Databases & Mainframe",
      skills: [
        { name: "AS400 iSeries (DB2/400)", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "Embedded SQL & Stored Procedures", level: 88 }
      ]
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "IntelliJ IDEA", level: 90 }
      ]
    },
    {
      title: "Methodologies & Core CS",
      skills: [
        { name: "Agile & Scrum", level: 92 },
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "OOP Principles", level: 90 },
        { name: "UI/UX & Wireframing", level: 85 }
      ]
    }
  ]
};

export const contentCreation = {
  badge: "Featured Demo & Video Reel",
  heading: "Interactive Project Demos & Technical Showcase",
  description: "Check out my software demos, machine learning explanations, and interactive video reels.",
  categories: [
    {
      title: "Software & System Demos",
      description: "Walkthroughs of enterprise POS systems, full-stack travel platforms, and banking batch applications.",
      stats: "Interactive Video",
      icon: "💻"
    },
    {
      title: "Machine Learning Case Studies",
      description: "Visualizing predictive modeling, SEER dataset analysis, and hyperparameter tuning evaluation.",
      stats: "AI & ML",
      icon: "🧠"
    },
    {
      title: "Full-Stack Web Development",
      description: "Frontend responsive UIs, dynamic splash screens, payment gateway checkouts, and microservice APIs.",
      stats: "Web Apps",
      icon: "⚡"
    },
    {
      title: "AS400 & Mainframe Solutions",
      description: "Demonstrating RPGLE IV logic, transaction automation, and DB2/400 relational database operations.",
      stats: "Enterprise",
      icon: "🛡️"
    }
  ]
};

export const leadershipList = [
  {
    title: "Software Engineering Undergraduate – IIT (Univ. of Westminster)",
    description: "Collaborated in Agile teams, performed code reviews, maintained Java backend services, and supported legacy module migration to Spring Boot.",
    role: "B.Eng (Hons) Student",
    badge: "Education"
  },
  {
    title: "Agile Scrum & Code Reviews – HCL Technologies Lanka",
    description: "Participated in daily standups, code reviews, and enterprise release management for banking and insurance client core systems.",
    role: "Associate Software Engineer",
    badge: "Professional"
  },
  {
    title: "Group Lead – Tourism Website with Payment Gateway",
    description: "Led frontend development of an educational tourism platform, directing UI/UX wireframing, checkout flow, and team deliverables.",
    role: "Team Lead",
    badge: "Leadership"
  }
];

export const internshipsList = [
  {
    organization: "HCL Technologies Lanka (PVT) LTD.",
    role: "Associate Software Engineer",
    duration: "Oct 2022 - May 2025",
    skills: ["AS400 iSeries", "Java Backend", "Batch Processing", "Enterprise Systems", "DB200"],
    tech: ["RPGLE IV", "CLLE", "COBOL", "SQL", "Java", "DB2/400"]
  },
  {
    organization: "TechSerandib Elite Solutions (PVT) LTD.",
    role: "Web Developer (Freelance)",
    duration: "Oct 2024 - Apr 2025",
    skills: ["Web Design", "WordPress Development", "CMS Solutions", "Responsive UIs"],
    tech: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"]
  },
  {
    organization: "HCL Technologies Lanka (PVT) LTD.",
    role: "Internship - Software Engineer",
    duration: "Apr 2022 - Oct 2022",
    skills: ["Java Programming", "SQL Database Logic", "CRUD Operations", "AS400 Basics"],
    tech: ["Java", "SQL", "RPGLE IV", "CLLE", "DB200"]
  }
];

export const softSkillsList = [
  { name: "Analytical Problem Solving", icon: "🧠", desc: "Deconstructing complex datasets and legacy mainframe workflows into clean modern logic." },
  { name: "Agile & Scrum Methodologies", icon: "⚡", desc: "Active participation in sprint planning, daily standups, and structured sprint reviews." },
  { name: "Communication & Collaboration", icon: "🤝", desc: "Clear technical communication across multi-disciplinary engineering and client teams." },
  { name: "UI/UX Design Principles", icon: "🎨", desc: "Designing intuitive, accessible, and responsive user interfaces with wireframing and prototyping." },
  { name: "Analytical Mindset", icon: "📊", desc: "Evaluating ML models with strict metrics (AUC-ROC, MAE, MSE) for actionable data insights." },
  { name: "Adaptability & Fast Learning", icon: "🌟", desc: "Rapidly mastering diverse stacks from AS400 RPGLE IV to modern Python ML and Spring Boot." },
  { name: "Version Control & Workflow", icon: "🔀", desc: "Maintaining clean Git branching, PR reviews, and systematic version control standards." },
  { name: "Detail-Oriented Focus", icon: "🔍", desc: "Building bug-free transaction logic, payment gateway security, and robust exception handling." }
];

export const projects = [
  {
    id: "travidoo",
    number: "01",
    badge: "🚀 Featured Full-Stack Platform",
    title: "Travidoo – Travel & Tourism Management Platform",
    description:
      "Developed a full-stack travel and tourism management platform to streamline tour discovery, booking, and travel-related services. Built responsive and interactive user interfaces with modern frontend technologies and integrated backend services for efficient data management.",
    techTags: [
      "React JS",
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "Tailwind CSS",
      "Full-Stack Web"
    ],
    links: {
      demo: "https://travidoo.com",
    },
    isFlagship: true,
  },
  {
    id: "pos-system",
    number: "02",
    badge: "💳 Enterprise Retail POS",
    title: "7 Minutes POS System",
    description:
      "Developed a modern Point of Sale (POS) system supporting retail and business operations, including product, inventory, sales, and transaction management. Implemented barcode and QR code scanning and generation features to improve product identification and checkout efficiency.",
    techTags: ["React JS", "Java / Spring Boot", "Barcode & QR Scanning", "MySQL", "Inventory System"],
    links: {
      demo: "https://7minutes-pos.vercel.app",
    },
    isFlagship: false,
  },
  {
    id: "breast-cancer-prediction",
    number: "03",
    badge: "🧠 Machine Learning",
    title: "Machine Learning & Data Mining – Breast Cancer Prediction",
    description:
      "Developed predictive models using Logistic Regression, Naïve Bayes, KNN, and Decision Tree regression to classify breast cancer mortality and estimate survival months from the SEER dataset. Applied data preprocessing, feature selection, and hyperparameter tuning to improve accuracy and meet healthcare evaluation criteria (AUC-ROC, MAE, MSE).",
    techTags: ["Python", "Machine Learning", "Scikit-Learn", "SEER Dataset", "Data Mining", "AUC-ROC / MSE"],
    links: {},
    isFlagship: true,
  },
  {
    id: "event-management",
    number: "04",
    badge: null,
    title: "Event Management System",
    description:
      "Developed a full-stack Event Management System for ticket booking and vendor coordination. Built interactive UI using ReactJS and backend APIs with Spring Boot (Java). Integrated MySQL for structured data storage with secure authentication.",
    techTags: ["ReactJS", "Spring Boot (Java)", "MySQL", "Authentication", "REST API"],
    links: {},
    isFlagship: false,
  },
  {
    id: "bookstore-as400",
    number: "05",
    badge: null,
    title: "Bookstore Invoice System - Using AS400",
    description:
      "Developed an invoicing and inventory management system for a bookstore using AS400. Built core logic using RPGLE IV and managed relational data with embedded SQL. Designed data structures, implemented transaction automation, and performed testing/debugging to ensure reliability.",
    techTags: ["AS400 iSeries", "RPGLE IV", "CLLE", "Embedded SQL", "DB2/400"],
    links: {},
    isFlagship: false,
  },
  {
    id: "tourism-payment",
    number: "06",
    badge: null,
    title: "Tourism Website with Payment Gateway (Group)",
    description:
      "Led frontend development of an educational tourism site with secure payment gateway and dynamic checkout. Built animated splash screen with timed redirection to homepage and created interactive product shop UI with real-time pricing and quantity selection.",
    techTags: ["JavaScript", "HTML5 / CSS3", "Payment Gateway", "Interactive UI", "Splash Screen"],
    links: {},
    isFlagship: false,
  },
  {
    id: "student-progression",
    number: "07",
    badge: null,
    title: "Student Progression Outcome Predictor - Using Python",
    description:
      "Built a command-line app to classify student progression outcomes using university credit rules. Implemented input validation, modular functions, and data handling with lists, files, and dictionaries. Generated summary histograms and supported multi-record processing with loops and exception handling.",
    techTags: ["Python", "CLI Application", "Data Processing", "Matplotlib Histograms"],
    links: {},
    isFlagship: false,
  }
];

export const certificates = {
  featured: [
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: "☁️",
      date: "May 2025"
    },
    {
      name: "Python Course",
      issuer: "University of Moratuwa",
      icon: "🐍",
      date: "Oct 2023"
    },
    {
      name: "Web Designing",
      issuer: "University of Moratuwa",
      icon: "🎨",
      date: "May 2025"
    },
    {
      name: "SQL Essential Training",
      issuer: "NASBA - LinkedIn Learning",
      icon: "🗄️",
      date: "Aug 2024"
    },
    {
      name: "Spring Boot 2.0 Essential Training",
      issuer: "LinkedIn Learning",
      icon: "🍃",
      date: "Nov 2024"
    }
  ],
  viewAllUrl: "/Mohammed_Ahsan_Resume.pdf",
};

export const education = {
  degree: "B.Eng (Hons) in Software Engineering",
  institution: "Informatics Institute of Technology (Affiliated with University of Westminster)",
  period: "Sep 2022 – May 2027",
  location: "Colombo, Sri Lanka",
  details: "Experienced in writing SQL queries and stored procedures for enterprise software. Collaborated in Agile teams, performed code reviews, maintained Java backend services, and supported legacy module migration to Spring Boot."
};

export const referencesList = [
  {
    name: "Farshath Jamal",
    title: "Chartered Manager (CMI) UK",
    role: "CEO - BIMT Campus",
    phone: "+94 771777730",
    email: "ceo@bimt.lk"
  },
  {
    name: "Suhail Sajahan",
    title: "B.Sc Computer Engineering",
    role: "Senior Software Engineer - Sysco Labs",
    phone: "+94 767115281",
    email: "suhailsajahan@gmail.com"
  }
];

export const footerContent = {
  taglines: [
    "Associate Software Engineer",
    "Machine Learning & Data Science",
    "Java · Spring Boot · Python · React",
  ],
  credential: "B.Eng (Hons) Software Engineering · IIT (Univ. of Westminster)",
  copyright: `© ${new Date().getFullYear()} Mohammed Ahsan | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
