interface PortofolioItem {
  jobImage: string;
  companyName: string;
  jobTitle: string;
  jobLocation: string;
  jobExperience: string;
  technologies: string[];
  responsabilities: string[];
}

export const Frontend: PortofolioItem[] = [
  {
    jobImage: "/LearnLight.png",
    companyName: "Learnlight",
    jobTitle: "Frontend Developer",
    jobLocation: "Madrid, Spain (Remote)",
    jobExperience: "1 yr 3 mos",
    technologies: ["React", "Typescript", "i18next"],
    responsabilities: [
      "Created user-friendly, responsive, and visually appealing interfaces",
      "Helped support/QA identify technical issues",
      "Analysed requirements (Functional Specs) and generated technical documentation",
      "Followed GitFlow and other Engineering Processes",
    ],
  },
  {
    jobImage: "/ideahub.png",
    companyName: "Ideahub",
    jobTitle: "Junior Tester/Junior Frontend Developer",
    jobLocation: "Timisoara, Romania",
    jobExperience: "5 mos/1 yr (On-site)",
    technologies: ["React", "JavaScript", "HTML5", "CSS", "jquery"],
    responsabilities: [
      "As a Junior Frontend Developer:",
      "Developed, tested, and delivered production ready applications.",
      "Designed user flows and visual styles for new website and app features, while collaborating with other teams trough Jira Software.",
      "Gained experience working in multiple team projects and improved my communication skills.",
      "Installed and configured essential plugins for enhanced functionality.",
      "Gained experience with multiple programming languages.",
      "Worked with Atlassian products (Jira, Confluence and Trello).",
      "Maintained a direct relationship with clients throughout the dev process in order to deliver the best possible products.",
      "As a Junior Tester:",
      "Tested applications in order to document current behaviour and report bugs.",
      "Improved my communication skills by learning how to compose clear and concise reports and provide feedback.",
    ],
  },
];

export const LicenseApp: PortofolioItem[] = [
  {
    jobImage: "/TheSpotsHomePage.png",
    companyName: "TheSpots",
    jobTitle: "License Application",
    jobLocation: "University of Politehnica Timisoara",
    jobExperience: "4 yr",
    technologies: [
      "React",
      "JavaScript",
      "NodeJS",
      "Express",
      "MongoDB",
      "CSS",
      "HTML5",
    ],
    responsabilities: [
      "Developed TheSpots, a web application designed to help users find the best restaurants based on their preferences and connect with others with similar tastes.",
      "Utilized React for frontend development, leveraging reusable components to enhance code efficiency and maintainability.",
      "Implemented the backend using Node.js and Express.js, facilitating robust server-side logic and RESTful API development.",
      "Managed data storage using MongoDB, a non-relational database, to efficiently handle and query restaurant and user data.",
      "Designed a matching algorithm to recommend restaurants to users by analyzing user preferences and friend reviews.",
      "Created user authentication and authorization features, including registration and login processes with password hashing for security.",
      "Developed a dynamic notification system to handle friend requests and interactions within the application.",
      "Engineered a comprehensive review system, allowing users to rate and review restaurants, integrating feedback into the restaurant recommendation process.",
      "Established a modular code structure, implementing separate modules for user management, restaurant management, and friend requests to ensure scalability and ease of maintenance.",
      "Contributed to the overall user experience by designing intuitive UI components and ensuring seamless interaction between the frontend and backend.",
    ],
  },
];

export const WordpressProjects: PortofolioItem[] = [
  {
    jobImage: "/nutrinoosHome.png",
    companyName: "nutriNOOS",
    jobTitle: "Co-founder | Website Developer",
    jobLocation: "health & wellness online store",
    jobExperience: "",
    technologies: ["Wordpress", "Woocomerce"],
    responsabilities: [
      "Designed and developed a custom WordPress website, utilizing themes and plugins to create a responsive, user-friendly experience.",
      "Customized themes with HTML, CSS.",
      "Managed website content and ensured SEO-friendly structure to improve search engine rankings.",
      "Installed and configured essential plugins for enhanced functionality.",
      "Optimized website performance through caching, image compression, and code minification.",
      "Implemented security measures and regularly updated WordPress core, themes, and plugins.",
    ],
  },
];
