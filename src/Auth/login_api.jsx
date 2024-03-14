// LoginService.js
import axios from 'axios';
import { API } from './Axios/axios_api';

const validarLogin = async (email, contrasena) => {
  try {
    const response = await axios.post(
      `${API}validarLogin`,
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
