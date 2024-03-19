import { 
  skpal, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "about-us",
    title: "About Us",
  },
  {
    id: "contact-us",
    title: "Contact Us",
  },
];

// export const navLinks = [
//   {
//     id: "home",
//     title: "Home",
//   },
//   {
//     id: "features",
//     title: "Features",
//   },
//   {
//     id: "product",
//     title: "Product",
//   },
//   {
//     id: "clients",
//     title: "Clients",
//   },
// ];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Industrial Projects",
    content:
      "More than 100 projects in different domains, having substantial impact in the Industry, striking their standards.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Modern Tech",
    content:
      "State-of-the-art technology implemented and employed in all pertaining projects.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Consortium Partners",
    content:
      "Large consortiums including TATA, SAIL and BHEL have willingly partnered with us.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "...The centre focuses to work for solving industrial problems bringing innovation in manufacturing. It also aims to facilitate the SMEs and Startups to its state-of-the-art infrastructure for their early prototyping...",
    name: "Surjya K Pal",
    title: "Chairperson, CoEAMT",
    img: skpal
  }
];

export const stats = [
  {
    id: "stats-1",
    title: "Projects",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Students",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Consortium Partners",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "CoEAMT",
        link: "https://www.coeamt.com/",
      },
      {
        name: "IIT Kharagpur",
        link: "https://www.iitkgp.ac.in/",
      },
      {
        name: "Apply Now",
        link: "https://www.hoobank.com/explore/",
      }
    ],
  },
  {
    title: "Accomplishments",
    links: [
      {
        name: "Published Papers",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Patents",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/suggestions/",
      }
    ],
  },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Our Partner",
  //       link: "https://www.hoobank.com/our-partner/",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "https://www.hoobank.com/become-a-partner/",
  //     },
    // ],
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];