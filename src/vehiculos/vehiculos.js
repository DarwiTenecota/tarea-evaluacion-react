import "./vehiculos.css";

function vehiculos (props){
    return(
        <div className="caja">
           
            <h3 className="cajaColor1"> {props.idmarca} </h3>
            <p className="cajaColor2">{props.marca}</p>
            <p className="cajaColor2">{props.modelo}</p>
            <p className="cajaColor2">{props.Pais_de_origen}</p>
            <p className="cajaColor2">{props.Año_de_origen}</p>
            <p className="cajaColor2">{props.Cilindraje}</p>
            
           
        </div>
    )
}
export default vehiculos;