import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemStatement from '../components/ProblemStatement';
import Architeture from '../components/architeture/Architeture';
import Faq from '../components/Faqs/Faq';
import Resources from '../components/DevResources';
import Footer from '../components/Footer';
import Features from '../components/Features';

import { Helmet } from 'react-helmet';

function IndexPage() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Arbchain</title>
        <meta
          name='description'
          content='DLT based platform that brings all the benefits of the decentralization to solve inefficiencies in the arbitration by providing authentic, privacy preserved dispute resolution with a self enforceable agreements embedded in the blockchain to automate several arbitration procedures and enforce arbitral awards.'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content=' blockchain , blockchain technology, blockchain research lab in Bangalore, cryptography, Arbitration '
        />
      </Helmet>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Features />
      <Architeture />
      <Resources />
      <Faq />
      <Footer />
    </>
  );
}

export default IndexPage;
