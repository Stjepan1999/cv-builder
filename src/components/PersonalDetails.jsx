import { useState } from 'react';
import { InputContainer } from './InputContainer';
import '../style.css';

export function PersonalDetails({ firstName, lastName, professionalTitle, summary, onChange }) {
  return (
    <div className="section-container">
      <h1>Personal Details</h1>
      <form className="form">
        <InputContainer
          label="First Name"
          type="text"
          id="first-name"
          name="firstName"
          placeholder="Enter First Name"
          value={firstName}
          onChange={onChange}
        />
        <InputContainer
          label="Last Name"
          type="text"
          name="lastName"
          id="last-name"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={onChange}
        />
        <InputContainer
          label="Professional Title"
          type="text"
          name="professionalTitle"
          id="professional-title"
          placeholder="Software Developer"
          value={professionalTitle}
          onChange={onChange}
        />
        <InputContainer
          label="Summary"
          type="textarea"
          name="summary"
          id="summary"
          placeholder="Write summary about yourself"
          value={summary}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
