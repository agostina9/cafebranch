import { Container, Col, Row, Card } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container>
      <Card className="mt-3">
        <Row className="no-gutters ">
          <Col md={5} lg={5}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="img"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>Brownie</Card.Title>
              <hr></hr>
              <Card.Text className="text-white badge bg-success">Dulce</Card.Text>
              <Card.Text>Precio: $300</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
