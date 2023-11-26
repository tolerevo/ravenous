import './App.css';
import Bussiness from './componentes/Bussines';

function App(props) {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Bussiness name={props.Bussiness} />
      </div>
    </div>
  );
}

export default App;
