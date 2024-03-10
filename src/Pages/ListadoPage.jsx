import React , {useState} from 'react';
import Listado from '../Home/Listado';
import BasicTable from '../Components/Usuarios/TablaUsuarios';
const ListadoPage = () => {

  const [selectedUsuario, setSelectedUsuario] = useState(null);

  const [valorRespuesta, setValorRespuesta] = useState(false);

    const handleRowClick = (usuario) => {
        setSelectedUsuario(usuario);
      };

    const llamarUsuarios = (valorRespuesta) => {
        setValorRespuesta(valorRespuesta);
      };
      
    return (
        <div className='row p-3 '>
             <p style={{fontWeight:'bolder'}}>Listado general</p>

            <div className='col-12 col-md-12 col-xl-4 border rounded p-3 mt-5'>

            <Listado usuario={selectedUsuario} setValorRespuesta={setValorRespuesta} />
            </div>

            <div className=' className="col-12 col-md-12 col-xl-8 p-3 mt-5 "'>
                <BasicTable onRowClick={handleRowClick} llamarUsuarios={valorRespuesta} setValorRespuesta={setValorRespuesta}  />
                
            </div>
        </div>
    );
}

export default ListadoPage;
