import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const CrearProducto = () => {
  return (
    <Container>
      <h2 className="display-4 mt-5">Nuevo Producto</h2>
      <hr></hr>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej:Cafe" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej:50" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control type="text" placeholder="Ej:csaml" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria*</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Seleccione una opcion</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default CrearProducto;
