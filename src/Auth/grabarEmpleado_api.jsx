import axios from 'axios';


const grabarUsuario = async (usuario) => {

      await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        // url: "http://192.168.18.30/Backend/controllers/usuarioController.php",
        // url: "http://localhost/newVersion/public/agregarUsuario",
        url: "http://127.0.0.1:8000/api/usuarios/agregarUsuario",

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