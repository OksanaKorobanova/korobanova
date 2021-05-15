import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { projectsList } from '../tempData/tempData';

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = React.useState(
    history.location.pathname
  );
  const handleNavigation = (event, url, toggleDrawer) => {
    setSelectedIndex(url);
    history.push(url);
    if (toggleDrawer) {
      toggleDrawer(event);
    }
  };

  const [darkMode, setDarkMode] = useState(true);
  const [snowActive, setSnowActive] = useState(false);
  const [projects, setProjects] = useState(projectsList);
  const [project, setProject] = useState(null);

  const changeProjectList = (data) => {
    setProjects(data);
  };
  const changeProject = (otherProject) => {
    setProject(otherProject);
  };
  const changeSnowActive = () => {
    setSnowActive(!snowActive);
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
        selectedIndex,
        setSelectedIndex,
        handleNavigation,
      }}>
      {props.children}
    </MainContext.Provider>
  );
};
export default MainContextProvider;
