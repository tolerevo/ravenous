import './App.css';
import Bussiness from './componentes/Bussines';

function App() {
  return (
    <div className="App">
      <ul className='contenedor-principal'>
        <li>
          <Bussiness />
          <Bussiness />
        </li>
      </ul>
    </div>
  );
}

export default App;
