// @ts-nocheck
/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 800 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bishal Niroula",
  title: "Hello, I'm Bishal.",
  subTitle: emoji(
    `I work full-stack on software that carries real weight, from serverless systems moving eight-figure revenue to court and government workflows people depend on. 🚀
    Open to the next hard problem!`
  ),
  resumeLink: "/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/bniroula",
  linkedin: "https://www.linkedin.com/in/bishal-niroula/",
  gmail: "bishal.nir24@gmail.com",
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
      "⚡ Build event-driven systems on AWS serverless (Lambda, SNS, SQS, DynamoDB) that move real revenue"
    ),
    emoji(
      "⚡ Run zero-downtime data migrations across production DynamoDB at millions-of-rows scale"
    ),
    emoji(
      "⚡ Design multi-tenant SaaS architecture with service boundaries, tenant isolation, cross-cutting integrations"
    ),
    emoji(
      "⚡ Ship government and court workflows with real-time integrations to external state systems"
    ),
    emoji(
      "⚡ Ingest and process Kafka streams at scale to power booking, notification, and pricing flows"
    ),
    emoji(
      "⚡ Design API contracts, data models, and event schemas with versioning, backwards compatibility, and access-pattern-first thinking"
    ),
    emoji(
      "⚡ Debug like a detective in a mystery where I'm also the culprit"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      category: "Cloud & Infra",
      items: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "Azure",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
        },
        {
          skillName: "GCP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
        },
        {
          skillName: "Terraform",
          icon: "https://cdn.simpleicons.org/terraform"
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          skillName: "GitHub Actions",
          icon: "https://cdn.simpleicons.org/githubactions"
        }
      ]
    },
    {
      category: "AI-Assisted Dev",
      items: [
        {
          skillName: "Claude Code",
          icon: "https://cdn.simpleicons.org/claude"
        },
        {
          skillName: "Kiro",
          icon: "https://kiro.dev/icon.svg"
        },
        {
          skillName: "GitHub Copilot",
          icon: "https://cdn.simpleicons.org/githubcopilot"
        }
      ]
    },
    {
      category: "Data & Events",
      items: [
        {
          skillName: "Kafka",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg"
        },
        {
          skillName: "DynamoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg"
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "Elasticsearch",
          icon: "https://cdn.simpleicons.org/elasticsearch"
        },
        {
          skillName: "Flyway",
          icon: "https://cdn.simpleicons.org/flyway"
        }
      ]
    },
    {
      category: "Languages",
      items: [
        {
          skillName: "Java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fab fa-python"
        },
        {
          skillName: "TypeScript",
          icon: "https://cdn.simpleicons.org/typescript"
        },
        {
          skillName: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        }
      ]
    },
    {
      category: "Frameworks & Tools",
      items: [
        {
          skillName: "React",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "fab fa-node"
        },
        {
          skillName: "Spring Boot",
          icon: "https://cdn.simpleicons.org/spring"
        },
        {
          skillName: "Quarkus",
          icon: "https://cdn.simpleicons.org/quarkus"
        },
        {
          skillName: "GraphQL",
          icon: "https://cdn.simpleicons.org/graphql"
        },
        {
          skillName: "Splunk",
          icon: "https://cdn.simpleicons.org/splunk"
        },
        {
          skillName: "Drupal",
          fontAwesomeClassname: "fab fa-drupal"
        }
      ]
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
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      desc: "Senior Engineer on client engagements",
      descBullets: [
        "Deliver full-stack features (Java, TypeScript, React) for a statewide multi-tenant court case management system serving multiple jurisdictions in production.",
        "Built judicial case lifecycle, firearms and marriage licensing, and vital records workflows with real-time integrations to external state government systems.",
        "Helped shape service boundaries and the data model, and defined how the platform integrates with auth, reporting, document management, finance, and workflow orchestration.",
        "Drove $30M in added quarterly sales by building an event-driven price/inventory subscription system on AWS Lambda, SNS, SQS, and DynamoDB (Node.js, Serverless Framework, LocalStack).",
        "Migrated millions of rows across production DynamoDB tables with zero downtime via a purpose-built ETL service.",
        "Processed millions of Kafka messages through an AWS serverless ingestion pipeline that folded add-on offerings into the booking flow, lifting attach rates."
      ]
    },
    {
      role: "Software Engineer",
      company: "Slalom Build",
      companylogo: require("./assets/images/slalom_build.png"),
      date: "Feb 2021 – July 2022",
      desc: "Embedded with client engineering teams to ship production software under real deadlines.",
      descBullets: [
        "Built a microservices-based credit card payment system with client engineers at the largest US home improvement retailer, handling live transactions.",
        "Designed the identity service, which handles token encryption and validation, expires tokens on schedule, and blocks reuse."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Slalom Build",
      companylogo: require("./assets/images/slalom_build.png"),
      date: "June 2020 – Aug 2020",
      desc: "Internship building features on Slalom's internal PEM site and prototyping a headless CMS setup",
      descBullets:[
        "Shipped image cropping and edit locking on Slalom's internal PEM site (13,000 users).",
        "Prototyped a headless Drupal + React architecture to decouple the CMS from the frontend."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Alfa Insurance",
      companylogo: require("./assets/images/Insurance-alfa.png"),
      date: "Jun 2019 – July 2019",
      desc: "Worked in a team with rotating responsibilities to build a chatbot that serves as the first point of contact for policyholders after an incident.",
      descBullets:[
        "Built and deployed a claim-intake chatbot serving as the first touchpoint for policyholders after an incident.",
        "Tuned conversation flow using Microsoft LUIS and sentiment analysis, increasing test-user engagement by 50%.",
        "Cut claim filing time in half in test scenarios."
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
      projectDesc: "Engineered a traffic simulation using Python showcasing an 11% reduction in emissions and 4% increase in throughput via AI-driven traffic light optimization. Collaborated with Chicago Dept. of Transportation for real-world application planning.",
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
