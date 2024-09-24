export default function Dashboard(props) {
    return (
      <div>
        <h1>Bienvenido al Dashboard</h1>
        <p>Solo puedes ver esto si has iniciado sesión.</p>
        <button onClick={props.handleLogout} className="bg-red-500 text-white p-2 rounded">Cerrar Sesión</button>
      </div>
    );
  }