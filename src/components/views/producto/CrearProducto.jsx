import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearProductoAPI } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      nombreProducto: "",
      precio: 0,
      imagen: "",
      categoria: "",
    },
  });
  //inicializar useNavigate
  const navegacion = useNavigate()

  const onSubmit = (datos) => {
    console.log(datos);
    //enviar los datos a la api
    crearProductoAPI(datos).then((respuesta)=>{
      if(respuesta.status === 201){
        //el producto se creo
        Swal.fire('Producto creado', 'El producto fue creado correctamente')
      reset()
      //redireccionar
      navegacion('/administrador')
      }else{
        //no se creo
        Swal.fire('Ha ocurrido un error', 'El producto no fue creado correctamente')
      }
    })
    console.log("desde funcion submit");
  };

  return (
    <Container>
      <h2 className="display-4 mt-5">Nuevo Producto</h2>
      <hr></hr>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej:Cafe"
            {...register("nombreProducto", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo dos caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej:50"
            {...register("precio", {
              required: "El precio es unvalor requerido",
              min: {
                value: 1,
                message: "el precio como minimo debe ser 1",
              },
              max: {
                value: 10000,
                message: "el precio como max debe ser 10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej:csaml"
            {...register("imagen", {
              required: "La url de la img es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {" "}
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
            aria-label="Default select example"
          >
            <option>Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida Fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {" "}
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default CrearProducto;
