import React from 'react'
import "./About.css"


const About = () => {
  return (
    <>
      <div class="about-intro">
        <div class="image-wrapper">
          <img class="picture" src="./images/Gallery/group.jpg" alt="Graduation pictures" />
          <div class="since-box">
            <h3>Mountain Top Schools <br></br> Since 2004</h3>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="image-container">
          <img src="./images/Gallery/Schoollogo.png" alt="School Logo" />
        </div>
        <div className="text-container">
          <div>
            <h3 className="vision">Our Vision</h3>
          </div>
          <p>To raise children (Spiritually, Morally, and Academically) who will be confidently assured of a place in the society under the supervision of highly qualified teachers; Teachers who are well committed to the development, education, discipline, spiritual and moral instructions of students.</p>
          <div>
            <h3 className="mission">Our Mission</h3>
          </div>
          <p>To be the best Educational Institution which will help each child discover and actualize God's plan for his/her life in order to be a well balanced and cultured individual in his/her society and the world at large. To train boys and girls to develop a deep sense of honesty, integrity and industry. To Enhance improvement of educational standard in the countryand train boys and girls to become Godly leaders.</p>
        </div>
      </div>

    </>
  )
}

export default About;