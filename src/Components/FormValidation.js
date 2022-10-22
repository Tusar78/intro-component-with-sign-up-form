import React, { Component } from "react";

export class FormValidation extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <div className="form__input-group">
            <input type="text" name="first-name" className="form__input" />
          </div>
          <div className="form__input-group">
            <input type="text" name="last-name" className="form__input" />
          </div>
          <div className="form__input-group">
            <input type="email" name="email" className="form__input" />
          </div>
          <div className="form__input-group">
            <input type="password" name="password" className="form__input" />
          </div>

          <button className="form__btn">Claim your free trial</button>
          <span className="form__terms">By clicking the button, you are agreeing to our Terms and Services</span>
        </form>
      </div>
    );
  }
}

export default FormValidation;
