import { faBarsProgress, faBlog, faBriefcase, faClose, faContactCard, faEnvelope, faFile, faHome, faPhone, faTable, faUser, faWorm } from "@fortawesome/free-solid-svg-icons"
import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
    icon : faHome
  },
  {
    url: "/about",
    text: "About",
    icon: faUser
  },{
    url: "/workexperience",
    text: "Work Experience",
    icon: faBriefcase

  },
  {
    url: "/portfolio",
    text: "Portfolio",
    icon: faFile

  },
  {
    url: "/services",
    text: "Services",
    icon: faBarsProgress

  },


  {
    url: "/contact",
    text: "Contact",
    icon: faEnvelope

  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "Prachi Mathe",
    post: "WEB DESIGNER",
    design: "UI / UX DESIGNER",
    desc: "I am a diligent professional front-end developer with around 3 years of working experience in Web designing. Aim to be placed in a challenging organization that gives me scope to enhance my knowledge & skills in accordance with the latest trends and be a part of a team that dynamically works towards growth of organization.",
  },
]
export const about = [
  {
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    desc1: "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    cover: "./images/woman.jpg",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Creative design involves using computer-generated imagery and digital animation to visualise a product. It aims to produce unique and memorable designs that stand out so that customers may easily identify a brand or product."
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "The overarching goal when writing code is to make it easy to read and to understand. Well-written programs are easier to debug, easier to maintain, and have fewer errors. Writing a program is a lot like writing an essay. ",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Responsive design is the idea of making your website look great at any resolution---not just on desktop and mobile. With a responsive site, your desktop and mobile site are the same page, and scale with window size.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system. Material UI components work in isolation. They are self-contained, and will only inject the styles they need to display.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly throughout a UI at  these icons have been optimized for beautiful display.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Awesome Support is the result of three years of work Experience in html, css bootstrap,javascript,tailwind css,scss,material ui,figma web and mobile responsive animation attrective and creative  design . ",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "5",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "12",
    title: "PROJECTS COMPLEATED",
  },
  
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.png",
    name: "Brand",
    category: "marketing",
    title: "Flight Booking",
  },
  {
    id: 2,
    cover: "../images/port/port2.png",
        name: "Brand",
    category: "design",
    title: "Only Jewelst",
  },
  {
    id: 3,
    cover: "../images/port/port3.png",
    name: "Brand",
    category: "development",
    title: "Aim Q Test",
  },
  {
    id: 4,
    cover: "../images/port/port4.png",
    name: "Brand",
    category: "marketing",
    title: "Shopify App",
  },
  {
    id: 5,
    cover: "../images/port/port5.png",
    name: "Brand",
    category: "design",
    title: "Podably",
  },
  {
    id: 6,
    cover: "../images/port/port6.png",
    name: "Brand",
    category: "development",
    title: "Energy Meters",
  },
  {
    id: 7,
    cover: "../images/port/3.png",
    name: "Brand",
    category: "development",
    title: "Aim Q Test Admin",
  },
  {
    id: 8,
    cover: "../images/port/5.png",
    name: "Brand",
    category: "development",
    title: "Energy Meters",
  },
  {
    id: 9,
    cover: "../images/port/6.png",
    name: "Brand",
    category: "development",
    title: "Travelling",
  },
  {
    id: 10,
    cover: "../images/port/7.png",
    name: "Brand",
    category: "development",
    title: "Travelling",
  },
]
// export const testimonials = [
//   {
//     id: 1,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
//     image: "./images/testimonials/team-1.png",
//     name: "John",
//     post: "Front End Developer",
//   },
//   {
//     id: 2,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
//     image: "./images/testimonials/team-2.png",
//     name: "Alex Ander",
//     post: "Back End Developer",
//   },
//   {
//     id: 3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
//     image: "./images/testimonials/team-3.png",
//     name: "GorkCoder",
//     post: "React Developer",
//   },
// ]


export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Indore",
    // text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "8962283860",
    // text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "prachi.mathe0@gmail.com",
    // text2: "inf0@brex-theme.io",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
