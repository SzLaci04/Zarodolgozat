import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Route, Routes } from "react-router-dom";
import Bemutatkozas from "./pages/Bemutatkozas";
import Kepesrendeles from "./pages/Kepesrendeles";
import Szovegesrendeles from "./pages/Szovegesrendeles";
import Navigation from './Layout/Navigation';
import Informaciok from './Layout/Informaciok';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Bemutatkozas/>}/>
        <Route path="/kepesrendeles" element={<Kepesrendeles/>}/>
        <Route path="/szovegesrendeles" element={<Szovegesrendeles/>}/>
      </Routes>
      <Informaciok/>
    </div>
  );
}

export default App;
