
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { selectCartItemCountById } from "../../store/modules/cart/selectors";
import { selectProductNameById } from "../../store/modules/collections/products/selectors";

const CartItemContainer = ({ productId }) => {
    console.log("RENDER = CONTAINER = CART-ITEM");
    const productName = useSelector(state => selectProductNameById(state, productId))
    const productCount = useSelector(state => selectCartItemCountById(state, productId));

    return(
        <CartItem name={productName} count={productCount}/>
    )
}

export default CartItemContainer;