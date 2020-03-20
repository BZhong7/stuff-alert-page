import React, { Component } from "react";
import Checkbox from "./Checkbox";

const BRANDS = ["A.P.R.", "Arpenteur", "No Nationality"];
const SIZES = [
    "24", "25", "26", "27", "28", "29",
    "30", "31", "32", "33", "34", "35", "36", "37", "38",
    "XS", "S", "M", "L", "XL", "XXL"];
const CLOTHES = ["Shirts", "Shoes", "Pants"];
const OPTIONS = BRANDS.concat(SIZES, CLOTHES);

let outputData = new Map()

class App extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
        outputData.set(checkbox);
      });
    for (let [key, value] of outputData) {
        console.log(JSON.stringify(key + ' = ' + value)); }
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createBrandCheckboxes = () => BRANDS.map(this.createCheckbox);
  createSizeCheckboxes = () => SIZES.map(this.createCheckbox);
  createClothesCheckboxes = () => CLOTHES.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <h1>Stuff Alert!</h1>
                <fieldset>
                  <legend>Brands</legend>
                    {this.createBrandCheckboxes()}
                </fieldset>
                <fieldset>
                  <legend>Sizes</legend>
                    {this.createSizeCheckboxes()}
                </fieldset>
                <fieldset>
                  <legend>Clothes</legend>
                    {this.createClothesCheckboxes()}
                </fieldset>
              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
