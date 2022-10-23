import React, { Component } from "react";

export class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "", password: "", formErrors: {}, isSubmit : false };
  }
  
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
      isSubmit: true
    })

    if (Object.keys(this.state.formErrors).length === 0 && this.isSubmit) {
      console.log(this.state);
    }
  };
  
  
    
  

  validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'FirstName is required!'
    }
    if (!values.lastName) {
      errors.lastName = 'lastName is required!'
    }
    if (!values.email) {
      errors.email = 'email is required!'
    }
    if (!values.password) {
      errors.password = 'password is required!'
    }

    return errors;
  }

  render() {
    const { firstName, lastName, email, password, errors } = this.state;
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
          </div>
          <div className="form__input-group">
            <input
              type="text"
              name="lastName"
              className="form__input"
              placeholder="Last Name"
              onChange={this.handleValidate}
            />
          </div>
          <div className="form__input-group">
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Email Address"
              onChange={this.handleValidate}
            />
          </div>
          <div className="form__input-group">
            <input
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              onChange={this.handleValidate}
            />
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
