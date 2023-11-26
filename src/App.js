import './App.css';
import BussinessList from './componentes/BussinessList';

function App() {
  return (
    <App>
      <main>
        <ul>
          <li><BussinessList className='contenedor-restaurante' /></li>
          <li><BussinessList className='contenedor-restaurante' /></li>
        </ul>
      </main>
    </App>
    
  );
} 

export default App;
