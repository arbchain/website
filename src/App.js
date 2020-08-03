import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProblemStatement from './ProblemStatement';
import Architeture from './Architeture';
import RequestDemo from './RequestDemo';
import WhitePaper from './WhitePaper';
import Footer from './Footer';

import Technology from './TechStack';
import Description from './Description';
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Description />
      <Architeture />
      <Technology />
      <RequestDemo />
      <WhitePaper />
      <Footer />
    </>
  );
}
