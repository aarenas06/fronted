import React from "react";
import './estlo.css';

const Mostrar = ({data}) => {
  const estilos={
    borderRadius:'200px',
    width: 200,
    height: 200,
  }
  
  return (
    <div className="hola">
      <center>
      <img className="hola" src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"></img>
      {/* <img style={{borderRadius:200, width:200, height:200}} src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"></img> */}
      <h2>{data.nombre}</h2>
      <h4>{data.cargo}</h4>
      sdfdzfdf
      <p>Activo</p>
      </center>
    </div>
  );
};

export default Mostrar;
