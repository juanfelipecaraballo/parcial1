import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Listado(){

    const[vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:3001/cars";
        fetch(URL)
        .then((data) => data.json())
        .then((data) => {
            setVehiculos(data);
        });
    }, []);

    return (

        <div className="container">
            <table className="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Linea</th>
                    <th scope="col">Modelo</th>
                </tr>
            </thead>

            <tbody>
                {vehiculos.map((vehiculo) => (
                <tr key={vehiculo.id}>
                <th scope="row">{vehiculo.id}</th>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.linea}</td>
                <td>
                <Link to={`/vehiculo/${vehiculo.id}`} vehiculo={vehiculo}>{vehiculo.modelo}</Link>
                </td>
                </tr>
                 ))}

            </tbody>

            </table>
        </div>



    )


}
export default Listado;