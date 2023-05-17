import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer.js";

const cart = JSON.parse(localStorage.getItem('cart'))
const initialState = {

    products: [],
    cart: cart ? cart : [],

};

const API_URL = "http://localhost:3000";

export const ProductsContext = createContext(initialState);
export const ProductsProvider = ({ children }) => {


    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getAll = async () => {
        const res = await axios.get(API_URL + "/products/getAll");
        dispatch({
            type: "GET_ALL",
            payload: res.data,
        });
        return res;
    };

    const addCart = (product) => {

        dispatch({
            type: "ADD_CART",
            payload: product,
        });
    };

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };

    return (

        <ProductsContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                getAll,
                addCart,
                clearCart
            }} >

            {children}

        </ProductsContext.Provider>
    );
}
