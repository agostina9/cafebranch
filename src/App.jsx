import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Login from './components/views/Login';
import Registro from './components/views/Registro';
function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrar/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/administrar/editar/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/detalle"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        {/* <Route exact path="/menu" element={<Menu></Menu>}></Route> */}
        {/* <Route exact path="/footer" element={<Footer></Footer>}></Route> */}
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
           <Route
          exact
          path="/login"
          element={<Login></Login>}
        ></Route>
        <Route
          exact
          path="/registro"
          element={<Registro></Registro>}
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

