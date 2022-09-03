import Formulario from "./components/Formulario"
import ProductContexto from "./components/productsContext/productState"
import Tienda from "./components/Tienda"

const App = () => {

    return (
        <div style={{width:"min-content",margin:"auto"}}>
            <ProductContexto>
                <Formulario></Formulario>
                <br />
                <hr />
                <br />
                <Tienda></Tienda>
            </ProductContexto>
        </div>
    )
}

export default App