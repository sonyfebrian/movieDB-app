
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Favorites from "./pages/Favorites"

import './App.css'



function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
