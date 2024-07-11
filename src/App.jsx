import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Pokemones from './components/Pokemones';
import DetallePokemon from './components/DetallePokemon';



function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pokemones" element={<Pokemones></Pokemones>}></Route>
        <Route path="/pokemon/:name" element={<DetallePokemon></DetallePokemon>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
