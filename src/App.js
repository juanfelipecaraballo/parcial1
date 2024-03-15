import logo from './logo.svg';
import './App.css';
import Listado from "./components/listado";
import Vehiculo from "./components/vehiculo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/vehiculos" element={<Listado />} />
         <Route path="/vehiculo/:vehiculoId" element={<Vehiculo />} />
       </Routes>
     </BrowserRouter>
    </div>
    
    
  );
}

export default App;
