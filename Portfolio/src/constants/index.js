import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `Aspiring software developer with a keen interest in learning and growing in the field of web development and data analytics. Currently a 4th year B.Tech student, with experience in building basic MERN stack projects. Familiar with Python and SQL for data analysis. Proven ability to integrate AI features and deploy web applications. Eager to gain hands-on experience and enhance my skills through an internship in a dynamic and supportive environment.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sept 2023 - Oct 2023",
    role: "Data Science Intern",
    company: "Bharat Intern",
    description: `Worked on the respective given task involving Data analysis and model training`,
    technologies: ["Python", "Data Analytics", "Machine Learning"],
  },

];

export const PROJECTS = [
  {
    title: "Restaurant Reservation Website",
    image: project1,
    description:
      "A fully functional MERN website with features like Menu listing, responsiveness, reservation form connected to Mongodb .",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Gemini Clone",
    image: project2,
    description:
      "An application showing my frontend and API skills where I cloned Google GEMINI with ReactJs into a responsive website and deployed on Netlify",
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailWindCSS", "React", "JavaScript"],
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
  email: "akshattyagi1010@example.com",
};