import React, { useEffect, useState } from "react";
import { listarProductos } from "../../Auth/Productos/productos_api";

const BarraBusquedaClientes = ({ onAgregarFila }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [initialData, setInitialData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [itemsSeleccionados, setIemsSeleccionados] = useState([]);
  const [datosTabla, setDatosTabla] = useState([]);
  const [totalGeneral, setTotalGeneral] = useState(0);
  const [totalConImpuesto, setTotalConImpuesto] = useState(0);

  useEffect(() => {
    if (initialData.length === 0) {
      listarProductosGeneral();
    } else {
      setSuggestions(initialData);
    }
    if (datosTabla != "") {
      onAgregarFila(datosTabla);
    }


  }, [datosTabla, initialData, itemsSeleccionados]);


  const listarProductosGeneral = async () => {
    try {
      const cargarDatos = await listarProductos();
      if (cargarDatos && cargarDatos.data) {
        // Crear un nuevo arreglo con solo los campos deseados
        const datosFiltrados = cargarDatos.data.map((item) => ({
          abreviacion: item.abreviacion,
          id: item.id,
          nombre: item.nombre,
          precio_venta: item.precio_venta,
          stock: item.stock,
        }));
        setInitialData(datosFiltrados);
      } else {
        setInitialData([]);
      }
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  const handleCambio = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Filtrar sugerencias basadas en el término de búsqueda
    const filteredSuggestions = initialData.filter((item) =>
      item.nombre.toLowerCase().includes(value.toLowerCase())
    );
    
    setSuggestions(filteredSuggestions);
  };

  const handleSugerencia = (suggestion) => {
    setSearchTerm(suggestion.nombre);
    setSuggestions([]);
    setIemsSeleccionados((prevState) => [
      ...prevState,
      { ...suggestion, cantidad: 1 },
    ]);
    setSearchTerm("");

    const datosFila = {
     id: suggestion.id,
     nombre: suggestion.nombre,
     stock: suggestion.stock - 1,
     precio_venta: suggestion.precio_venta,  
     cantidad: 1,
     nuevoStock:0,
     total: suggestion.precio_venta,
     montoTotalVenta:0,
   };  
   setDatosTabla((prevState) => [...prevState, datosFila]);
    // if (datosTabla.length > 0) {

    // }else{
    //   const igv = (suggestion.precio_venta * 0.18).toFixed(2);
    //    const datosFila = {
    //     id: suggestion.id,
    //     nombre: suggestion.nombre,
    //     stock: suggestion.stock - 1,
    //     precio_venta: suggestion.precio_venta,
    //     cantidad: 1,
    //     nuevoStock:0,
    //     total: suggestion.precio_venta,
    //     montoTotalVenta: (
    //       parseFloat(suggestion.precio_venta) + parseFloat(igv)
    //     ).toFixed(2),
    //   };  

    //   setDatosTabla((prevState) => [...prevState, datosFila]);
    // }

   
  };


  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...itemsSeleccionados];
    if (quantity <= itemsSeleccionados[index].stock) {
      // console.log( updatedItems)
      updatedItems[index].cantidad = quantity;
      updatedItems[index].total = calcularTotalProducto(updatedItems[index]);
      updatedItems[index].nuevoStock = updatedItems[index].stock - quantity;
      //   updatedItems[index].igv = (calcularTotalProducto() * 0.18).toFixed(2);
      updatedItems[index].montoTotalVenta = calcularTotalConImpuesto();

      if (index !== 0) {
        setIemsSeleccionados(updatedItems);
      }
      //   console.log("Actualizando");
      setDatosTabla(updatedItems);
    }
  };


  const handleDeleteItem = (index) => {
    const updatedItems = [...itemsSeleccionados];
    updatedItems.splice(index, 1); // Elimina el elemento en el índice especificado
    setIemsSeleccionados(updatedItems);
    setDatosTabla(updatedItems);
  };

  // Función para calcular el total de un producto
  const calcularTotalProducto = (item) => {
    return item.precio_venta * item.cantidad;
  };

  // Función para calcular el total de todos los productos seleccionados
  const calcularTotalGeneral = () => {
    let total2 = 0;
    itemsSeleccionados.forEach((item) => {
      total2 += calcularTotalProducto(item);
    });
    return total2;
  };

  const calcularTotalConImpuesto = () => {
    const total = calcularTotalGeneral();
    const impuesto = total * 0.18; // 18% de impuesto adicional
    return (total + impuesto).toFixed(2);

  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={handleCambio}
        placeholder="Buscar..."
      />
      {searchTerm && (
        <ul className="list-group">
          {suggestions.map((suggestion, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={() => handleSugerencia(suggestion)}
            >
              {suggestion.nombre}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-3">
        <p>Productos:</p>
        <table className="table">
          <thead>
            <tr className="">
              <th scope="col" className="text-right"></th>
              <th className="text-right">Nombre</th>
              <th scope="col" className="text-center">
                Stock
              </th>
              <th scope="col" className="text-center">
                Precio
              </th>
              <th scope="col" className="text-center">
                Cantidad
              </th>
              <th scope="col" className="text-center">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {itemsSeleccionados.map((item, index) => (
              <tr key={index}>
                <td>
                  <i
                    className="bx bx-trash text-danger fs-5"
                    onClick={() => handleDeleteItem(index)}
                  ></i>
                </td>
                <td className="text-right">
                  <span>{item.abreviacion}</span>
                </td>
                <td>
                  <p>{item.stock - item.cantidad} U</p>
                </td>
                <td>S/.{item.precio_venta}</td>
                <td className="w-25">
                  <input
                    type="number"
                    className="form-control form-control-sm mx-auto w-75"
                    value={item.cantidad}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    disabled={item.stock === 0}
                    min={0}
                  />
                </td>
                <td>S/.{calcularTotalProducto(item)}.0</td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className="text-right">
                Pre Total:
              </td>
              <td className="text-center">S/.{calcularTotalGeneral()}</td>
            </tr>
            <tr>
              <td colSpan="5" className="text-right">
                IGV:
              </td>
              <td className="text-center">
                S/.{(calcularTotalGeneral() * 0.18).toFixed(2)}
              </td>
            </tr>

            <tr>
              <td colSpan="5" className="text-center fw-bold">
                Total:
              </td>
              <td className="text-center">
                <p className="fw-bold">S/.{calcularTotalConImpuesto()}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarraBusquedaClientes;
