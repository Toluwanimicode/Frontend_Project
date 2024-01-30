import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  return (
    <Carousel className='carousel-slide carousel-fade' data-bs-theme="dark" interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel1"
          src="/images/Gallery/group.jpg"
          alt="First slide"
        />
        <div className="overlay-text car-text">     
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel2"
          src="/images/Gallery/Home.jpg"
          alt="Second slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel3"
          src="/images/Gallery/primary.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;