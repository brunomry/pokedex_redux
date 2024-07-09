import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Pokemones from './components/Pokemones';



function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pokemones" element={<Pokemones></Pokemones>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
