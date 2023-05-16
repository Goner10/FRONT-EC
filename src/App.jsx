import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import { UserProvider } from "./context/UserContext/UserState";

import Home from './components/Home/Home'
import Header from "./components/Header/Header";
import Ropa from './components/Ropa/Ropa'
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from './components/Login/Login'
import Profile from "./components/Profile/Profile";


function App() {


  return (
    <>

      <BrowserRouter>
        <UserProvider>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ropa" element={<Ropa />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          < Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
