import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './views/home';
import AboutPage from './views/about';
import ProjectsPage from './views/projects';
import ProjectPage from './views/project';
import ContactPage from './views/contact';
import NotFoundPage from './views/404';
import Cv from './views/cv';
import MainContextProvider from './context/mainContext';
export const homeRoute = '/';
export const aboutRoute = '/about';
export const projectsRoute = '/projects';
export const contactRoute = '/contact';
export const notFoundRoute = '/:anything';
export const cvRoute = '/cv';

const renderLayout = () => {
  return (
    <MainContextProvider>
      <Layout>
        <Switch>
          <Route path={homeRoute} component={HomePage} exact={true} />
          <Route path={aboutRoute} component={AboutPage} exact={true} />
          <Route path={cvRoute} component={Cv} exact={true} />
          <Route path={projectsRoute} component={ProjectsPage} exact={true} />
          <Route path={projectsRoute} component={ProjectPage} />
          <Route path={contactRoute} component={ContactPage} exact={true} />
          <Route path={notFoundRoute} component={NotFoundPage} />
        </Switch>
      </Layout>
    </MainContextProvider>
  );
};

function App() {
  return renderLayout();
}

export default App;
