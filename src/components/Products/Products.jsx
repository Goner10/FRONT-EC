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
    <img className="img-product" src="https://c8.alamy.com/compes/2ac04en/milan-italia-19-de-septiembre-de-2019-el-hombre-con-rojo-chaqueta-de-dril-louis-vuitton-supremo-antes-de-fendi-fashion-show-la-semana-de-la-moda-de-milan-street-style-2ac04en.jpg" alt="" />
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