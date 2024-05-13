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
      
        <div className="flex flex-wrap mt-20 flex-col lg:flex-row">
            <div className="flex flex-col flex-1 mr-4 max-w-md">
              <div className="bg-white py-4 text-center text-purple-800 text-xl font-semibold">
                Our Schools
              </div>
              <div className="bg-white p-4">
                <p>MountainTop Secondary School, Iwaya MountainTop Primary School, Akoka MountainTop Primary School, MFM Prayer City</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 mr-4 max-w-md">
              <div className="bg-white py-4 text-center text-purple-800 text-xl font-semibold">
                Our Vision
              </div>
              <div className="bg-white p-4">
                <p>To raise children (Spiritually, Morally, and Academically) who will be confidently assured of a place in the society under the supervision of highly qualified teachers; Teachers who are well committed to the development...</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 max-w-md">
              <div className="bg-white py-4 text-center text-purple-800 text-xl font-semibold">
                Our Mission
              </div>
              <div className="bg-white p-4">
                <p>To be the best Educational Institution which will help each child discover and actualize God's plan for his/her life in order to be a well balanced and cultured individual in his/her society and the world at large.</p>
              </div>
            </div>
        </div>

<div>
  <h2 className="text-purple-800 text-2xl font-semibold mt-10 ml-6 flex-col">Video Gallery</h2>
  <div className="flex justify-end mt-4 mb-4 flex-col ml-10 lg:flex-row ">
    <div className="w-1/2 mr-4 mb-10">
      <iframe width="250" height="150" src="https://www.youtube.com/embed/fylyyrLhVsU?si=KQsHmWJIeNi273i5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className="w-1/2 mr-4">
      <iframe width="250" height="150" src="https://www.youtube.com/embed/ffBOVZkNh64?si=diTG7UK69NHfUS17" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </div>
</div>

<div>
  <h2 className="text-purple-800 text-2xl font-semibold mt-10 ml-6">Graduation Highlights</h2>
  <div className="flex mt-4 flex-col ml-10 lg:flex-row mb-10">
    <img src={"./images/Gallery/Graduation1.jpg"} alt="Graduation pictures" className="w-48 h-auto mr-8 mt-4 lg:mr-40" />
    <img src={"./images/Gallery/Graduation2.jpg"} alt="Graduation pictures" className="w-48 h-auto mr-8 mt-4 lg:mr-40" />
    <img src={"./images/Gallery/Graduation3.jpg"} alt="Graduation pictures" className="w-48 h-auto mt-4 mb-5 lg:mr-40" />
  </div>
</div>

    </>
  );
}

export default Home;