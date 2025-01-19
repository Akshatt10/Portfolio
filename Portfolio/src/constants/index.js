import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/Project-6.png";
import CSA from "../assets/Certifications/CSA.png";
import CAD from "../assets/Certifications/CAD.png";
import project7 from "../assets/projects/Project-7.png";
import project8 from "../assets/projects/Project-8.png";


export const HERO_CONTENT = `Aspiring software developer with a keen interest in learning and growing in the field of web development and data analytics. Currently a 4th year B.Tech student, with experience in building basic MERN stack projects. Familiar with Python and SQL for data analysis. Proven ability to integrate AI features and deploy web applications. Eager to gain hands-on experience and enhance my skills through an internship in a dynamic and supportive environment.`;

export const ABOUT_TEXT = `I am a dedicated and eager fresher with a strong passion for web development and data analysis. As a 4th-year BTech student, I have built a React portfolio website to showcase my skills and projects. My academic journey has equipped me with hands-on experience in technologies such as React, Node.js, and MongoDB. I am keen to learn new things and continuously strive to expand my knowledge. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of my studies, I stay active by exploring new technologies and contributing to various projects. I am now looking for an internship where I can further develop my skills and contribute to impactful projects.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Present",
    role: "Software Developer Intern",
    company: "AFI DigitalServices LLP",
    description: `Working on core backend development and API integration for the company's projects and learning new technologies including microservices architecture.`,
    technologies: ["Node.js", "Koa.js", "Typescript", "C#/.NETASP", "Azure", "Microservices"],
  },
  {
    year: "Sept 2023 - Oct 2023",
    role: "Data Science Intern",
    company: "Bharat Intern",
    description: `Worked on the respective given task involving Data analysis and model training`,
    technologies: ["Python", "Data Analytics", "Machine Learning"],
  },

];

export const CERTIFICATIONS = [
  {
    Name: "ServiceNow Certified System Administrator",
    image: CSA
  },
  {
    Name: "ServiceNow Certified Application Developer",
    image: CAD
  },
]

export const PROJECTS = [
  {
    title: "GitGram- github like app",
    image: project1,
    description:
      "A fully functional MERN website with features of liking github profiles, watch profile visits of github, explore page .",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Passport.js"],
    link: "https://mern-git.onrender.com",
  },
  {
    title: "Real-time Chat Application",
    image: project7,
    description:
      "This is a Real-Time chat app based on firebase and reactJs. You can chat with your friends by logging into it",
    technologies: ["HTML", "CSS", "Javascript", "ReactJs", "Firebase"],
    link: "https://my-chat-app-topaz.vercel.app/",
  },
  {
    title: "To-Do task app",
    image: project8,
    description:
      "This is a To-Do app making you write all your days To-Do and help you cut down on what is done",
    technologies: ["HTML", "CSS", "Javascript", "ReactJs"],
    link: "https://to-do-app-git-main-akshat-tyagis-projects.vercel.app/",
  },
  {
    title: "Gemini Clone",
    image: project2,
    description:
      "An application showing my frontend and API skills where I cloned Google GEMINI with ReactJs into a responsive website and deployed on Netlify",
    technologies: ["HTML", "CSS", "Javascript", "React"],
    link: "https://mygeminiapp.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailWindCSS", "React", "JavaScript"],
  },
  {
    title: "YouTube Data Analytics Web app",
    image: project6,
    description:
      "Working Web app for analysis of any YouTube channel using different functions and YouTube API.",
    technologies: ["Python", "Data Analysis", "StreamLit", "Data Science"],
    link: "https://akshatt10-youtube-data-analysis-app-qagmkb.streamlit.app/",
  },
  {
    title: "PowerBi Spotify Dashboard",
    image: project4,
    description:
      "A Concise dashboard consisting of all the songs on Spotify using SpotifyAPI and integrated with different DAX functionalities. ",
    technologies: ["HTML", "Data Science", "Data Analytics", "Python", "PowerBi"],
  },
  {
    title: "Lip Reading WebApp",
    image: project5,
    description:
      "Machine Learning Model training on a GRID CORPUS dataset with 20k+ video data for making Lip reading WEBAPP hosted on Streamlit ",
    technologies: ["MachineLearning", "Data Science", "Data Analytics", "Python"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9319379610",
  email: "akshattyagi1010@gmail.com",
};
