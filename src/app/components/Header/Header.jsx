import { Link } from 'react-router-dom';

const Header = ({ onRegisterClick }) => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-8 bg-white">
      <div className="text-2xl font-bold">Split the bill</div>
      <nav className="flex space-x-4">
        <Link to="/login" className="text-lg text-gray-900">Iniciar sesión</Link>
        <button
          onClick={onRegisterClick}
          className="border border-gray-900 text-lg py-1 px-4 rounded-lg"
        >
          Registrarse
        </button>
      </nav>
    </header>
  );
};

export default Header;