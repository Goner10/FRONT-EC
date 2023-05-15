import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import { UserProvider } from "./context/userContext/userState";

import Home from './components/Home/Home'
import Header from "./components/Header/Header";
import Ropa from './components/Ropa/Ropa'
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from './components/Login/Login'


function App() {


  return (
    <>

      <BrowserRouter>
        <Header />
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ropa" element={<Ropa />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          < Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
