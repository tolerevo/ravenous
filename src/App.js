import './App.css';
import BussinessList from './componentes/BussinessList';

function App() {
  return (
    <div className='contenedor-principal'>
      <main className='contenedor-componente '>
        <BussinessList className='contenedor-restaurante' />
        <BussinessList className='contenedor-restaurante' />
      </main>
    </div>
  );
} 

export default App;
