import logo from './logo.svg';
import { Navbar } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <navbarBrand href="/" >Ristorante Con Fusion</navbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
