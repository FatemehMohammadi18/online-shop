import React, {useContext} from "react";
import { Link } from "react-router-dom";
//icon
import trash from "../../assets/icons/trash.svg";
//function
import { shorten, isInCart, quantityCount } from "../../helper/function";
//Context
import { CartContext } from "../../context/CartContextProvider";

const CategoryProductCart = ({product}) => {
    const {state, dispatch} = useContext(CartContext);
    console.log({product})
    return (
        <div className=" w-72 h-96 bg-white flex flex-col justify-between items-center cursor-pointer
         shadow-md hover:shadow-lg shadow-gray-800 hover:shadow-gray-900 m-4 ">
            <div className="w-full h-1/2 flex justify-center">
            <img src={product.image} alt={product.id} className="w-1/2 p-6" />
            </div>
            <div className=" w-full h-1/2 flex flex-col space-y-4 pt-6 text-center font-bold text-base">
            <h3>{shorten(product.title)}</h3>
            <p className=" text-blue-900 text-xl">$ {product.price}</p>
            <div className=" pt-1">
                <Link to={`/products/${product.id}`}> 
                    <p className="mb-1 text-black hover:text-blue-600 none hover:underline">Details</p></Link>
                <div className="flex justify-evenly p-2 font-extrabold text-lg text-white px-4">
                    
                    {
                        quantityCount(state, product.id) > 1 && 
                        <button onClick={() => dispatch({type: "DECREASE", payload: product})}
                        className=" w-1/2 bg-red-500 hover:bg-red-600">-</button>
                    }
                    {
                        quantityCount(state, product.id) === 1 && 
                        <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: product})}
                        className=" w-1/2 bg-gray-700 hover:bg-gray-800 flex justify-center items-center">
                        <img src={trash} alt="trash" className="w-5"/>
                        </button>
                    }
                    {
                        isInCart(state, product.id) ?
                        <button onClick={() => dispatch({type: "INCREASE", payload: product})}
                        className=" w-1/2 bg-green-500 hover:bg-green-600">+</button> :

                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})}
                        className="w-full bg-blue-600 hover:bg-blue-700 py-1 font-bold">ADD to Cart</button>
                    }
                    
                </div>
            </div>
            </div>
            
        </div>
    )
}

export {CategoryProductCart}


