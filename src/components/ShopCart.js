import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Context
import { CartContext } from "../context/CartContextProvider";
//Component
import { Cart } from "./shared/Cart";
const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);
    return (
        <div className=" w-full flex flex-col-reverse lg:flex-row h-screen justify-center items-start p-10 shadow-2xl">
            <div className=" w-full lg:w-2/4 h-3/4 flex flex-col items-center overflow-auto py-10 space-y-4">
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
    
            {
                state.itemsCounter > 0 && 
                <div className=" w-full lg:w-1/4 h-1/4 lg:h-3/4 flex flex-col justify-start font-extrabold p-6 space-y-10 shadow-lg">
                <p><span>Total Items:</span> {state.itemsCounter}</p>

                <p><span>Total Payments:</span> {state.total}</p>

                <div className=" flex justify-between">

                <button onClick={() => dispatch({type: "CHECKOUT"})}
                className="w-1/2 bg-green-500 hover:bg-green-600">Check out</button>

                <br/>

                <button onClick={() => dispatch({type: "CLEAR"})}
                className="w-1/2 bg-red-500 hover:bg-red-600">Clear</button>
                </div>
                </div>
            }
            {
                
                state.checkout && 
                <div className=" w-full lg:w-1/4 h-3/4 bg-green-500 shadow-xl p-6">
                    <h1 className="mb-10 text-white font-black text-2xl">Checked Out Successfully!</h1>
                    <Link to={"/products"} 
                    className=" text-slate-200 hover:text-white font-bold text-xl none hover:underline">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && 
                <div className=" w-full lg:w-1/4 h-3/4 bg-red-500 shadow-2xl p-6">
                    <h1 className="mb-10 text-white font-black text-2xl">Want to Buy?</h1>
                    <Link to={"/products"} 
                    className="text-slate-200 hover:text-white font-bold text-xl none hover:underline">Back to Shop</Link>
                </div>
            }            
        </div>
    );
};

export { ShopCart } 