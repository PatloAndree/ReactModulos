import axios from 'axios';
import { API } from './Axios/axios_api';

const grabarUsuario = async (usuario) => {
      await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        // url: "http://192.168.18.30/Backend/controllers/usuarioController.php",
        // url: "http://localhost/newVersion/public/agregarUsuario",
        url:`${API}usuarios/agregarUsuario`,

        data: usuario,
      })
        .then(async function (d) {
          console.log("Registro aceptado");

        })
        .catch(function (error) {
          console.log("Registro rechazadao");

        });
  
  };


  export default grabarUsuario;