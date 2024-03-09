import React from 'react';
import Listado from '../Home/Listado';
import Inicio from '../Home/Inicio';

const ListadoPage = () => {
    return (
        <div className='row w-100 p-5'>
            {/* <p style={{fontWeight:'bolder'}}>Listado general</p>
            <Listado/> */}
             <p style={{fontWeight:'bolder'}}>Listado general</p>
            <Inicio/>
        </div>
    );
}

export default ListadoPage;
