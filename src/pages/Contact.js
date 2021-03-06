import React from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>ArbChain | Contact</title>
          <meta
            name='description'
            content='we at Consenso Labs, carefully examine and design the use cases, and reach out to stakeholders to get early feedback on our minimal viable products.We design and implement our products to not only take it to the MVP stage but also mindfully architect to scale and make it flexible to pilot it universally across multiple targeted institutions. We work on a variety of enterprise and public blockchain platforms, networks, and tools to find the best fit for the customers’ requirements to fulfill the use cases. Talk to us if you have any blockchain service requirements in your organization.'
          />
          <meta name='robots' content='index, follow' />
          <meta
            name='keywords'
            content=' blockchain , blockchain technology, blockchain research lab in Bangalore, cryptography, Blockchain company in Bangalore , Product by Consenso Labs'
          />
        </Helmet>
        <section className='text-gray-700 font-body relative bg-secondary-blue '>
          <div className='container px-5 py-20 mx-auto '>
            <div className='flex flex-col text-center w-full mb-1'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-0 text-white'>
                Interested in exploring Blockchain for your business? reach out
                to us, we’ll get back to you.
              </h1>
            </div>

            <div className='lg:w-1/2 md:w-2/3 mx-auto mb-10 mt-20'>
              <form
                className='flex flex-wrap -m-2  '
                onSubmit={this.submitForm}
                action='https://formspree.io/xlepvzyb'
                method='POST'
              >
                <div className='p-2 w-1/2'>
                  <input
                    className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                    placeholder='Name'
                    type='text'
                    name='name'
                  />
                </div>

                <div className='p-2 w-1/2'>
                  <input
                    className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2'
                    placeholder='Email'
                    type='email'
                    name='email'
                  />
                </div>

                <div className='p-2 w-full'>
                  <textarea
                    className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block'
                    placeholder='Message'
                    name='message'
                  ></textarea>
                </div>
                <div className='p-2 w-full'>
                  {status === 'SUCCESS' ? (
                    <p className='text-primary-yellow'>
                      Thank you for getting in touch!!
                    </p>
                  ) : (
                    <button className='flex mx-auto text-gray-900 bg-primary-yellow border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                      Submit
                    </button>
                  )}
                  {status === 'ERROR' && (
                    <p className='text-primary-yellow'>
                      Ooops! There was an error.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default ContactForm;
