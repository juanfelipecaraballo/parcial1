import Card from "react-bootstrap/Card";

function Vehiculo(props){
    console.log(props)
    return(
        <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={vehiculo.imagen}
       alt={vehiculo.marca}
     />
     <Card.Body>
       <Card.Title>
           {vehiculo.marca+ " "+vehiculo.linea}
         
       </Card.Title>
       <Card.Text>{vehiculo.modelo+"\n"+vehiculo.kilometraje }</Card.Text>
     </Card.Body>
   </Card>
    )
}
export default Vehiculo;