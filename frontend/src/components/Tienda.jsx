import { useContext } from "react";
import { useEffect } from "react"
import ProductContext from "./productsContext/ProductContext";

const Tienda = () => {

    const datosdelcontexto = useContext(ProductContext)

    useEffect(() => {
        datosdelcontexto.traerDatos();
    },[datosdelcontexto.state]);

    return (
        <div style={{display:"grid",width:"300px"}}>
            {
                datosdelcontexto.state.map((product)=>(
                    <div key={product._id}>
                        <p>{product.quantity} | {product.name} | ${product.price===undefined&&"0.00"}</p>
                    </div>
                ))
            } 
        </div>
    )
}

export default Tienda