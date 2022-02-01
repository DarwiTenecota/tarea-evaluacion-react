const urlCrud = 'http://localhost:3001';

const getListvehiculos= async () => {
    const response = await fetch(`${urlCrud}/vehiculos`);    
    const data = await response.json();
    console.log(data)
    return  data;
}
const findByIdmarca = async (marcaId) => {
    const response = await fetch(`${urlCrud}/vehiculos/${marcaId}`);  
    const data = await response.json();     
    return  data;
}

const createvehiculos = async (vehiculos) => {
    
    const resp = await fetch(`${urlCrud}/vehiculos`, {
        method: 'POST',
        body: JSON.stringify(vehiculos),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}
const updatevehiculos = async (vehiculos) => {
  
    const resp = await fetch(`${urlCrud}/vehiculos`, {
        method: 'PUT',
        body: JSON.stringify(vehiculos),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}



export {
    getListvehiculos,
    createvehiculos,
    updatevehiculos,
    findByIdvehiculos
}   