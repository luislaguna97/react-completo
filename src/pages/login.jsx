import { useState } from "react";
import Dashboard from "./dashboard";


const Login = () => {
  const[email,setEmail]= useState('')
  function cambiarEmail(evento){
    setEmail(evento.target.value)
  }
  const[password,setPassword]= useState('')
  function cambiarPassword(evento){
    setPassword(evento.target.value)
  }

  function ingreso() {
    
    if(email=='admin' && password == 'admin') {
      alert ('iniciaste..')
      setlogeado(true)
      }else{alert ('usuario o clave incorrecto')}
  }
  const [logeado,setlogeado]=useState(false)

  if(logeado) {
    return (
      <Dashboard/>
    );
  }

  
return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Correo electrónico" value={email} onChange={cambiarEmail}/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
            <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Contraseña" value={password} onChange={cambiarPassword}/>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={ingreso} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
)
};

export default Login;
