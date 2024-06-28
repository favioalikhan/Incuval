import React, { useState } from 'react';
import coverImage from '../assets/Cover.png';

interface RegisterProps {
  type: 'emprendedor' | 'mentor';
} 

interface RegisterResponse {
  id: number;
  username: string;
  email: string;
  user_type: string;
  paternal_last_name: string;
  maternal_last_name: string;
  phone: string;
  gender: string;
  date_of_birth: string;
  agree_terms: boolean;
  receive_updates: boolean;
}


const Register: React.FC<RegisterProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [paternalLastName, setPaternalLastName] = useState('');
  const [maternalLastName, setMaternalLastName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState(''); 
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const registerUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            user_name: userName,
            paternal_last_name: paternalLastName,
            maternal_last_name: maternalLastName,
            password,
            phone,
            gender,
            date_of_birth: dateOfBirth,
            receive_updates: receiveUpdates,
            user_type: type,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: RegisterResponse = await response.json() as RegisterResponse;
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    registerUser().catch(error => console.error('Error in registerUser:', error));
  };


  return (
    <div className="flex flex-col md:flex-row bg-white h-screen">
      {/* Formulario de registro */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6">
          {type === 'emprendedor' ? 'Conviértete en emprendedor' : 'Conviértete en mentor'}
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
             <div>
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
            
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-navy-blue mb-2">Nombres</label>
                <input
                  type="text"
                  id="userName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g. Pepito Juancho"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                  <label htmlFor="paternalLastName" className="block text-sm font-medium text-navy-blue mb-2">Apellido Paterno</label>
                  <input
                    type="text"
                    id="paternalLastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="e.g. Pérez"
                    value={paternalLastName}
                    onChange={(e) => setPaternalLastName(e.target.value)}
                    required
                  />
              </div>

              <div>
                  <label htmlFor="maternalLastName" className="block text-sm font-medium text-navy-blue mb-2">Apellido Materno</label>
                  <input
                    type="text"
                    id="maternalLastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="e.g. García"
                    value={maternalLastName}
                    onChange={(e) => setMaternalLastName(e.target.value)}
                    required
                  />
              </div>
            
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                  <label htmlFor="password" className="block text-sm font-medium text-navy-blue mb-2">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="***************"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-blue mb-2">Celular</label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="+51 "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-navy-blue mb-2">Género</label>
                <select
                  id="gender"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-navy-blue mb-2">Fecha de nacimiento</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
            </div>
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
          <div className="mt-6 mb-4">
            <div className="flex items-start mb-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 mr-2"
              />
              <label htmlFor="agreeTerms" className="text-sm">
              Al registrarse, está creando una cuenta en la plataforma y acepta los <a href="#" className="text-blue-500 hover:underline">Términos de uso</a> y <a href="#" className="text-blue-500 hover:underline">Política de privacidad</a>.
              </label>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="receiveUpdates"
                checked={receiveUpdates}
                onChange={(e) => setReceiveUpdates(e.target.checked)}
                className="mt-1 mr-2"
              />
              <label htmlFor="receiveUpdates" className="text-sm">
              Enviar un correo electrónico sobre los nuevos eventos.
              </label>
            </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-navy-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Siguiente
        </button>
          </form>
        </div>
      </div>
      
      {/* Imagen o ilustración */}
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

export default Register;