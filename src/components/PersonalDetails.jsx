import { useState } from 'react';
import { InputContainer } from './InputContainer';
import '../style.css';

export function PersonalDetails() {
  const value = 'Hi';
  const handleChange = () => {
    console.log('handling change');
  };
  return (
    <div className="personal-details">
      <h1>Personal Details</h1>
      <form>
        <InputContainer
          label="First Name"
          type="text"
          id="first-name"
          placeholder="Enter First Name"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
