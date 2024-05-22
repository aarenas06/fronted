import Mostrar from "./componentes/TablaIngreso";

export const App = () => {
  const user = {
    nombre: "Diego ",
    apellido: "Arenas",
    cargo: "Dev",
  };
  // JSON.stringify(user); ->Se Utiliza mucho para poder imprimir objetos comom Text

  return (
    <>
      <Mostrar data={user} />
    </>
  );
};
