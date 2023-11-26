import './App.css';
import BussinessList from './componentes/BussinessList';

function App() {
  return (
    <>
      <main>
        <section>
          <h6><BussinessList className='contenedor-restaurante' /></h6>
          <h6><BussinessList className='contenedor-restaurante' /></h6>
        </section>
      </main>
    </>  
  );
} 

export default App;
