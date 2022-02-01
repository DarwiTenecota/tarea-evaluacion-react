import React, { useState } from "react";
import { createvehiculos } from '../Service/vehiculosService'

function vehiculosCreate() {
  const [idmarca, setidmarca] = useState('');
  const [marca, setmarca] = useState('');
  const [modelo, setmodelo] = useState('');
  const [Año_de_origen, setAño_de_origen] = useState('');
  const [Año_de_fabrica, setAño_de_fabrica] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
      idmarca:idmarca,
      marca: marca,
      modelo:modelo,
      Año_de_origen: Año_de_origen,
      Año_de_fabrica: Año_de_fabrica,
      
    }
    createStudent(objeto)

  }

  const onChange = (event) =>{
    if(event.target.name==='idmarca')
    setCedula(event.target.value)
    if(event.target.name==='marca')
    {
    setNombre(event.target.value)
    }
    if(event.target.name==='modelo')
    setApellido(event.target.value)

    if(event.target.name==='Año_de_origen')
    setCorreo(event.target.value)

    if(event.target.name==='Año_de_fabrica')
    setTelefono(event.target.value)
  }

  return (
    <div>
      <h2>Crear marcas</h2>
      <form onSubmit={onSubmit}>
      <label>
          idmarca
          <input 
            name="idmarca"
            value={marca}
            onChange={onChange}
          />
        </label>
        <label>
          marca
          <input 
            name="marca"
            value={marca}
            onChange={onChange}
          />
        </label>
        <label>
          modelo
          <input 
            name="modelo"
            value={modelo}
            onChange={onChange}
          />
        </label>
        <label>
          Año_de_origen
          <input 
            name="Año_de_origen"
            value={Año_de_origen}
            onChange={onChange}
          />
        </label>
        <label>
          Año_de_fabrica
          <input 
            name="Año_de_fabrica"
            value={Año_de_fabrica}
            onChange={onChange}
          />
        </label>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default vehiculosCreate;