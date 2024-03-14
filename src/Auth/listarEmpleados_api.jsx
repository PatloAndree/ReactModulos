
import axios from 'axios';
import { API } from './Axios/axios_api';


const listarUsuarios = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(`${API}usuarios/listar`);
        //  "http://192.168.18.30/Backend/controllers/usuarioController.php"
        // "http://localhost/newVersion/public/getUsuarios"
      //   "http://127.0.0.1:8000/api/usuarios/listar"
      // );

    
    return { success: true, data: response.data };
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      return { success: false, error: "Usuario o contraseña inválidos" };

      }
      
  };

export default listarUsuarios;
