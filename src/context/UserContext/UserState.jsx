import { createContext, useReducer  } from "react";
import  UserReducer  from "./UserReducer.js";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const initialState= {
    token: token ? token : null,
    user: null,
    message: null,
}

const API_URL = "http://localhost:3000";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const register = async (user) => {
      const res = await axios.post(API_URL + "/clients/createClient", user);
      dispatch({
        type: 'REGISTER',
        payload: res.data,
      });
      if (res.data) {
        localStorage.setItem('token', JSON.stringify(res.data.token));
      }
    };
   
   
    const login = async (user) => {
      const res = await axios.post(API_URL + "/clients/login", user);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
    };
    return (
        <UserContext.Provider
          value={{
            token: state.token,
            user: state.user,
            message: state.message,
            register,
            login,
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };
    

