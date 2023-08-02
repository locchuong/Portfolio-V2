export type Portfolio = {
  fullName: string;
  role: string;
  catchPhrase: string;
  resumeLink: string;
  socials?: {
    email?: string;
    linkedInUrl?: string;
    githubUrl?: string;
  };

  experience: Experience;
  projects: Projects;
};

export type Experience = {
  dateFrom: string;
  dateTo: string;
  position: string;
  companyName: string;
  description: string;
  tags: string[];
  url?: string;
}[];

export type Projects = {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}[];

const PORTFOLIO_DATA: Portfolio = {
  fullName: "Loc Chuong",
  role: "Frontend Engineer at Sage Network",
  catchPhrase: "I build captivating user interfaces that engage and delight.",
  socials: {
    email: "ltchuong19@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/loc-chuong/",
    githubUrl: "https://github.com/locchuong",
  },
  experience: [
    {
      dateFrom: "2021",
      dateTo: "PRESENT",
      position: "Frontend Engineer",
      companyName: "Sage Network",
      url: "https://www.sage.com/en-gb/sage-network/",
      description:
        "Coordinated and led three Frontend teams to developer 'Sage Network' Web App, a unified platform merging three products. Provided technical support and expertise across various engineering teams to expedite project development, troubleshoot issues, and implement bug fixes.",
      tags: ["TypeScript", "React", "Redux", "HTML", "SCSS", "NX"],
    },
    {
      dateFrom: "2022",
      dateTo: "PRESENT",
      position: "Frontend Engineer",
      companyName: "Contract (NDA)",
      description:
        "Took a pivotal role in end-to-end development of innovative features, from conceptualization to implementation. Led Design System management, streamlining design process with Figma for application consistency.",
      tags: ["TypeScript", "React", "Redux", "HTML", "SCSS", "Figma"],
    },
    {
      dateFrom: "JUN",
      dateTo: "SEP 2021",
      position: "Software Engineer Intern",
      companyName: "Sage Network",
      url: "https://www.sage.com/en-gb/sage-network/",
      description:
        "Spearheaded development of 'Insights' Web App as part of a collaborative team effort to deliver an intuitive and user-friendly data-visualization dashboard. Implemented robust input validation and conducted unit and integration tests for C# Backend, enhancing application stability.",
      tags: ["TypeScript", "React", "HTML", "SCSS", "C#", "SQL"],
    },
  ],
  resumeLink: "https://google.com",
  projects: [
    {
      title: "Camp Wat Pa",
      description:
        "Volunteered as a Frontend Developer for Camp Wat Pa, a youth leadership program in La Puente, California. Proud to contribute to empowering the next generation of leaders through this transformative summer camp.",
      link: "https://campwatpa.org/",
      tags: ["TypeScript", "React", "HTML", "CSS"],
      imageSrc: "/src/assets/images/CampWatPa.png",
    },
    {
      title: "Pathfinding Visualizer",
      description:
        "Designed and engineered an interactive web application that offers captivating visualizations of prominent pathfinding algorithms, including Dijkstra's, A* Search, BFS, DFS, and Recursive Sub-division.",
      link: "https://github.com/locchuong/Pathfinding-Visualizer",
      tags: ["JavaScript", "React", "HTML", "CSS"],
      imageSrc: "/src/assets/images/Pathfinder.png",
    },
    {
      title: "Sorting Visualizer",
      description:
        "Interactive web application that offers captivating visualizations of prominent sorting algorithms, including Bubble, Heap, Merge, Quick, Selection, and Shell sort.",
      link: "https://github.com/locchuong/sorting-visualizer",
      tags: ["JavaScript", "React", "HTML", "CSS"],
      imageSrc: "/src/assets/images/Sorter.png",
    },
    {
      title: "StudentBoard",
      description:
        "Dynamic full-stack web application offering users a comprehensive online learning platform. Implemented secure and streamlined OAuth 2.0 authorization, integrating Firebase's Authentication API, to guarantee robust user authentication and authorization mechanisms.",
      link: "https://github.com/locchuong/StudentBoard",
      tags: ["JavaScript", "React", "HTML", "CSS", "Bootstrap", "Firebase"],
      imageSrc: "/src/assets/images/StudentBoard.png",
    },
  ],
};

export default PORTFOLIO_DATA;
