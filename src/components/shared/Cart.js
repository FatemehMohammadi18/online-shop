import React, { useContext } from "react";
//icon
import trash from "../../assets/icons/trash.svg"
//Context 
import { CartContext } from "../../context/CartContextProvider";
// Functions
import { shorten } from "../../helper/function";
const Cart = (props) => {
    
    const {dispatch} = useContext(CartContext)
    const {image, title, price, quantity} = props.data
    return (
        <div className="w-full lg:w-5/6 h-1/5 flex p-6 lg:p-0 justify-evenly items-center shadow-md font-black">
            <div className=" w-1/6 flex justify-center">
            <img src={image} alt={title} className="w-14 lg:w-20 p-3"/>
            </div>
            <div className=" w-1/6">
                <h3 className="text-xs lg:text-lg">{shorten(title)}</h3>
            </div>    
            <div className=" w-1/6">    
                <p className=" text-blue-900 text-sm lg:text-xl">{price}</p>
            </div>
            <div className=" w-1/6">
                <span className="text-sm lg:text-xl">{quantity}</span>
            </div>
            <div className="w-2/6 lg:w-1/6 flex justify-evenly p-2 font-extrabold text-sm lg:text-lg text-white px-4">
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}
                    className=" w-1/2 bg-red-500 hover:bg-red-600">-</button> :
                    
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}
                    className=" w-1/2 bg-gray-700 hover:bg-gray-800 flex justify-center items-center">
                        <img src={trash} alt="trash" className=" w-3 lg:w-5"/>
                    </button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}
                className=" w-1/2 bg-green-500 hover:bg-green-600">+</button>
            </div>
        </div>
    )
}

export {Cart}