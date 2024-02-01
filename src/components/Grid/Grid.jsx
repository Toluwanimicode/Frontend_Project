// ImageGrid.js
import "../Grid/Grid.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ImageGrid() {
  return (
    <>
      <div className="grid-container ">
        <img src={"./images/Gallery/img3.jpg"} alt="Images" width={'400px'} height={'200px'}  />
        <img src={"./images/Gallery/img1.jpg"} alt="Images" width={'420px'} height={'200px'}/>
        <img src={"./images/Gallery/img2.jpg"} alt="Images" width={'400px'}  height={'200px'}/>
        <img src={"./images/Gallery/img3.jpg"} alt="Images" width={'400px'} height={'200px'}  />
        <img src={"./images/image7.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image5.jpg"} alt="Images" height={'250px'}  />
        <img src={"./images/image6.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image16.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image24.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image22.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image20.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image21.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image13.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image14.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image19.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image15.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image23.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image8.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image9.jpg"} alt="Images"  height={'250px'}  />
        <img src={"./images/image11.jpg"} alt="Images"  height={'250px'}  />
      </div>
    </>
  );
}

export default ImageGrid;
