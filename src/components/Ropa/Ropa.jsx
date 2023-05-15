
import React, { useEffect, useState } from 'react';

import axios from "axios";

const Ropa = () => {
    const [ropa, setRopa] = useState([]);

    const getProducts=async()=>{
        const res = await axios.get("http://localhost:3000/products/getAll")
        setRopa(res.data)
    }
    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div>{ropa.map(ropa => {
            return (
                <div>
                    <p>{ropa.name} {ropa.price}$</p>
                </div>
            )
        })}       </div>
    )



}

export default Ropa;




