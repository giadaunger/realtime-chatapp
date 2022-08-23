import './App.css';

import Main from './Components/Home/Main';
import Nav from "./Components/Nav/Nav";
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Projects" element={<Projects />}/>
      </Routes>

    </Router>
  );
}

export default App;
