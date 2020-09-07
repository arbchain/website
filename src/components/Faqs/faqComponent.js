import React from 'react';
import './faqComp.Style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div
        className='faq-question cursor-pointer text-gray-900'
        data-aos='fade-left'
      >
        {faq.question}
      </div>
      <div className='faq-answer text-gray-600 px-4'>{faq.answer}</div>
    </div>
  );
}

export default FAQ;
