import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getListvehiculos } from "../Service/vehiculosService";
import vehiculos from "./vehiculos";
import vehiculosList from "./vehiculosList";





function vehiculosPage() {  
    const [vehiculos, setvehiculos] = useState([]);
    

    
  
    useEffect(() => {    
      getListvehiculos().then(data => {
        setvehiculos(data);
      }
      );
  
    }, []);
  
    return (
      <div>
        <h2>Lista de vehiculos </h2>
        <Link to = '/createvehiculos'> Crear </Link>
        <vehiculosList>
          
          {
            vehiculos.map(vehiculos =>
              <Student key ={vehiculos.idmarca} idmarca={vehiculos.idmarca} marca={vehiculos.marca} modelo={vehiculos.modelo}  />)
            
          }
        </vehiculosList>
      </div>
    );
  }

  export default vehiculosPage ;