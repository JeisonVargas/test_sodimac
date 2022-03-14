

function Alert({ setAlert, setProduct }) {

  const handleAlert = () => {
    setAlert(false);
    setProduct({});
  }

  return (
    <div className="Alert">
      <p>No se encontraron resultados</p>
      <button onClick={handleAlert}>Nueva Búsqueda</button>
    </div>
  );
}

export default Alert;
