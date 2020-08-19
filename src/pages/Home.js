import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import Description from '../components/Description';
import Architeture from '../components/architeture/Architeture';
import Faq from '../components/Faqs/Faq';
import Resources from '../components/DevResources';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <Description />
      <Architeture />
      <Resources />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
