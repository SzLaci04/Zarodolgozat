import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Route, Routes } from "react-router-dom";
import Bemutatkozas from "./pages/Bemutatkozas";
import Rendeles from "./pages/Rendeles";
import Termekek from "./pages/Termekek";
import Navigation from './Layout/Navigation';
import Informaciok from './Layout/Informaciok';

function App() {

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Bemutatkozas/>}/>
        <Route path="/rendeles" element={<Rendeles/>}/>
        <Route path="/termekek" element={<Termekek/>}/>
      </Routes>
      <Informaciok/>
    </div>
  );
}

export default App;
