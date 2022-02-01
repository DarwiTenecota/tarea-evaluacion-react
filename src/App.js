import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import vehiculosPage from './vehiculos/vehiculosPage';
import vehiculosCreate from './vehiculos/vehiculosCreate';
import vehiculosUpdate from './vehiculos/vehiculosUpdate';
import Navbar from "./Component/Navbar";
import UsuarioPage from './Usuario/UsuarioPage';
function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/vehiculos" element={<vehiculoPage />} />                 
        <Route path="/createvehiculo" element={ <vehiculoCreate />   }/>   
        <Route path="/updatevehiculo/:marcaId" element={ <vehiculoUpdate />   }/>   
        <Route path="/usuario" element={<UsuarioPage />} />
      </Routes>

    </BrowserRouter>   
  );
}

export default App;
