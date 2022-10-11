//archivo que nos sirve para hacer las consultas a la api (json server)

const URL = ' http://localhost:3004/productos'

//tipos de peticiones
//peticion GET q trae todos los productos o un producto
// peticion POST crear un producto login
//peticion DELETE para borrar
//peticion PUT pide modificar un producto


 const consultarAPI = async() =>{
   try{
const respuesta = await fetch(URL);
console.log(respuesta)
const listaProductos = await respuesta.json()
// console.log(listaProductos)
return listaProductos;
   }catch(error){
console.log(error);
   }
 }