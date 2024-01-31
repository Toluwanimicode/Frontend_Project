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
      </div>
    </>
  );
}

export default ImageGrid;
