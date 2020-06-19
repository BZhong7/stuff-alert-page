import React, { Component } from "react";
import Checkbox from "./Checkbox";

const BRANDS = ["A.P.C.", "Arpenteur", "No Nationality"];
const PANTSIZES = [
    "24", "25", "26", "27", "28", "29",
    "30", "31", "32", "33", "34", "35", "36", "37", "38"];
const SHIRTSIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const SHOESIZES =  [
    "5.0", "5.5", "6.0", "6.5", "7.0", "7.5", "8.0", "8.5",
    "9.0", "9.5", "10.0", "10.5", "11.0", "11.5", "12.0"];
const CLOTHES = ["Shirts", "Shoes", "Pants"];
const OPTIONS = BRANDS.concat(PANTSIZES, SHIRTSIZES, SHOESIZES, CLOTHES);

let selectedOptions = [];
let jsonData = {};


function findOption(dataArr) {
    let sortJson = {};
    let brandsArr = [];
    let pantSizeArr = [];
    let shirtSizeArr = [];
    let shoeSizeArr = [];
    let clothesArr = [];

    var value;
    
    for (value of dataArr) {
        if(BRANDS.includes(value))
            brandsArr.push(value);
        else if (PANTSIZES.includes(value))
            pantSizeArr.push(value);
        else if (SHIRTSIZES.includes(value))
            shirtSizeArr.push(value);
        else if (SHOESIZES.includes(value))
            shoeSizeArr.push(value);
        else if (CLOTHES.includes(value))
            clothesArr.push(value);
    }
    
    sortJson["brands"] = brandsArr;
    sortJson["pantSizes"] = pantSizeArr;
    sortJson["shirtSizes"] = shirtSizeArr;
    sortJson["shoeSizes"] = shoeSizeArr;
    sortJson["clothes"] = clothesArr;

    return sortJson;
}
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
        selectedOptions.push(checkbox);
      });
    jsonData = findOption(selectedOptions);
    console.log(JSON.stringify(jsonData));
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
  createPantSizeCheckboxes = () => PANTSIZES.map(this.createCheckbox);
  createShirtSizeCheckboxes = () => SHIRTSIZES.map(this.createCheckbox);
  createShoeSizeCheckboxes = () => SHOESIZES.map(this.createCheckbox);
  createClothesCheckboxes = () => CLOTHES.map(this.createCheckbox);

  makeCall = () => (
      fetch('https://ctq4nhnb50.execute-api.us-east-2.amazonaws.com/beta/find-item?brands=A.P.C.&brands=Arpenteur&&brands=No%20Nationality&tags=Pants&tags=Shoes&tags=Shirts&pantsSize=29&pantsSize=33&shoeSize=10.5')
      .then(results => results.json())
      .catch(error => console.log(error))
  );

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
                  <legend>Pants Sizes</legend>
                    {this.createPantSizeCheckboxes()}
                </fieldset>
                <fieldset>
                  <legend>Shirt Sizes</legend>
                    {this.createShirtSizeCheckboxes()}
                </fieldset>
                <fieldset>
                  <legend>Shoe Sizes</legend>
                    {this.createShoeSizeCheckboxes()}
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.makeCall}
                >
                  Submit
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
