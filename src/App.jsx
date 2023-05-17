import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";



import Home from './components/Home/Home'
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from './components/Login/Login'
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart"





function App() {


  return (
    <>

      <BrowserRouter>
        <UserProvider>
        <ProductsProvider>
        <OrdersProvider> 
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ropa" element={<Products />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bag" element={<Cart />} />
          </Routes>
          < Footer />
          </OrdersProvider> 
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
