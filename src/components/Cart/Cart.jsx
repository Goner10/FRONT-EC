import React, { useContext} from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { OrdersContext } from '../../context/OrdersContext/OrdersState';

import './Cart.scss';
import { Empty, notification } from "antd";


const Cart = () => {
    const { cart, clearCart }= useContext(ProductsContext);
    const { createOrder }= useContext(OrdersContext);

    const orderFinish = ()=>{
        createOrder(cart);
        setTimeout(() => {
            clearCart();
        }, 500);
        notification.success({
            message: "Order nailed down, fella!"
        });
    }

    if(cart.length < 1){
        return <Empty  className="empty" description={<span>No products</span>} />;
    }
  return (
    <div className='cart-container'>{cart.map(product =>{
        return(
            
            
            <div className="cart-item">
          <p>{product.name}</p>
          <p>{product.price}$</p>
            </div>
            
        );
    })} 
      <div className="cart-buttons">
    <button className="clear-button" onClick={()=>clearCart()}>Clear Cart</button>
    <button className="clear-button" onClick={() =>orderFinish()}
     >
    Create Order</button>
    </div>
    </div>
  );
};

export default Cart