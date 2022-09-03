import { useReducer } from "react";
import ProductContext from "./ProductContext"
import productReducer from "./productReducer";

const ProductState = (props) => {

    const [state, dispatch] = useReducer(productReducer,[])

    const insertarProducto = async (product) => {
        const init = {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const url = "http://127.0.0.1:3000/api/products";
        await fetch(url,init);
        traerDatos()
    }

    const traerDatos = async () => {
        const url = "http://127.0.0.1:3000/api/products";
        const respuesta = await fetch(url);
        const productos = await respuesta.json();
        dispatch({type:"GET_PRODUCTS",payload:productos})
    }

    return (
        <ProductContext.Provider value={{state, traerDatos, insertarProducto}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState