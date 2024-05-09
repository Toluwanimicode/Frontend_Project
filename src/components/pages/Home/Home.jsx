import Carousels from "../../Carousel/Carousel";
import "../Home/Home.css"

const Home = () => {
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  return (
    <>
        <div>  
              <div>
                  <div>
                      <Carousels />
                  </div>
              </div>    
          
        </div>  
      
        <div className="card-container">
        <div className="card card1">
          <div className="card-header">
            Our Schools
          </div>
          <div className="card-body">
            <p>MountainTop Secondary School, Iwaya MountainTop Primary School, Akoka MountainTop Primary School, MFM Prayer City</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Our Vision
          </div>
          <div className="card-body">
            <p>To raise children (Spiritually, Morally, and Academically) who will be confidently assured of a place in the society under the supervision of highly qualified teachers; Teachers who are well committed to the development...</p>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Our Mission
          </div>
          <div className="card-body">
            <p>To be the best Educational Institution which will help each child discover and actualize God's plan for his/her life in order to be a well balanced and cultured individual in his/her society and the world at large.</p>
          </div>
        </div>
      </div>

        <div>
          <h2 className="header-video text-purple2 title1">Video Gallery</h2>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '30px', marginBottom: '30px'}}>
              <div style={{ width: '50%', marginRight: '10px', marginLeft: '70px' }}>
                <iframe width="250" height="150" src="https://www.youtube.com/embed/fylyyrLhVsU?si=KQsHmWJIeNi273i5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div style={{ width: '50%', marginRight: '10px' }}>
                <iframe width="250" height="150" src="https://www.youtube.com/embed/ffBOVZkNh64?si=diTG7UK69NHfUS17" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
        </div>

        </div>

        <div>
          <h2 className="text-purple2 title title1">Graduation Highlights</h2>
          <div className="image-container">
              <img src={"./images/Gallery/Graduation1.jpg"} alt="Graduation pictures" className="gallery-image" />
              <img src={"./images/Gallery/Graduation2.jpg"} alt="Graduation pictures" className="gallery-image" />
              <img src={"./images/Gallery/Graduation3.jpg"} alt="Graduation pictures" className="gallery-image" />
          </div>


        </div>
    </>
  );
}

export default Home;