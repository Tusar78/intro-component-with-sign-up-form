import React from 'react';
import FormValidation from './FormValidation';

const FormPage = () => {
  return (
    <section className='section'>
      <div className="container">
        <div className='form-description'>
          <h2 className="description__heading">Learn to code by watching other</h2>
          <p className="description__para">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understating how developers think is invaluable.</p>
        </div>
        <div className='form-container'>
          <span className='form__alert'>Try it free 7 days then $20/mo. thereafter</span>

          <FormValidation />
        </div>
      </div>
    </section>
  );
};

export default FormPage;