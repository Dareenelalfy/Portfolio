
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Projects from "./components/Projects/Projects"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Projects/>
     <Footer/>
    
    </div>
  );
}

export default App;
