import React from 'react'
import "./About.css"


const About = () => {
  return (
    <>
      <div class="about-intro text-center text-purple-400 ml-10">
        <div class="relative">
          <img class="max-w-full max-h-72" src="./images/Gallery/group.jpg" alt="Graduation pictures" />
          <div class="absolute top-2.5 left-2.5 bg-blue-500 text-white p-2 rounded text-xs">
            <h3>Mountain Top Schools <br /> Since 2004</h3>
          </div>
        </div>
      </div>

      <div class="flex mt-5 flex-col lg:flex-row">
        <div class="flex-none mr-5 ">
          <img src="./images/Gallery/Schoollogo.png" alt="School Logo" class="max-w-full h-auto ml-10 lg:mb-10" />
        </div>
        <div class="flex-grow">
          <div class="mb-5">
            <h3 class="font-semibold text-2xl text-purple-900 mt-5 text-center">Our Vision</h3>
          </div>
          <p class="ml-10">To raise children (Spiritually, Morally, and Academically) who will be confidently assured of a place in the society under the supervision of highly qualified teachers; Teachers who are well committed to the development, education, discipline, spiritual and moral instructions of students.</p>
          <div class="mb-5">
            <h3 class="font-semibold text-2xl text-purple-900 mt-5 text-center ">Our Mission</h3>
          </div>
          <p class="ml-10 mb-10">To be the best Educational Institution which will help each child discover and actualize God's plan for his/her life in order to be a well balanced and cultured individual in his/her society and the world at large. To train boys and girls to develop a deep sense of honesty, integrity and industry. To Enhance improvement of educational standard in the countryand train boys and girls to become Godly leaders.</p>
        </div>
      </div>


    </>
  )
}

export default About;