import React, { Component } from "react";

export class ValidationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  getData = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name] : [value]
    })
  };

  render() {
    const {firstName, lastName, email, password} = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="form__input-group">
            <input
              type="text"
              name="firstName"
              className="form__input"
              placeholder="First Name"
              value={firstName}
              onChange={this.getData}
            />
          </div>
          <div className="form__input-group">
            <input
              type="text"
              name="lastName"
              className="form__input"
              placeholder="Last Name"
              value={lastName}
              onChange={this.getData}
            />
          </div>
          <div className="form__input-group">
            <input
              type="email"
              name="email"
              className="form__input"
              onChange={this.getData}
              value={email}
              placeholder="Email Address"
            />
          </div>
          <div className="form__input-group">
            <input
              type="password"
              name="password"
              className="form__input"
              onChange={this.getData}
              value={password}
              placeholder="Password"
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

export default ValidationForm;
