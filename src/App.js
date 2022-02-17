import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/index.';
import Pantry from './Pages/Pantry';
import Header from './Components/Header';
import Recipes from './Pages/Recipes';

function App() {
  

  return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/recipe" element={<Recipes />} />
            {/* <Route path='*' element={<Error />} /> */}
          </Routes>
        </BrowserRouter>

  );
}

export default App;
