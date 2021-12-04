
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Componente from './Componentes/Componente/Componente';
import NavBar from './Componentes/NavBar/NavBar';
import Carousel from './Componentes/Carousel/Carousel'
import Card from './Componentes/Card/Card'


function App() {
  return (
    <div className="body">
      <NavBar />
      <div className="container">

        <div className="mt-1 p-5 bg-dark text-white rounded ">
          <h1>Thomás Enrique - Portafolios</h1>
          <p>Presentando mis habilidades profesionales</p>
        </div>

        <div className="row" style={{ marginTop: "1rem" }}>
          <div className="col-4">
            <Card visible={true} />
          </div>
          <div className="col-8">asdaczxcz</div>
        </div>

        <Carousel visible={false} />
        <Componente visible={false} propiedad={'Variable enviada desde el padre al componente'} />

        <a target="_blank" href="https://thomasenriqueportafolio.000webhostapp.com/">
          <button classNameName="btn btn-primary" > boton</button>
        </a>

      </div>

    </div>
  );
}

export default App;
