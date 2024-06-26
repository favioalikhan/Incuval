import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImage from '../assets/Cover.png';
import icon from '../assets/INCUBADORA.png';
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de inicio de sesión

};
const handleRegister = () => {
    setShowModal(true);
  }; 

  const handleRoleSelection = (role: string) => {
    // Aquí puedes manejar la lógica de registro según el rol seleccionado
    if (role === 'Emprendedor') {
      navigate('/registro/emprendedor');
    } else if (role === 'Mentor') {
      navigate('/registro/mentor');
    }
    console.log(`Registrando como ${role}`);
    setShowModal(false);
  };   

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };
  
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="flex flex-col md:flex-row bg-white h-screen">
      {/* Formulario de inicio de sesión */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8 items-center">
         
          <img src={icon} className="w-50 h-20 text-indigo-600" alt="Logo" />
      
          </div>
          <h2 className="text-3xl font-bold text-navy-blue mb-6">Bienvenido</h2>
          <p className="mb-6 text-black">
            ¿Listo para emprender? <span onClick={handleRegister} className="text-navy-blue hover:underline cursor-pointer">Regístrate en Incuval Ventures</span>
          </p>

                {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center text-navy-blue">Registrarse como</h2>
                    <div className="flex space-x-4">
                    <button
                        onClick={() => handleRoleSelection('Emprendedor')}
                        className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Emprendedor
                    </button>
                    <button
                        onClick={() => handleRoleSelection('Mentor')}
                        className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Mentor
                    </button>
                    </div>
                </div>
                </div>
            )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-navy-blue mb-2">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="nombre@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-navy-blue mb-2">Contraseña</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="***************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-black">Recordarme</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Iniciar sesión
            </button>
          </form>
          <div className="mt-6">
            
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-raven-black">O continuar con </span>
                  </div>
                </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex justify-center items-center px-4 py-2 border border-navy-blue rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-slate-200">
                <img className="h-5 w-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
                Google
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-navy-blue rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-slate-200">
                <img className="h-5 w-5 mr-2" src="https://www.svgrepo.com/show/448239/microsoft.svg" alt="Microsoft logo" />
                Outlook
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Imagen de fondo */}
      <div className="hidden md:block w-1/2 bg-gray-200">
        <img
          className="object-cover w-full h-full"
          src={coverImage} 
          alt="Incuval"
        />
      </div>
    </div>
  );
};

export default Login;