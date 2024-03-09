import React from 'react';
import Inicio from '../Home/Inicio';
import Cards from '../Components/Cards/Cards';
import GraficoInicio from '../Components/GraficoInicio/GraficoInicio';


const Escritorio = () => {
    return (
        <div className='row w-100 p-5'>
            <div>

           <Cards/>
            </div>
            
            <div className='row mt-5'>
           <GraficoInicio/>

            </div>

        </div>
    );
}

export default Escritorio;
