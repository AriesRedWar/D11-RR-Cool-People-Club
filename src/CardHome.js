import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardHome () {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Page on the Cool People Club</Card.Title>
        <Card.Text>
         Phillip
         <br></br>
         Tito
         <br></br>
         Shetara
         <br></br>
         Noah
         <br></br>
         Charles
         <br></br>
         Brandon
        </Card.Text>
        <Button variant="success">Meet Us</Button>
      </Card.Body>
    </Card>
  );
}