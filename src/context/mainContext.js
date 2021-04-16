import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import Project1 from '../images/projects/markroid.jpg';
import Logo1 from '../images/markroid/logo.png';
import Bg1 from '../images/markroid/bg.jpg';
import Project2 from '../images/projects/oksanavitol.png';
import Audio1 from '../audioPlayer/audio1.mp3';
export const MainContext = createContext();

const projectsList = [
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
const MainContextProvider = (props) => {
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = React.useState(
    history.location.pathname
  );
  const [darkMode, setDarkMode] = useState(true);
  const [snowActive, setSnowActive] = useState(false);
  const [projects, setProjects] = useState(projectsList);
  const [project, setProject] = useState(null);
  const [track, setTrack] = useState({ source: Audio1 });
  const [audioPlayerStatus, setAudioPlayerStatus] = useState(false);
  const changeProjectList = (data) => {
    setProjects(data);
  };
  const changeProject = (otherProject) => {
    setProject(otherProject);
  };
  const changeSnowActive = () => {
    setSnowActive(!snowActive);
  };
  const changeAudioPlayerStatus = () => {
    setAudioPlayerStatus(!audioPlayerStatus);
  };
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <MainContext.Provider
      value={{
        projects,
        changeProjectList,
        project,
        changeProject,
        snowActive,
        changeSnowActive,
        darkMode,
        changeDarkMode,
        setDarkMode,
        audioPlayerStatus,
        changeAudioPlayerStatus,
        track,
        setTrack,
        selectedIndex,
        setSelectedIndex,
      }}>
      {props.children}
    </MainContext.Provider>
  );
};
export default MainContextProvider;
