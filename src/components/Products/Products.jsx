import ProductContainer from "../../containers/Product/ProductContainer";
import style from "./products.module.sass"


const Products = ({ productsIds }) => {
    return(
        <ul className={style.products}>
            <span className={style.title}>Товары</span>
            {productsIds.map(id => <ProductContainer key={id} productId={id}/>)}
        </ul>
    )
}

export default Products;