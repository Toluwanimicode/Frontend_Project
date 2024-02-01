import React, { useState } from 'react'
import Navigation from '../../Navigation/Navigation'
import "./AdmissionForm.css"

const AdmissionForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    parentPhoneNumber: '',
    parentEmailAddress: '',
    howDidYouHear: '',
    referralName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send formData to the backend
      const response = await fetch('http://localhost:3000/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully!');
        // Close the form after submission
        onClose();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  return (
    <>
    <div className="admission-form">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student's First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>

        <label>
          Student's Middle Name:
          <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
        </label>

        <label>
          Student's Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>

        <label>
          Parent's Phone Number:
          <input
            type="tel"
            name="parentPhoneNumber"
            value={formData.parentPhoneNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Parent's Email Address:
          <input
            type="email"
            name="parentEmailAddress"
            value={formData.parentEmailAddress}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          How Did You Hear About Us:
          <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} required>
            <option value="Select an option">Select an option</option>
            <option value="Parent referral">Parent referral</option>
            <option value="Online Website">Online/Website</option>
            <option value="Internet">Internet</option>
            <option value="Friends or Family">Friends or Family</option>
            <option value="School Event">School Event</option>
            {/* Add more options as needed */}
          </select>
        </label>

        {formData.howDidYouHear === 'Referral' && (
          <label>
            Referral Name:
            <input type="text" name="referralName" value={formData.referralName} onChange={handleChange} required />
          </label>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AdmissionForm;
