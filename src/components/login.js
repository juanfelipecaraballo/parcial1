import { useHistory } from 'react-router-dom';
function Login(){

    const [postData, setPostData] = useState({
        login: '',
        password: ''
      });



      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('http://localhost:3001/login/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          });
    
          if (response.ok) {
            console.log('Solicitud POST exitosa');
            history.push('/vehiculos');
           
          } else {
            console.error('Error al realizar la solicitud POST');
          }
        } catch (error) {
          console.error('Error al realizar la solicitud POST:', error);
        }
      };  

    return(
        <div className="container">
        <form onSubmit={handleSubmit}>
            <label for="input1">Nombre de usuario:</label>
            <input type="text" id="input1" name="input1" value={postData.login}/>
            <br/>
            <label for="input2">Contraseña:</label>
            <input type="text" id="input2" name="input2" value={postData.pass}/>
            <br/>
            <button type="button" id="button1">Ingresar</button>
            <button type="button" id="button2">Cancelar</button>
        </form>
        
      
        </div>
        
    )
}
export default Login;