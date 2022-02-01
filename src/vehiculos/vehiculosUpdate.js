import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdStudent,updateStudent } from '../Service/vehiculosService'
import './vehiculos.css'

function vehiculosPage() {

  const { vehiculosId } = useParams();
  const [vehiculos, setvehiculos] = useState({idmarca:'', marca:'',modelo:'',Año_de_origen:'', Año_de_fabrica:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updatevehiculos(vehiculos);
  }
  const onChange = (event) =>{
    if(event.target.name==='idmarca')
      setvehiculos({...vehiculos,idmarca:event.target.value})
    if(event.target.name==='marca')
      setStudent({...vehiculos,idmarca:event.target.value})    
    if(event.target.name==='modelo')    
      setStudent({...vehiculos,modelo:event.target.value})
    if(event.target.name==='Año_de_fabrica')
      setStudent({...vehiculos,Año_de_fabrica:event.target.value})
      if(event.target.name==='Año_de_origen')
      setStudent({...vehiculos,Año_de_origen:event.target.value})
  }

  useEffect(() => {    
    findByIdvehiculos(vehiculosId).then(data => {
      setvehiculos(data);  
    }
    );
  }, [vehiculosId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actulizacion de los Registros de los vehiculos</h2>

      <input 
          className="formUpdateInput"
            name="idmarca"
            placeholder="idmarca" 
            value={vehiculos.idmarca}
            onChange={onChange}

          />
          <input 
          className="formUpdateInput"
            name="marca"
            placeholder="marca" 
            value={vehiculos.marca}
            onChange={onChange}

          />

          <input 
           className="formUpdateInput"
           placeholder="modelo" 
            name="modelo"
            value={vehiculos.modelo}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Año_de_origen"
            name="Año_de_origen"
            value={vehiculos.Año_de_origen}
            onChange={onChange}
          />

        <input 
          className="formUpdateInput"
            name="Año_de_fabrica"
            placeholder="Año_de_fabrica" 
            value={vehiculos.Año_de_fabrica}
            onChange={onChange}

          />


        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>

    </div>
  );
}

export default vehiculosPage;