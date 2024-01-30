import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const MyFooter = () => {
  const styles = {
    footer: {
      backgroundColor: '#f2f2f2',
      padding: '10px',
      textAlign: 'center',
      bottom: 0,
      width: '100%',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      width: '150px',
      height: 'auto',
      marginRight: '10px',
    },
    schoolInfo: {
      display: 'flex',
      flexDirection: 'column', // Adjust to 'row' if you want school name and copyright text side by side
      alignItems: 'flex-start',
    },
    schoolName: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '5px', // Add margin for spacing between school name and copyright text
    },
    copyrightText: {
      color: '#333',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10px',
    },
    icon: {
      margin: '0 10px',
      color: '#3b5998',
    },
    twitterIcon: {
      margin: '0 10px',
      color: '#1da1f2',
    },
    instagramIcon: {
      margin: '0 10px',
      color: '#bc2a8d',
    },
    youtubeIcon: {
        margin: '0 10px',
        color: '#c4302b', // YouTube red color
      },
  };

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.contentContainer}>
          <div>
            <img className="image" src="./images/Gallery/Logo.png" alt="Mountain Top Schools Logo" style={styles.logo} />
          </div>

          <div style={styles.schoolInfo}>
            <h1 style={styles.schoolName}>Mountain Top Schools</h1>
            <p style={styles.copyrightText}>Copyright, 2024. All rights reserved</p>
          </div>

          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" style={styles.icon} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" style={styles.twitterIcon} />
            </a>
            <a href="https://www.instagram.com/mountaintopschools?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" style={styles.instagramIcon} />
            </a>
            <a href="https://youtube.com/@schooldrivetv1338?si=T_Rac_YU874K6K19" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" style={styles.youtubeIcon} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;


