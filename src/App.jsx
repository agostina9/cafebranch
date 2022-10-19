import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Login from './components/views/Login';
import Registro from './components/views/Registro';
function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
      <Routes>
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
        {/* <Route exact path="/menu" element={<Menu></Menu>}></Route> */}
        {/* <Route exact path="/footer" element={<Footer></Footer>}></Route> */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
