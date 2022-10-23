import React from 'react';
import ValidationForm from './ValidationForm';

const FormPage = () => {
  return (
    <main className='main-section'>
      <section className="container">
        <div className='form-description'>
          <h2 className="description__heading">Learn to code by watching others</h2>
          <p className="description__para">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understating how developers think is invaluable.</p>
        </div>

        <div className='form-container'>
          <p className='form__alert'><span className='font-bold'>Try it free 7 days</span> then $20/mo. thereafter</p>
          <ValidationForm />
        </div>
      </section>
    </main>
  );
};

export default FormPage;