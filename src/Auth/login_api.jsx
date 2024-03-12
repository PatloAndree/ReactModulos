// LoginService.js

import axios from 'axios';

const validarLogin = async (email, contrasena) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/validarLogin",
      {
        email: email,
        password: contrasena,
      }
    );
    
    if (response.data.success === 1) {
      localStorage.setItem(
        "usuario_sesion",
        JSON.stringify(response.data.user)
      );
      return { success: true, data: response.data };
    } else {
      return { success: false, error: "Usuario o contraseña inválidos" };
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return { success: false, error: "Error al iniciar sesión" };
  }
};

export default validarLogin;
