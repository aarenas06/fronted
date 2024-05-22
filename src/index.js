import react from "react";
import ReactDOM from "react-dom";
import Mostrar from "./componentes/TablaIngreso";
import { App } from "./app";

// se captura a donde queremos que se nos muestre nuestro app , capturando por Id y guardandolo en una variable
const rootElement = document.getElementById("root");

// se ejecuta en react pabn ra que reconozca el root y se guarda en una sola variable
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
// render()== espera elementos hijo, espera elementos Html
