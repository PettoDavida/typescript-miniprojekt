import '../App.css';
import MainPage from '../pages/mainpage';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from '../pages/About';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
          <Route path="/" element = { <MainPage/> }/>
          <Route path ="/about" element = { <About/> }/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
