import React from 'react';
import Listado from '../Home/Listado';

const ListadoPage = () => {
    return (
        <div className='row w-100 p-5'>
            <p style={{fontWeight:'bolder'}}>Listado general</p>
            <Listado/>
        </div>
    );
}

export default ListadoPage;
