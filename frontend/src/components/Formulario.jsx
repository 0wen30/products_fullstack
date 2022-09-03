import { useContext, useRef } from "react";
import ProductContext from "./productsContext/ProductContext";

const Formulario = () => {

    const datosdelcontexto = useContext(ProductContext)

    const name = useRef()
    const quantity = useRef()
    const price = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {name:name.current.value,quantity:quantity.current.value,price:price.current.value}
        datosdelcontexto.insertarProducto(product);
    }

    return (
        <form style={{ display: "grid", width: "300px" }} onSubmit={handleSubmit}>
            <label htmlFor="name">name:</label>
            <input type="text" id="name" ref={name} />
            <label htmlFor="quantity">quantity:</label>
            <input type="text" id="quantity" ref={quantity} />
            <label htmlFor="price">price:</label>
            <input type="text" id="price" ref={price} />
            <button type="submit">Agregar Producto</button>
        </form>
    )
}

export default Formulario