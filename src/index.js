import react from "react";
import ReactDOM from "react-dom";

// se captura a donde queremos que se nos muestre nuestro app , capturando por Id y guardandolo en una variable
const rootElement = document.getElementById("root");

// se ejecuta en react pabn ra que reconozca el root y se guarda en una sola variable
const root = ReactDOM.createRoot(rootElement);

function Saludo() {
  // se utuliza mucho mucho el tema de los true o false
  const condicional = false;

  //   esto es un objeto en react
  const user = {
    nombre: "Diego ",
    apellido: "Arenas",
  };
  //   JSON.stringify(user) -> convierte a objetos en una cadena de texto
  return (
    <div>
      <h1> {JSON.stringify(user)} </h1>
    </div>
  );
  
  //   if (condicional) {
  //     return <h1>Entra</h1>;
  //   } else {
  //     return <h1>NOOOO Entra</h1>;
  //    }
  // esta es una manera larga de poner las condicionales

  //   mejor manera
  //   return <h1>{condicional ? "entra  " : "No entra"}</h1>;

  //   con {} me interpreta valores en variables tipo para concatenar
}
root.render(
  <>
    <Saludo />
  </>
);
// render()== espera elementos hijo, espera elementos Html
