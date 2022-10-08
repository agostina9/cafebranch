import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";


const inicio = () => {
    return (
        <Container>
            <h1 className="text-center mt-5 display-3">Bienvenidos</h1>
            <hr></hr>
            <Row>
                <CardProducto></CardProducto>
            </Row>

        </Container>
       
    );
};

export default inicio;