import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import NoMatchPage from './pages/404error';
import ReactGA from 'react-ga';

export default function App() {
  useEffect(() => {
    ReactGA.initialize('UA-178594238-2');
    //ReactGA.pageview(window.location.pathname + window.length.search);
    ReactGA.pageview('/');
    ReactGA.pageview('/about');
    ReactGA.pageview('/contact');
  }, []);

  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </>
  );
}
