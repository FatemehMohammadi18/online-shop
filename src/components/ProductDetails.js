import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState()
    useEffect (() => {
        const getProduct = async () => {
            const BaseUrl = "https://fakestoreapi.com/products"
            const url = BaseUrl.concat(`/${id}`);
            const response = await axios.get(url);
            setProduct(response.data)
        };
        getProduct()
    }, [id])

        try {
        return(
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-2/3 flex flex-col lg:flex-row bg-white mt-28 lg:mt-0 shadow-lg">
                    <div className=" w-full lg:w-1/4 flex justify-center p-20">
                <img src={product.image} alt={product.title} className=" w-44"/>
                    </div>
                <div className="flex flex-col items-start w-full lg:w-2/3 p-10 space-y-4 lg:space-y-16">
                    <h1 className="font-black text-base lg:text-xl">{product.title}</h1>
                    <p className="font-medium text-justify p-1 lg:p-2">{product.description}</p>
                    <p className="font-bold"><span>Category:  </span>{product.category}</p>
                    <div className=" w-full flex justify-between px-2 lg:px-10">
                        <span className=" font-black text-xl text-blue-700">$ {product.price}</span>
                        <Link to="/product" className=" font-extrabold none hover:underline text-black hover:text-blue-700"><p>Back to shop</p></Link>
                    </div>
                </div>
            </div>
            </div>
        )}
        catch {
            <h2>Loading</h2>
        }
}

export {ProductDetails}