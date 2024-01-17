import { useState } from 'react';
import { InputContainer } from './InputContainer';
import '../style.css';

export function PersonalDetails() {
  const value = 'John';
  const handleChange = () => {
    console.log('handling change');
  };
  return (
    <div className="section-container">
      <h1>Personal Details</h1>
      <form className="form">
        <InputContainer
          label="First Name"
          type="text"
          id="first-name"
          placeholder="Enter First Name"
          value={value}
          onChange={handleChange}
        />
        <InputContainer
          label="Last Name"
          type="text"
          id="last-name"
          placeholder="Enter Last Name"
          value={value}
          onChange={handleChange}
        />
        <InputContainer
          label="Professional Title"
          type="text"
          id="professional-title"
          placeholder="Software Developer"
          value={value}
          onChange={handleChange}
        />
        <InputContainer
          label="Summary"
          type="textarea"
          id="summary"
          placeholder="Write summary about yourself"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
