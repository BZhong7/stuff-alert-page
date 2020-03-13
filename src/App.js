import React, { Component } from "react";
import './App.css';

const makeCheckbox = (
    <div className = "form-check">
      <label>
        <input type="checkbox"
          name = "chkA.P.C."
          value = "A.P.C." />
        A.P.C.
      </label>
    </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "28"
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };


  render() {
    return (
        <form onSubmit={this.handleFormSubmit}>
            <h1>Stuff Alert!</h1>
            <fieldset>
              <legend>Brands</legend>
                {makeCheckbox}
                <div className="form-check">
                  <label>
                    <input
                      type="checkbox"
                      name="react-tips"
                      value="Arpenteur"
                      className="form-check-input"
                    />
                    Arpenteur
                  </label>
                </div>
                <div className="form-check">
                  <label>
                    <input
                      type="checkbox"
                      name="react-tips"
                      value="No Nationality"
                      className="form-check-input"
                    />
                    No Nationality
                  </label>
                </div>
            </fieldset>
            <fieldset>
              <legend>Sizes</legend>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="24"
                   className="form-check-input"
                  />
                  Size 24
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="25"
                   className="form-check-input"
                  />
                  Size 25
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="26"
                   className="form-check-input"
                  />
                  Size 26
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="27"
                   className="form-check-input"
                  />
                  Size 27
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="28"
                    className="form-check-input"
                  />
                  Size 28
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="29"
                   className="form-check-input"
                  />
                  Size 29
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="30"
                   className="form-check-input"
                  />
                  Size 30
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="31"
                   className="form-check-input"
                  />
                  Size 31
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="32"
                   className="form-check-input"
                  />
                  Size 32
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="33"
                   className="form-check-input"
                  />
                  Size 33
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="34"
                   className="form-check-input"
                  />
                  Size 34
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="35"
                   className="form-check-input"
                  />
                  Size 35
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="36"
                   className="form-check-input"
                  />
                  Size 36
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="37"
                   className="form-check-input"
                  />
                  Size 37
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="checkbox"
                    name="react-tips"
                    value="38"
                   className="form-check-input"
                  />
                  Size 38
                </label>
              </div>
              <div className="form-group">
              </div>
            </fieldset>
            <button className="btn btn-primary mt-2" type="submit">
                Submit
            </button>
        </form>
   );
  }
}

export default App;
