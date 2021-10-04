import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        {/* <Header></Header> */}
        <Routes></Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
