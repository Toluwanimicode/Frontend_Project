import Card from 'react-bootstrap/Card';
import "./Card2.css"

function Card2({Title, Text, Subtitle}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='text-shadeofpurple text-xl font-semibold'>{Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Subtitle}</Card.Subtitle>
        <Card.Text>{Text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Card2;