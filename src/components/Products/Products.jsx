import React, { useContext, useEffect } from "react";

import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import './Products.scss'


const Products = () => {
const { getAll, products, addCart } = useContext(ProductsContext);

useEffect(() => {
getAll();
}, []);

const product = products.map((product) => {
return (
    <>

<div className="product-item" key={product._id}>
   <span>{product.name} </span>
<span>{product.price.toFixed(2)} $</span>
<button onClick={ ()=>addCart(product)}>Add cart</button>
</div>

</>
);

});

return <div className="products-container fade-in">{product}</div>;

};

export default Products;