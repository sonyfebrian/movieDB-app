
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Navbar';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Favorites from "./pages/Favorites"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'



function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
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
