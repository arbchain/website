import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className='text-gray-700 font-body relative bg-secondary-blue '>
        <div className='container px-5 py-20 mx-auto '>
          <div className='flex flex-col text-center w-full mb-1'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-0 text-white'>
              Interested in exploring Blockchain for your business? reach out to
              us, we’ll get back to you.
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
            </form>
          </div>

          <form
            onSubmit={this.submitForm}
            action='https://formspree.io/xlepvzyb'
            method='POST'
          >
            <label>Email:</label>
            <input type='email' name='email' />
            <label>Message:</label>
            <input type='text' name='message' />
            {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
            {status === 'ERROR' && <p>Ooops! There was an error.</p>}
          </form>
        </div>
        <form
          onSubmit={this.submitForm}
          action='https://formspree.io/xlepvzyb'
          method='POST'
        >
          <label>Name:</label>
          <input type='text' name='name' />
          <label>Email:</label>
          <input type='email' name='email' />
          <label>Message:</label>
          <input type='text' name='message' />
          {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
          {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </form>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
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
}

export default ContactForm;
