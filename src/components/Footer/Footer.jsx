import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MyFooter = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <div className="flex flex-col items-center">
        <img className="w-24 h-auto mb-4" src="./images/Gallery/Logo.png" alt="Mountain Top Schools Logo" />
        
        <h1 className="text-purple-600 text-2xl mb-1">Mountain Top Schools</h1>

        <div className="text-purple-600 mb-4">Copyright, 2024. All rights reserved</div>

        <div className="flex justify-center items-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-2">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 mx-2">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/mountaintopschools?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-pink-600 mx-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://youtube.com/@schooldrivetv1338?si=T_Rac_YU874K6K19" target="_blank" rel="noopener noreferrer" className="text-red-600 mx-2">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;


