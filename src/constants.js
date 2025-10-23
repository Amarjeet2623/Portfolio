// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import BrainwaveLogo from './assets/company_logo/Brainwave_logo.png';
import ApexPlanetLogo from './assets/company_logo/ApexPlanet_logo.png';

// Education Section Logo's
import IIITMLogo from './assets/education_logo/IIITM_logo.png';
import SisLogo from './assets/education_logo/Sis_logo.png';
import GnsLogo from './assets/education_logo/Gns_logo.png';

// Project Section Logo's
import LmsLogo from './assets/project_logo/Lms.png';
import CloudShopLogo from './assets/project_logo/CloudShop.png';
import NexoraLogo from './assets/project_logo/Nexora.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      // { name: 'SASS', logo: sassLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      // { name: 'Springboot', logo: springbootLogo },
      // { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      //{ name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
   {
      id: 0,
      img: BrainwaveLogo,
      role: "Frontend Intern",
      company: "Brainwave Matrix Solutions",
      date: "June 2025 - July 2025",
      desc: "Worked as a Frontend Developer Intern at Brainwave Matrix Solutions, developing interactive and responsive web interfaces using HTML, CSS, and JavaScript to enhance user experience and performance.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
      ],
    },
    
    {
      id: 1,
      img: ApexPlanetLogo,
      role: "Frontend Intern",
      company: "ApexPlanet",
      date: "April 2025 - May 2025",
      desc: "Worked as a Frontend Developer Intern at Apex Planet, contributing to the design and implementation of dynamic, responsive, and scalable web interfaces using HTML, CSS, and JavaScript.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: IIITMLogo,
      school: "IIIT Manipur,Senapati",
      date: "Nov 2022 - May 2026",
      // grade: "73.2%",
      desc: "I am currently pursuing my Bachelor of Technology in Computer Science at the Indian Institute of Information Technology, Manipur. My coursework includes Data Structures, Algorithms, Database Management, Web Development, and Software Engineering.",
      degree: "Bachelor of Technology - Btech (Computer Science)",
    },
    {
      id: 2,
      img: SisLogo,
      school: "Satyam International School, Patna",
      date: "Apr 2020 - March 2022",
      // grade: "69%",
      desc: "I completed my class 12th education from Satyam International School, Patna, Bihar, under the CBSE board, where I studied English, Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII)",
    },
    {
      id: 3,
      img: GnsLogo,
      school: "Gyan Niketan, Patna",
      date: "Apr 2019 - March 2020",
      // grade: "73%",
      desc: "I completed my class 10th education from Gyan Niketan, Patna, Bihar, under the CBSE board, where I studied Science, Mathematics, Social Studies, Sanskrit, English and Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Library Management System",
      description:
       "Developed a Library Management System in C to manage books, users, and transactions, featuring book issue/return, reservations, fine calculation, and record management using Csv file handling and modular programming.",
      image: LmsLogo,
      tags: ["C", "File Handling", "Modular Programming"],
      github: "https://github.com/Amarjeet2623/Library-Management-System.git",
    },
    {
      id: 1,
      title: "CloudShop - Online Shopping Website",
      description:
        "Developed a responsive e-commerce platform for electronics, enabling users to browse products, add to cart, and complete purchases. Implemented features like product search, filtering, and secure checkout using React for the frontend and Node.js/Express with MongoDB for the backend. Focused on creating a seamless and user-friendly shopping experience.",
      image: CloudShopLogo,
      tags: ["React JS", "Node.js", "MongoDB","Express.js", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Amarjeet2623/Shopping_Website.git",
      webapp: "https://shopping-website-rose-five.vercel.app/",
    },
    {
      id: 2,
      title: "Nexora – Real-Time Chat & Video Call App",
      description:
        "Developed a real-time messaging and video calling platform using the MERN stack. Implemented features like one-to-one chat, group messaging, and live video calls with WebRTC, along with secure authentication and user management. Focused on delivering a seamless and interactive communication experience.",
      image: NexoraLogo,
      tags: ["React JS","Node.js", "MongoDB", "Express.js", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Amarjeet2623/Nexora.git",
      webapp: "https://nexora-flax-seven.vercel.app/",
    },
    
  ];  