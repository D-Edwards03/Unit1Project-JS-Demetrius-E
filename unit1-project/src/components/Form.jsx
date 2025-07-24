import React from "react";

function Form() {

  return (
    <form action="/" method="get">
      <fieldset>
        <legend>Request A Quote:</legend>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          required
          minLength="2"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          required
        />

        <label htmlFor="phoneNum">Phone Number:</label>
        <input
          type="tel"
          id="phoneNum"
          name="phoneNum"
          placeholder="xxx-xxx-xxxx"
          required
          minLength="10"
        />

        <legend>Property Type:</legend>
        <label>
          <input
            type="radio"
            name="propertyType"
            value="residential"
            required
          />
          Residential
        </label>
        <label>
          <input type="radio" name="propertyType" value="commercial" required />
          Commercial
        </label>

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Form;
