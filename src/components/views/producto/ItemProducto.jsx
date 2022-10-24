import { Button } from "react-bootstrap";
import { borrarProductoAPI } from "../../helpers/queries";
import {Swal} from "sweetalert2";
const ItemProducto = ({producto}) => {
    const borrarProducto = ()=>{
        Swal.fire({
            title: 'Estas seguro de eliminar el prodcto?',
            text: "No se puede revertir este paso",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                borrarProductoAPI(producto.id).then((respuesta)=>{
                    if(respuesta.status === 200 ){
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        );
                    }else{
                        Swal.fire(
                          'Error',
                          'Your file has been deleted.',
                          'error'
                        );
                    }
                    })
            }
          })
    }
    return (
       
              <tr>
          <td>{producto.id}</td>
          <td>{producto.nombreProducto}</td>
          <td>{producto.precio}</td>
          <td>{producto.imagen}</td>
          <td>{producto.categoria}</td>
          <td><Button variant='warning'>Editar</Button>
          <Button variant='danger' onClick={borrarProducto}>Borrar</Button></td>

        </tr> 
     
    );
};

export default ItemProducto;