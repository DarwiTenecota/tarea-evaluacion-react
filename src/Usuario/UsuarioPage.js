import React, { useState, useEffect } from "react";

import UsuarioList from './UsuarioList'
import { createUsuario, getListUsuario } from '../Service/UsuarioService';
import User from "./Usuario";
import Usuario from "./Usuario";





function UsuarioPage() {  
    
  
  
  
    
  
    useEffect(() => {    
      getListUsuario().then(data => {
        setUsuario(data);
      }
      );
  
    }, []);
  
    return (
      <div>
        <h2>Usuarios </h2>
        <UsuarioList>
          
          {
            guitar.map(user =>
              <Usuario key ={usuario.id} id={usuario.id} username={usuario.username} password={usuario.password} status={usuario.status} />)
            
          }
        </UsuarioList>
      </div>
    );
  }

  export default UsuarioPage ;