import React , {useState,useEffect,useCallback} from 'react';
import Ventas from '../Components/Ventas/Ventas';
import SelectOptions from '../Components/Ventas/SelectOptions';
import { listarVentas } from '../Auth/Ventas/ventas_api';
import TablaVentas from '../Components/Ventas/Table';

const ReportesPage = () => {

    const [ventasFiltradas, setVentasFiltradas] = useState([]);

    const fetchData = useCallback(async () => {
        try {
          const data = await listarVentas();
          setVentasFiltradas(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }, []);
    
      useEffect(() => {
        fetchData();
      }, [fetchData]);

    return (
        <div className='row w-100 p-5'>
            <p style={{fontWeight:'bolder'}}>Reportes generales</p>

            <SelectOptions setVentasFiltradas={setVentasFiltradas} />
            {/* <Ventas ventasFiltradas={ventasFiltradas} /> */}
            <TablaVentas ventasFiltradas={ventasFiltradas} />

            {/* {Array.isArray(ventasFiltradas) && ventasFiltradas.map((venta) => (
            // Código para renderizar cada venta aquí
            ))} */}
        </div>
    );
}

export default ReportesPage;
