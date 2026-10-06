import Navbar from './componentes/Navbar';
import Pizza from './componentes/Pizza';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* <Home /> */}
      {/* <Registro /> */}
      {/* <InicioSesion /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;
