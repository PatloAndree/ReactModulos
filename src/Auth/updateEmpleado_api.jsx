import axios from 'axios';


const editarUsuario = async (usuario) => {
  
    await axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      // url: `http://192.168.18.30/Backend/controllers/usuarioController.php?id=${idUsuario}}`,
      // url: `http://localhost/newVersion/public/editarUsuario`,
      url: `http://127.0.0.1:8000/api/usuarios/editarUsuario`,

      data: usuario,
    })
      .then(async function (d) {
        console.log("Registro aceptado");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  export default editarUsuario;