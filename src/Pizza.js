import React, { useState, useEffect } from "react";

const defaultValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  instructions: "",
};

const Pizza = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleChange = (e) => {
    setFormValues(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return (
    <div>
      <h1>Order Pizza!</h1>
      <label htmlFor="pizza">
        <h3>Choice of Size:</h3>
      </label>
      <form id="pizza-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="pizza-form">
          <select name="order-pizza">
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="extra-large">extra large</option>
          </select>
        </label>
        <h2>Toppings</h2>

        <label htmlFor="topping1">
          topping1: <input id="topping1" type="checkbox" />
        </label>
        <label htmlFor="topping2">
          topping2: <input id="topping2" type="checkbox" />
        </label>
        <label htmlFor="topping3">
          topping3: <input id="topping3" type="checkbox" />
        </label>

        <h2>Choice of Substitute</h2>
        <p>Choose one Topping per pizza order</p>
        {/*Form input goes Here */}

        <label htmlFor="fname">First Name: </label>
        <input
          type="name-input"
          id="fname"
          name="fname"
          placeholder="Enter First Name"
          onChange={(e) => handleChange(e)}
        />
        <button>Click!</button>
      </form>
    </div>
  );
};

export default Pizza;
