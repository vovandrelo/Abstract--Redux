

import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../../store/modules/collections/products/selectors";
import Product from "../../components/Product/Product";
import { addProduct, removeProduct } from "../../store/modules/cart/actions.js";

const ProductContainer = ({ productId }) => {
    console.log("RENDER = CONTAINER = PRODUCT");
    const product = useSelector(state => selectProductById(state, productId))

    const dispatch = useDispatch();
    const onAdd = () => dispatch(addProduct(productId))
    const onRemove = () => dispatch(removeProduct(productId))

    return(
        <>
            {product ? <Product product={product} onAdd={onAdd} onRemove={onRemove}/> : null}
        </>
    )
}

export default ProductContainer;