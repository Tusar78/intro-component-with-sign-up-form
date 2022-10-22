import React, { Component } from "react";

export class FormValidation extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  handleValidate = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    const { firstName, lastName, email, password } = this.state;
    e.preventDefault();
    console.log(firstName, lastName, email, password);
  }

  render() {
    return (
      <div className="form">
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
            By clicking the button, you are agreeing to our <span className="text-[#ff7a7a] font-bold">Terms and Services</span>
          </span>
        </form>
      </div>
    );
  }
}

export default FormValidation;
