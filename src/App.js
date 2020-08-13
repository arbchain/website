import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Architeture from './components/architeture/Architeture';

import Teams from './components/teams/Teams';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
// import Resources from './components/Resources';
import Description from './components/Description';
import Faq from './components/Faqs/Faq';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Description />
      <Architeture />
      <Teams />
      <Faq />
      {/* <Resources /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
