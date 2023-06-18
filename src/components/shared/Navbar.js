import React, { useContext } from "react";
import { Link } from "react-router-dom";
//icon
import shop from "../../assets/icons/shop.svg"
//context
import { CartContext } from "../../context/CartContextProvider";
const Navbar = () => {

    const {state} = useContext(CartContext);
    return (
        <div className="w-full flex justify-between py-6 px-8 md:px-20 shadow-md">
            <div>
                <ul className="flex space-x-3 md:space-x-10 font-extrabold md:font-black text-base md:text-xl">
                    <li>
                        <Link to="/Home" className="text-blue-800 hover:text-blue-600">Home</Link> 
                    </li>
                    <li>
                        <Link to="/products" className="text-blue-800 hover:text-blue-600">Products</Link>
                    </li>
                    <li>
                        <Link to="/Category/jewelery" className="text-blue-800 hover:text-blue-600">Jewelery</Link>
                    </li>
                    <li>
                        <Link to="/Category/women" className="text-blue-800 hover:text-blue-600">Women</Link>
                    </li>
                    <li>
                        <Link to="/Category/men" className="text-blue-800 hover:text-blue-600">Men</Link>
                    </li>
                    <li>
                        <Link to="/Category/electronics" className="text-blue-800 hover:text-blue-600">Electronics</Link>
                    </li>

                </ul> 
            </div>
            <div className="flex">
                <Link to="/Cart">
                    <img src={shop} alt={shop} className="w-6 md:w-8"/>
                </Link>
                <sup className=" font-bold text-base">{state.itemsCounter}</sup>
            </div>
        </div>
    );
};

export default Navbar;