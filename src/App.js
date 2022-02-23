import logo from './img/logo.svg';
import './App.css';

function App() {
    const message = '¡Hola Mundo!';
    const urlPIC = 'https://i.ibb.co/HH9yRts/2.jpg';
    const footer = <footer>
        <p>&copy; 2022 Todos los derechos reservados</p>
    </footer>;
    return (
        <div className='container'>
            <h1>{message}</h1>
            <img className='logo' src={logo} alt="" />
            <img className='pic' src={urlPIC} alt="" />
            {footer}
        </div>
    );
}

export default App;