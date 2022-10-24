import React, { Component } from "react";

export class FormValidation extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    formErrors: {},
    isSubmit: false,
  };

  handleValidate = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formErrors: this.validate(this.state),
      isSubmit: true,
    });

    if (Object.keys(this.state.formErrors).length === 0 && this.isSubmit) {
    }
  };

  validate = (values) => {
    const errors = {};
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.firstName) {
      errors.firstName = "FirstName is required!";
    }
    if (!values.lastName) {
      errors.lastName = "lastName is required!";
    }
    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "email is not valid!";
    }
    if (!values.password) {
      errors.password = "password is required!";
    }
    return errors;
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="form">
        <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
        <form onSubmit={this.handleSubmit}>
          <div className="form__input-group">
            <input
              type="text"
              name="firstName"
              className="form__input"
              placeholder="First Name"
              onChange={this.handleValidate}
            />
            <p className="form-error">{formErrors.firstName}</p>
          </div>
          <div className="form__input-group">
            <input
              type="text"
              name="lastName"
              className="form__input"
              placeholder="Last Name"
              onChange={this.handleValidate}
            />
            <p>{formErrors.lastName}</p>
          </div>
          <div className="form__input-group">
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Email Address"
              onChange={this.handleValidate}
            />
            <p>{formErrors.email}</p>
          </div>
          <div className="form__input-group">
            <input
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              onChange={this.handleValidate}
            />
            <p>{formErrors.password}</p>
          </div>

          <button className="form__btn">Claim your free trial</button>
          <span className="form__terms">
            By clicking the button, you are agreeing to our{" "}
            <span className="text-[#ff7a7a] font-bold">Terms and Services</span>
          </span>
        </form>
      </div>
    );
  }
}

export default FormValidation;
