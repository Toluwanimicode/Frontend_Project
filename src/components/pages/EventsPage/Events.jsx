import React, { useState } from 'react';
import './Events.css';
import Card2 from '../../Card2/Card2';

const EventPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = 3;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='events'>
      <div className='text-shadeofpurple text-xl font-semibold'>
        <h2>Events</h2>
      </div>

      {/* Display content based on the current page */}
      {currentPage === 1 && (
        <div  class="space-y-4 ml-5 mt-3 card-event " >
            <Card2  
              Title={"Sports Day"}
              Text={"To reinforce our belief that physical education is a part of the curriculum and important for life skills we host an annual inter-team sports day."}
              Subtitle={"Thursday 22nd of February 2024"}
            />
           
            <Card2 
              Title={"Deliverance Day"}
              Text={"On Deliverance Day, our school gathers in unity to fervently seek the blessings and guidance of the Lord through heartfelt prayers, fostering a spirit of faith, community, and gratitude within our Christian journey."}
              Subtitle={"Friday 19th January 2024"}
            />
        </div>
      )}

      {currentPage === 2 && (
        <div  class="space-y-4 ml-5 mt-3 card-event">
          <Card2  
            Text={"Join us on Cultural Day as we celebrate the rich tapestry of diversity within our school community, showcasing the vibrant traditions, customs, and heritage that make our educational journey a harmonious mosaic of cultures"}
            Title={"Cultural Day"}
            Subtitle={"6 October 2024"}
          />
          <Card2 
            Text={"Embark on a journey of inspiration and exploration with us on Career Day, where professionals from diverse fields share their experiences, insights, and expertise, empowering our students to envision and pursue rewarding paths in their future careers"}
            Title={"Career Day"}
            Subtitle={"26 February 2024"}
          />
        </div>
      )}

      {currentPage === 3 && (
        <div  class="space-y-4 ml-5 mt-3 card-event">
          <Card2 
            Title={"End of the year party"}
            Text={"As the school year draws to a close, join us in celebrating achievements, milestones, and unforgettable memories at our End of the Year Party—a joyous occasion filled with laughter, camaraderie, and the anticipation of exciting adventures in the coming academic year."}
            Subtitle={"Around december"}
          />
          <Card2 
            Title={"Valedictory Service"}
            Text={"Join us in bidding a fond farewell to our graduating class at the Valedictory Service, where we reflect on their remarkable journey, celebrate their accomplishments, and send them forth with blessings for a bright and successful future"}
            Subtitle={"Around August"}
          />
        </div>
      )}

      {/* Previous Page Arrow */}
      <div className='navigation' class="mt-4 mb-10">
        <button
          onClick={goToPreviousPage}
          style={{
            backgroundColor: '#9B1DD0',
            borderRadius: '50%', // Make it a perfect circle
            width: '40px', // Set width and height to the same value
            height: '40px',
            padding: '10px', // Adjust padding as needed
            border: 'none', // Remove border
            marginRight: '5px', // Add a small margin between buttons
            cursor: 'pointer', // Add pointer cursor on hover
          }}
        >
          &lt;
        </button>

        {/* Next Page Arrow */}
        <button
          onClick={goToNextPage}
          style={{
            backgroundColor: '#9B1DD0',
            borderRadius: '50%', // Make it a perfect circle
            width: '40px', // Set width and height to the same value
            height: '40px',
            padding: '10px', // Adjust padding as needed
            border: 'none', // Remove border
            cursor: 'pointer', // Add pointer cursor on hover
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EventPage;






