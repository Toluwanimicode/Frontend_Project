import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from "../../Button/Button"
import "./Contact.css"


function Contact() {
  const style ={
    backgroundColor: "orange",
    borderRadius: "20px",
    width: "10%",
    
  }
  return (
    <>
       <div className='container'>
          <h1 className='contact'> Contact Us</h1>
          <p>Feel free to walk into any of our centers accross Lagos and Ogun state. Call or Email us at any time and we will surely respond. You can also reach us by filling the contact form below. We look forward to hearing from you. Thank you! </p>
       </div>
        <div className='container'>
            <Form>
                    <Row>
                        <Col>
                        <Form.Control placeholder="Your name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Enter your email" />
                        </Col>
                    </Row>
            </Form>

            <br></br>

            <FloatingLabel controlId="floatingPassword" label=" Phone No">
            <Form.Control type="number" placeholder="Number" />
            </FloatingLabel>

            <br></br>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
        </FloatingLabel>

        <br></br>

        <Button style={style}>Send</Button>
     </div>
   
     <br></br>
      <div className='container map'>
        <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Mountain%20Top%20Secondary%20School%20Lagos+(Mountain%20Top%20%20Secondary%20School)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>  <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=9e8119cc092071949f73dc82c1f1422a282cb33d'></script>
      </div>
     <div className='container'>
        <h3>Contact Information</h3>
        <ul>
          <li>
              <i class="bi bi-geo-alt-fill"></i> Olarenwaju Str, Timothy Bust-Stop, Iwaya Road, Yaba, Lagos. 
          </li>
          <li>
                <i class="fa-solid fa-phone"></i> Phone:  +2348033334808. 
          </li>
          <li>
          <i class="fa-solid fa-envelope"></i> Email: mountaintopschoolz@gmail.com
          </li>
        </ul>
     </div>
    </>
   
  );
}

export default Contact;