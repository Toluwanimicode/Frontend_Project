import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCom({title,imgUrl, text }) {

  return (
    <Card className='card' style={{ width: '30rem',  boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title className='title'>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardCom;