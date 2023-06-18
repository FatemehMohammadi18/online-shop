import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";


const getProducts = async () => {
    const Response = await axios.get(`${BASE_URL}/products`)
    return Response.data;
}

export {getProducts}