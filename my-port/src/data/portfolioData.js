export const portfolioData = {
  profile: {
    name: "Cielo Reyes",
    fullName: "Cielo Alynah Fae Reyes",
    photo: "/mypic.png",
    monogram: "CR",
    role: "IT Student • System Designer & Analyst",
    school: "National University - Dasmarinas (NU-D)",
    gradYear: "2028",
    statusText: "BSIT-MWA Student at National University - Dasmarinas • Class of 2028",
    location: "Dasmarinas, Cavite, Philippines",
    email: "reyescieloalynah@gmail.com",
    headline: "Transforming real-world requirements into intuitive systems and clean web experiences.",
    shortBio: "Hi! I'm Cielo, an Information Technology student at National University - Dasmarinas (graduating in 2028) specializing in Mobile and Web Applications. I focus on System Design, Systems Analysis.",
    aboutText: [
      "I am currently pursuing my Bachelor of Science in Information Technology with a Specialization in Mobile and Web Application (BSIT-MWA) at National University - Dasmarinas, expecting to graduate in 2028.",
      "As an aspiring System Designer and Analyst, I love dissecting real-world problems and creating comprehensive technical solutions: gathering user requirements, structuring relational database schemas, modeling system workflows with UML & ERD, and building responsive, full-stack web applications.",
      "I am officially certified by the Project Management Institute (PMI) with a verified badge on Credly, and I built FitPulse Studio to demonstrate end-to-end full-stack engineering with React, Supabase, Google OAuth, and Stripe."
    ],
    stats: [
      { label: "University", value: "National University - Dasmarinas" },
      { label: "Program", value: "BSIT - Mobile & Web Apps" },
      { label: "Certification", value: "PMI Certified (Credly)" },
      { label: "Graduation", value: "Class of 2028" }
    ],
    socialLinks: [
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Email", url: "mailto:reyescieloalynah@gmail.com", icon: "mail" }
    ]
  },

  certifications: [
    {
      id: "pmi-certification",
      title: "Project Management Institute (PMI)",
      credentialName: "PMI Certified",
      organization: "Project Management Institute (PMI)",
      badgeStatus: "Verified on Credly",
      status: "Active & Verified",
      issuerLogoText: "PMI",
      credlyUrl: "https://www.credly.com",
      description: "Officially certified by the Project Management Institute (PMI), validating recognized proficiency in foundational project management principles, predictive and agile methodologies, requirements gathering, and structured system workflows.",
      competencies: [
        "Project Lifecycle & Workflow Management",
        "Agile & Predictive Methodologies",
        "Requirements Gathering & Scope Control",
        "Stakeholder Alignment & Team Collaboration",
        "System Analysis & Process Quality"
      ]
    }
  ],
  

  projects: [
    {
      id: "fitpulse-studio",
      title: "FitPulse Studio",
      subtitle: "Web-Based Gym Management, Class Booking & Attendance System",
      category: "Full-Stack Web Application & System Design",
      badge: "Flagship Production Project",
      image: "/fitpulse.png",
      tagline: "A comprehensive web-based gym management platform featuring real-time class booking, automated member attendance tracking, secure Google OAuth, and Stripe payments.",
      description: "FitPulse Studio is a complete web-based system engineered to streamline day-to-day fitness studio operations. The platform eliminates manual paper logs and fragmented spreadsheets by combining member class scheduling, attendance check-ins, automated database records, and secure payment processing into a single, intuitive dashboard.",
      tags: [
        "React",
        "Supabase",
        "PostgreSQL",
        "Google Auth",
        "Stripe API",
        "Tailwind CSS",
        "System Analysis & ERD"
      ],
      features: [
        {
          title: "Class Booking & Scheduling Engine",
          desc: "Allows gym members to view trainer timetables, check slot capacity in real time, and easily book or cancel group classes and personal workout sessions."
        },
        {
          title: "Automated Attendance System",
          desc: "Streamlined member check-in workflow that logs and updates attendance history instantly, providing studio administrators with accurate attendance records."
        },
        {
          title: "Supabase Backend & Relational Database",
          desc: "Architected a PostgreSQL schema on Supabase covering users, memberships, trainer schedules, class bookings, and attendance logs with secure Row-Level Security (RLS)."
        },
        {
          title: "Google Auth & Quick Sign-In",
          desc: "Integrated Google OAuth alongside Supabase Authentication for frictionless, secure one-click login and registration for gym members."
        },
        {
          title: "Stripe Payment Gateway",
          desc: "Implemented secure checkout with Stripe for gym membership packages, class passes, and automated payment receipt generation."
        }
      ]
    }
  ],

  education: [
    {
      institution: "National University - Dasmarinas (NU-D)",
      degree: "Bachelor of Science in Information Technology with Specialization in Mobile and Web Application (BSIT - MWA)",
      period: "2024 — 2028 (Expected)",
      status: "Currently Enrolled (Undergraduate)",
      location: "Dasmarinas, Cavite, Philippines",
      description: "Pursuing coursework covering Systems Analysis and Design, Database Management Systems, Object-Oriented Programming, Mobile & Web Application Development, and IT Project Management.",
      highlights: [
        "Hands-on full-stack development with React, Supabase, and third-party APIs (Stripe, Google Auth)",
        "Focus on System Analysis, Software Requirements Specification (SRS), and UML Modeling",
        "Specialization in modern Mobile and Web Applications"
      ]
    },
    {
      institution: "Senior High School",
      degree: "STEM Track",
      period: "Graduated with Honors",
      status: "Completed",
      location: "Philippines",
      description: "STEM graduate with a passion for building in tech. Blending analytical problem-solving with a drive for modern web development and software design, pursuing my journey in Information Technology."
    }
  ]
};
