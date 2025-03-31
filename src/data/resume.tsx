import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

const numberOfYears = (): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const isAfterAugust = currentDate.getMonth() > 7; // Months are 0-indexed (June = 5)

  // Add +1 if the current date is after June
  return isAfterAugust ? currentYear - 2021 + 1 : currentYear - 2021;
};

export const DATA = {
  name: "Varun TV",
  initials: "TV",
  url: "https://varuntv.me",
  location: "Mysuru, Karnataka, IN",
  locationLink: "https://www.google.co.in/maps/place/Mysuru,+Karnataka/@12.3106334,76.5532878,12z/data=!3m1!4b1!4m6!3m5!1s0x3baf70381d572ef9:0x2b89ece8c0f8396d!8m2!3d12.2958104!4d76.6393805!16zL20vMGo2MDM?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
  description:
    `Frontend Developer with ${numberOfYears()} years of experience, passionate about modern technologies and user experiences.`,
  // summary:
  //   "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  summary: `In my ${numberOfYears()}-year journey as a frontend developer, I've honed my skills in building intuitive and scalable web applications. I'm passionate about exploring cutting-edge technologies and creating impactful digital solutions. Along the way, I've delivered projects for startups and freelance clients and continuously worked on refining my craft to push the boundaries of what's possible in software development.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/40756782?v=4",
  skills: [
    "Javascipt",
    "Typescript",
    "Vue.js",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "Go",
    "Express.js",
    "Flask",
    "REST",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Supabase",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "varun_tv@outlook.com",
    tel: "+918147740371",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/varuntv97",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/varun-tv",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/varuntv97?s=21&t=wL0vNpPDfHMzUtrD6sbpBQ",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Instagram: {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/varun_venkatesh/",
      //   icon: Icons.instagram,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      Email: {
        name: "Email",
        url: "mailto:varun_tv@outlook.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Exinous Technologies",
      href: "https://www.exinous.com/",
      badges: [],
      location: "Mysuru, Karnataka, IN",
      title: "Frontend Developer",
      logoUrl: "/exinousLogo.png",
      start: "Feb 2022",
      end: "Present",
      description:
        "Contributed to the development of multiple web applications, working across both frontend and backend, utilizing modern frameworks and technologies to deliver robust and scalable solutions. Currently, focusing on learning DevOps practices and implementing small tasks to gain hands-on experience with CI/CD pipelines, containerization, and cloud deployment.",
    },
    {
      company: "Deshik Labs",
      badges: [],
      href: "https://www.deshik.in/",
      location: "Mysuru, Karnataka, IN",
      title: "Frontend Developer",
      logoUrl: "/deshikLogo.png",
      start: "Jan 2021",
      end: "Feb 2022",
      description:
        "Contributed to the development of a customized ERP system with a primary focus on frontend development using Vue.js, playing a major role in creating intuitive and scalable user interfaces as part of a modern software stack.",
    },
  ],
  education: [
    {
      school: "The National Institute of Engineering",
      href: "https://nie.ac.in/",
      degree: "Bachelor of Engineering",
      logoUrl: "/nieLogo.png",
      // start: "2023",
      // end: "2024",
    },
  ],
  projects: [
    {
      title: "Sanchara",
      href: "https://sanchara.vercel.app/",
      dates: "March 2025",
      active: true,
      description:
        "Developed this application to simplify travel planning through AI-powered tools that generate smart, personalized itineraries.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Gemini",
      ],
      links: [
        {
          type: "Website",
          href: "https://sanchara.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sanchara.png",
      video:
        "",
    },
    {
      title: "Ramtech",
      href: "https://www.ramte.ch/",
      dates: "March 2025",
      active: true,
      description:
        "Developed a custom website for an engineering company, focusing on user experience and responsive design with admin panel for easy content management.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ramte.ch/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ramtech.png",
      video:
        "",
    },
    {
      title: "Sharana Krupa Valuers",
      href: "https://www.sharanakrupavaluers.com/",
      dates: "Feb 2025",
      active: true,
      description:
        "Developed a custom website for a valuation firm, focusing on user experience and responsive design.",
      technologies: [
        "CSS",
        "HTML",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.sharanakrupavaluers.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sharanakrupavaluers.png",
      video:
        "",
    },
    {
      title: "Calm Growth",
      href: "https://calmgrowth.ca",
      dates: "Nov 2024",
      active: true,
      description:
        "Designed and developed a custom website tailored to meet client-specific requirements.",
      technologies: [
        "Wordpress",
        "Elementor",
        "CSS",
        "HTML",
        "JavaScript",
        "PHP",
      ],
      links: [
        {
          type: "Website",
          href: "https://calmgrowth.ca",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cg.png",
      video:
        "",
    },
    // {
    //   title: "Monster Slayer Game",
    //   href: "https://varuntv97.github.io/monster-slayer-game-vue/",
    //   dates: "Feb 2021",
    //   active: true,
    //   description:
    //     "Monster Slayer is a Vue.js game where you fight a monster using attacks, healing, and special moves. The game ends with a win, loss, or draw based on health.",
    //   technologies: [
    //     "Vue.js",
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://varuntv97.github.io/monster-slayer-game-vue/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/varuntv97/monster-slayer-game-vue",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/monsterSlayer.png",
    //   video: "",
    // },
    {
      title: "Customer Sales Insights",
      href: "https://github.com/varuntv97/customer-sales-insights-api",
      dates: "Sep 2024",
      active: true,
      description:
        "A Flask based API that handles customer and sales data, providing valuable insights through aggregation and reporting.",
      technologies: [
        "Flask",
        "Python",
        "MongoDB",
        "Docker",
        "Kubernetes",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/varuntv97/customer-sales-insights-api",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sales.png",
      video:
        "",
    },
    {
      title: "Threejs Sphere",
      href: "https://github.com/varuntv97/threejs-sphere/tree/master",
      dates: "April 2023",
      active: false,
      description:
        "Crafted an immersive and dynamic 3D sphere experience leveraging technologies like Three.js, GSAP, showcasing creative animation.",
      technologies: [
        "Javascript",
        "three js",
        "GSAP",
        "Vite",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/varuntv97/threejs-sphere/tree/master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/three.png",
      video: "",
    },
  ],
  process: [
    {
      title: "Understand",
      description:
        "I start by understanding the project goals, target audience, and the vision. Through detailed discussions and research, I ensure every requirement is crystal clear.",
      image: "",
    },
    {
      title: "Plan",
      description:
        "I map out the project with a solid plan, including wireframes and timelines. This stage sets the foundation for smooth execution and aligns expectations.",
      image: "",
    },
    {
      title: "Design",
      description:
        "I craft intuitive and aesthetically pleasing designs that balance functionality with creativity. Every pixel and interaction is designed to enhance user experience.",
      image: "",
    },
    {
      title: "Develop",
      description:
        "I bring designs to life with clean, scalable code. I leverage modern technologies and best practices to build robust and performant web applications.",
      image: "",
    },
    {
      title: "Test",
      description:
        "I rigorously test the application to ensure it meets quality standards. I perform various tests to identify and fix bugs, ensuring a seamless user experience.",
      image: "",
    },
    {
      title: "Deliver",
      description:
        "I deliver a polished product on time and provide support to ensure everything runs smoothly post-launch. Your satisfaction is my top priority.",
      image: "",
    }
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
