import { Button, Container, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";

const Administrador = () => {
    return (
      <Container className='mainSection'>
        <div className="d-flex justify-content-between">
        <h2 className="display-4 mt-4">Productos disponibles</h2>
        <Button>Agregar</Button>
        </div>
        <hr></hr>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
     <ItemProducto></ItemProducto>
      </tbody>
    </Table>
      </Container>
    );
};

export default Administrador;