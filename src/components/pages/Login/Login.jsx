import React, { useState } from 'react';
import Navigation from '../../Navigation/Navigation';
import LoginModal from '../../LoginModal/LoginModal';

const LoginForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        console.log('Opening modal');
        setIsModalOpen(true);
      };
      
      const closeModal = () => {
        console.log('Closing modal');
        setIsModalOpen(false);
      };
      
return (
    <>
        
    <button onClick={openModal}>Open Login Modal</button>

    {isModalOpen && <LoginModal onClose={closeModal} />}
    </>
  );
};

export default LoginForm;
