import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Architeture from './components/Architeture';
import RequestDemo from './components/RequestDemo';
import WhitePaper from './components/WhitePaper';
import Footer from './components/Footer';

import Technology from './components/TechStack';
import Description from './components/Description';
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
