import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage'
import About from './aboutme'
import Contact from './contact';
import Projects from './projects'

const Main = () => (
  <switch>
    <Route exact path ="/" component = {LandingPage} />
    <Route path ="/aboutme" component = {About} />
    <Route path ="/projects" component = {Projects} />
    <Route path ="/contact" component = {Contact} />
  </switch>
)

export default Main;
