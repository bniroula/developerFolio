// @ts-nocheck
/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import kafkaIcon from './assets/images/kafka.png';
import graphql from './assets/images/graphql.webp';
import splunk from './assets/images/splunk.png';
import elasticSearch from './assets/images/elastic_search.png';
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bishal Niroula",
  title: "Hello World! I'm Bishal",
  subTitle: emoji(
    `I juggle code, caffeine, and creativity to craft software solutions that not only work but dazzle.🚀 
    So, if you're looking for a software engineer who's passionate about code and who thinks outside the box 📦 (because let's face it, the box is probably just another bug 🐛 waiting to happen), let's connect! I'm on the hunt for my next adventure in the tech world, and your company might just be the setting for the next chapter.`
  ),
  resumeLink:
  "https://drive.google.com/file/d/1h7rVy9Y_shmjxkImYBz_CkZZ70Ri7eQM/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/bniroula",
  linkedin: "https://www.linkedin.com/in/bishal-niroula/",
  gmail: "bishal.nir24@gmail.com",
  goodreads: "https://www.goodreads.com/user/show/18557797-bishal-niroula",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LOVES TO EXPLORE NEW TECH",
  skills: [
    emoji(
      "⚡ Develop robust and scalable backend systems"
    ),
    emoji("⚡ Enhance and optimize Frontend experience "),
    emoji(
      "⚡ Optimize application performance with cutting-edge web technologies"
    ),
    emoji(
      "⚡ Architect and deploy serverless cloud solutions for high availability"
    ),
    emoji(
      "⚡ Implement seamless data migration and management strategies"
    ),
    emoji(
      "⚡ Develop event-driven architectures to enhance application responsiveness"
    ),
    emoji(
      "⚡ Integrate and manage APIs for expansive system interoperability"
    ),
    emoji(
      "⚡ Foster secure software development practices across all phases of the SDLC"
    ),
    emoji(
      "⚡  Build resilient microservices that communicate efficiently across different platforms"
    ),
    emoji(
      "⚡  Debugging: Where I play detective in a mystery where I'm also the culprit"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "drupal",
      fontAwesomeClassname: "fab fa-drupal"
    },
    {
      skillName: "kafka",
      icon:kafkaIcon
    },
    {
      skillName: "graphql",
      icon:graphql
    },
    {
      skillName: "splunk",
      icon: splunk
    },
    {
      skillName:"elasticSearch",
      icon: elasticSearch
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Troy University",
      logo: require("./assets/images/troy_logo.jpg"),
      subHeaders: ["Bachelor of Science in Computer Science","Minors: Physics, Mathematics"],
      duration: "January 2017 - December 2020",
      desc: "Graduated Summa Cum Laude",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Slalom Build",
      companylogo: require("./assets/images/slalom_build.png"),
      date: "July 2022 – Present",
      desc: "Worked in high velocity consulting teams alongside client engineers to deliver scalable software solutions.",
      descBullets: [
        "Engineered an event-driven notification system enabling user subscriptions to price/inventory changes using AWS Serverless tools (Lambda, SNS, SQS, DynamoDB) and Nodejs (serverless, localstack) increasing the sales by $30 millions in a quarter.",
        "Architected and implemented a Migration service, successfully managing the ETL of millions of data rows across production DynamoDB tables, ensuring zero downtime and enhancing data reliability.",
        "Spearheaded the development of a backend system utilizing AWS serverless tools to seamlessly ingest and process millions of Kafka messages within the booking flow, facilitating the integration of add-on offerings during initial bookings and significantly boosting add-on sales while enhancing system scalability and performance."
      ]
    },
    {
      role: "Software Engineer",
      company: "Slalom Build",
      companylogo: require("./assets/images/slalom_build.png"),
      date: "Feb 2021 – July 2022",
      desc: "Worked in high velocity consulting teams alongside client engineers to deliver scalable software solutions.",
      descBullets: [
        "Collaborated with client engineers from the biggest home improvement store to build a scalable credit card payment system using Microservices Architecture, facilitating secure transaction processing and financial data management, significantly improving payment efficiency.",
        "Designed and implemented an innovative Identity service ensuring secure storage and encryption of user tokens, with functionalities including token validation, expiration, and prevention of token reuse, enhancing system security and user data protection."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Slalom Build",
      companylogo: require("./assets/images/slalom_build.png"),
      date: "June 2020 – Aug 2020",
      desc: "Worked alongside other interns and full-time engineers using Agile and Scrum methodologies to enhance existing internal website and develop PoC for future developments.",
      descBullets:[
        "Implemented critical front-end features, such as image cropping and edit locking, enhancing the usability of Slalom's PEM website for 13000 internal users.",
        "Developed a Headless Drupal and React prototype to decouple CMS, improving site performance and flexibility for future development."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Alfa Insurance",
      companylogo: require("./assets/images/Insurance-alfa.png"),
      date: "Jun 2019 – July 2019",
      desc: "Worked in a team with rotating responsibilites to build a Chatbot that is a first point of contact for insured after an incident.",
      descBullets:[
        "Designed and deployed a Chatbot for filing First Notices of Loss, streamlining claim processes and enhancing customer experience through intuitive interactions.",
        "Leveraged Microsoft's Language Understanding and Sentiment Analysis to refine Chatbot interactions, achieving a 50% increase in user engagement and satisfaction.",
        "Halved the notice filing time through Chatbot integration, significantly speeding up the claim initiation process during critical tests."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/hermes.jpeg"),
      projectName: "Project Hermes",
      projectDesc: "Engineered a traffic simulation using Python showcasing a 11% reduction in emissions and 4% increase in throughput via AI-driven traffic light optimization. Collaborated with Chicago Dept. of Transportation for real-world application planning.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hackathon.slalom.com/teams/project-hermes"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/iblink.png"),
      projectName: "iBlink",
      projectDesc: "Developed an eye-controlled typing system with OpenCV, translating eye blinks to Morse code for text input, enhancing accessibility for users with limited mobility.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/bniroula/iBlink"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  achievementsCards: [
    {
      title: "AWS Solutions Architect Associate",
      image: require("./assets/images/aws_associate.png"),
      imageAlt: "AWS Solutions Architect Associate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/155a921d-6d21-42d1-96a0-9efc05bca2e3"
        }
      ]
    },
    {
      title: "Salesforce Certified AI Associate",
      image: require("./assets/images/salesforce.png"),
      imageAlt: "Salesforce Certified AI Associate Logo",
      footerLink:[]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss an interesting opportunity or just want to say hi? My Inbox is open for all.",
  email_address: "bishal.nir24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable
};
