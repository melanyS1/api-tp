import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupImg from '../../assets/images/Signup-img.svg'; // Importa la imagen SVG correctamente

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registrando:', { email, username, password });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Columna del formulario */}
      <div className="flex flex-col justify-center px-8 py-12 w-full md:w-1/2 max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Te damos la bienvenida</h2>
        <p className="text-lg text-gray-500 mb-6">
          ¿Ya tenés una cuenta?{' '}
          <Link to="/login" className="text-primary underline">
            Iniciar sesión
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Usuario</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <span 
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </span>
            </div>
          </div>

          {/* Validaciones visuales de contraseña */}
          <div className="text-sm text-gray-500 space-y-1">
            <p className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
              <span>Usá 8 caracteres o más</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${/[A-Z]/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`}></span>
              <span>Una mayúscula</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${/[a-z]/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`}></span>
              <span>Una minúscula</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${/\d/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`}></span>
              <span>Un número</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'bg-green-500' : 'bg-gray-300'}`}></span>
              <span>Un caracter especial</span>
            </p>
          </div>

          {/* Checkbox para recibir emails */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="newsletter"
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
              Quiero recibir mails sobre el producto, servicios, novedades y newsletter.
            </label>
          </div>

          {/* Términos y condiciones */}
          <p className="text-sm text-gray-500">
            Al registrarte aceptás los{' '}
            <Link to="/terms" className="text-primary underline">
              Términos y condiciones
            </Link>.
          </p>

          {/* Botón de Crear cuenta */}
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg mt-4 hover:bg-gray-400 transition"
          >
            Crear cuenta
          </button>
        </form>

        {/* Enlace a Iniciar sesión */}
        <p className="mt-4 text-center text-sm text-gray-500">
          ¿Ya estás registrado?{' '}
          <Link to="/login" className="text-primary underline">
            Iniciar sesión
          </Link>
        </p>
      </div>

      {/* Columna de la imagen ilustrativa */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <img src={SignupImg} alt="Registro" className="w-2/3" />
      </div>
    </div>
  );
};

export default SignUp;