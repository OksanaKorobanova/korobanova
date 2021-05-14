import Project1 from '../images/projects/markroid.webp';
import Logo1 from '../images/markroid/logo.png';
import Bg1 from '../images/markroid/bg.webp';
// import Project2 from '../images/projects/oksanavitol.webp';
import Img1 from '../images/markroid/demoPhotos/1.webp';
import Img2 from '../images/markroid/demoPhotos/2.webp';
import Img3 from '../images/markroid/demoPhotos/3.webp';
import Img4 from '../images/markroid/demoPhotos/4.webp';
import Img5 from '../images/markroid/demoPhotos/5.webp';
import Img6 from '../images/markroid/demoPhotos/6.webp';
import Img7 from '../images/markroid/demoPhotos/7.webp';
import EnImage from '../images/languages/en.webp';
import UaImage from '../images/languages/ua.webp';

export const projectsList = [
  {
    id: 1,
    name: 'Markroid',
    link: 'https://markroid.com/',
    logo: Logo1,
    background: Bg1,
    description:
      'Markroid platform provides digital infrastructure for startups and businesses to research, develop, maintain and automate business model and all underlying resources and activities',
    client: 'XGenTeam',
    clientLocation: 'Baton Rouge, US',
    image: Project1,
    business: 'A cloud-based(AWS) SaaS platform to manage business processes',
    solution: [
      'Landing Page design && development',
      'SPA built with React (functional components & custom hooks & context)',
      'UI Framework - Material UI (custom theme, theme styles overriding)',
      'AWS Authentication, Amazon S3 on front-end (using AWS Amplify)',
      'APIs using GraphQL',
      'Tables, charts(using Recharts), custom forms',
      'Developed single React project for converting JSON to Landing Page for Markroid clients',
      'Developed npm package for converting JSON to React Material UI forms',
    ],
    technologies: [
      'React',
      'Material UI',
      'GraphQL',
      'NodeJs',
      'AWS',
      'HTML5',
      'CSS3',
    ],
    status: 'in progress',
  },
  // {
  //   id: 2,
  //   name: 'oksanavitol.com',
  //   description: 'Personal website',
  //   client: '',
  //   image: Project2,
  //   business: '',
  //   solution: [],
  //   technologies: ['React', 'Redux', 'Material UI'],
  // },
];

export const tileData = [
  {
    img: Img1,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: Img2,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Img3,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Img4,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Img5,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Img6,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: Img7,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];

export const skillsList = [
  'React',
  'Redux',
  'Material UI',
  'GraphQL',
  'AWS',
  'HTML5',
  'CSS3',
  'JavaScript',
  'Typescript',
  'Bootstrap',
];

export const lngsList = {
  en: { nativeName: 'English', img: EnImage },
  ua: { nativeName: 'Ukrainian', img: UaImage },
};
