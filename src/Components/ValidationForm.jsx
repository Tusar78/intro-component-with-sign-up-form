import React, { Component } from "react";

export class ValidationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    errors: {},
  };

  getData = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      // errors: this.validation(this.state),
    });
  };

  validation = (values) => {
    const errors = {};
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.firstName) {
      errors.firstName = `First Name can't be empty`;
    }

    if (!values.lastName) {
      errors.lastName = `Last Name can't be empty`;
    }

    if (!values.email) {
      errors.email = `Email can't be empty`;
    } else if (!regex.test(values.email)) {
      errors.email = `Looks like this is not an email`;
    }

    if (!values.password) {
      errors.password = `Password can't be empty`;
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      errors: this.validation(this.state),
    });
  };

  render() {
    const { firstName, lastName, email, password, errors } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="form__input-group">
            <input
              type="text"
              name="firstName"
              className={errors.firstName ? "form__input border-[#ff7a7a]" : "form__input"}
              placeholder="First Name"
              value={firstName}
              onChange={this.getData}
            />
            <img
              className={errors.firstName ? "error-icon" : "error-icon hidden"}
              src="https://raw.githubusercontent.com/Tusar78/intro-component-with-sign-up-form/5f0e183347b76534cb50c4b27d2121518ed6cfbf/src/images/icon-error.svg"
              alt="error img"
            />
            <span className="form__error">{errors.firstName}</span>
          </div>
          <div className="form__input-group">
            <input
              type="text"
              name="lastName"
              className={errors.lastName ? "form__input border-[#ff7a7a]" : "form__input"}
              placeholder="Last Name"
              value={lastName}
              onChange={this.getData}
            />
            <img
              className={errors.lastName ? "error-icon" : "error-icon hidden"}
              src="https://raw.githubusercontent.com/Tusar78/intro-component-with-sign-up-form/5f0e183347b76534cb50c4b27d2121518ed6cfbf/src/images/icon-error.svg"
              alt="error img"
            />
            <span className="form__error">{errors.lastName}</span>
          </div>
          <div className="form__input-group">
            <input
              type="email"
              name="email"
              className={errors.email ? "form__input border-[#ff7a7a]" : "form__input"}
              onChange={this.getData}
              value={email}
              placeholder="Email Address"
            />
            <img
              className={errors.email ? "error-icon" : "error-icon hidden"}
              src="https://raw.githubusercontent.com/Tusar78/intro-component-with-sign-up-form/5f0e183347b76534cb50c4b27d2121518ed6cfbf/src/images/icon-error.svg"
              alt="error img"
            />
            <span className="form__error">{errors.email}</span>
          </div>
          <div className="form__input-group">
            <input
              type="password"
              name="password"
              className={errors.password ? "form__input border-[#ff7a7a]" : "form__input"}
              onChange={this.getData}
              value={password}
              placeholder="Password"
            />
            <img
              className={errors.password ? "error-icon" : "error-icon hidden"}
              src="https://raw.githubusercontent.com/Tusar78/intro-component-with-sign-up-form/5f0e183347b76534cb50c4b27d2121518ed6cfbf/src/images/icon-error.svg"
              alt="error img"
            />
            <span className="form__error">{errors.password}</span>
          </div>

          <button className="form__btn" type="submit">
            Claim your free trial
          </button>
          <span className="form__terms">
            By clicking the button, you are agreeing to our{" "}
            <span className="text-[#ff7a7a] font-bold">Terms and Services</span>
          </span>
        </form>
      </div>
    );
  }
}

export default ValidationForm;
