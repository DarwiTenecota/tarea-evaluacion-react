const urlCrud = 'http://localhost:3001';

const getListUsuario = async () => {
    const response = await fetch(`${urlCrud}/usuario`);    
    const data = await response.json();
    console.log(data)
    return  data;
}



const createUsuario = async (user) => {
    
    const resp = await fetch(`${urlCrud}/usuario`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}





export {
    getListUsuario,
    createUsuario,
    
    
}   