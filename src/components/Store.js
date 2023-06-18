import React, { useContext } from "react";
//Components
import { Product } from "./shared/Product";
//Context
import { ProductContext } from "../context/ProductsContextProvider";
const Store = () => {
    const products = useContext(ProductContext)
    console.log(products)
    return (
        <div className=" flex flex-wrap justify-center items-center p-6 bg-blue-500">
            {
                products.map(product => <Product key={product.id} 
                                            productData={product}  />)
            }
        </div>
    );
}

export {Store}