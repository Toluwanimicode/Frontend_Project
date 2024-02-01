import React, { useState } from 'react'
import AdmissionForm from '../AdmissionForm/AdmissionForm'
import "../Admission/Admission.css"

const Admission = () => {
    const [showAdmissionForm, setShowAdmissionForm] = useState(false);

    const handleOpenAdmissionForm = () => {
      setShowAdmissionForm(true);
    };
  
    const handleCloseAdmissionForm = () => {
      setShowAdmissionForm(false);
    };
  return (
    <div>
        <div className='container'>
            <h1 className='admission-intro'>Welcome to Our Admission Page</h1>
            <p>Discover the pathway to educational excellence at Mountain Top Schools. We are delighted that you are considering joining our vibrant community. Our admission process is designed to be seamless and welcoming, ensuring a smooth transition for both students and their families.</p>
        </div>
        <div>
            
            <button  className='admission-button' onClick={handleOpenAdmissionForm}>Open Admission Form</button>

            {showAdmissionForm && <AdmissionForm onClose={handleCloseAdmissionForm} />}
        </div>
    </div>
  )
}

export default Admission;