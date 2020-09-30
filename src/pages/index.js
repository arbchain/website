import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';

import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title='Arbchain'
        keywords={[
          `Blockchain Research Lab`,
          `Consenso Labs`,
          `Legal`,
          `tailwindcss`,
        ]}
      />
      <Navbar />
    </Layout>
  );
}

export default IndexPage;
