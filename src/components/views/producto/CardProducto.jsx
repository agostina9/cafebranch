import {Button, Card} from 'react-bootstrap';

const CardProducto = () => {
    return (
        <Card style={{ width: '18rem' }} className='my-3'>
        <Card.Img variant="top" src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Brownie</Card.Title>
          <Card.Text>
            Precio: $400
          </Card.Text>
          <Button variant="danger">Ver mas</Button>
        </Card.Body>
      </Card>
    );
};

export default CardProducto;