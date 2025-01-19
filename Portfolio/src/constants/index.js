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


export const HERO_CONTENT = `Aspiring software developer with a strong foundation in backend development, including hands-on experience in building scalable systems, APIs, and web applications. Currently a 4th-year B.Tech student with proficiency in the MERN stack, data analytics using Python and SQL, and a keen interest in Web3 development. Experienced in integrating AI features and deploying production-ready applications, as well as working with cloud services like Azure and Cosmos DB. Passionate about continuous learning, and eager to contribute to impactful projects through an internship in a dynamic, collaborative environment.`;

export const ABOUT_TEXT = `I am a passionate and dedicated Software Developer with expertise in full-stack development and backend architecture. As a 4th-year BTech student, I have worked on diverse projects, building responsive portfolio websites, scalable backend systems, and API-driven applications. My tech stack includes React.js, Node.js, Express.js, TypeScript, Koa.js, MongoDB, SQL, and Azure Cloud Services, providing me with a robust foundation in both frontend and backend development.

My experience includes designing and implementing APIs, developing microservices-based architectures, and integrating cloud solutions. I also have exposure to data analysis and machine learning, which has enhanced my problem-solving and analytical capabilities. I actively explore new technologies to stay updated and continuously improve my development skills.

I thrive in collaborative environments and enjoy solving challenging problems to deliver high-quality, impactful solutions. I am currently seeking opportunities to further apply my expertise, learn new technologies, and contribute to meaningful projects.`;

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
