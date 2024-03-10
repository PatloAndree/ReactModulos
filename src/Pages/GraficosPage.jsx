import React, {useState} from 'react';
import BarChartExample from '../Components/Ventas/GraficoVentas';
import SelectOptions from '../Components/Ventas/SelectOptions';

const GraficosPage = () => {

    const [ventasFiltradas, setVentasFiltradas] = useState([]);


    return (
        <div className='row w-100 p-3'>
            <p style={{fontWeight:'bolder'}}>Gráficos generales</p>

            <SelectOptions setVentasFiltradas={setVentasFiltradas} />
            
            <BarChartExample ventasFiltradas={ventasFiltradas}/>
            
        </div>
    );
}

export default GraficosPage;
