import { useSelector } from "react-redux";
import { selectCartItemsIds } from "../../store/modules/cart/selectors";
import Cart from "../../components/Cart/Cart";
import Notify from "../../components/Notify/Notify";

const CartContainer = () => {
    console.log("RENDER = CONTAINER = CART");
    const productsIds = useSelector(selectCartItemsIds);

    if (!productsIds) {
        return <h1>Корзина пуста!</h1>
    }

    return(
        <>
            {productsIds.length === 0
                ? <Notify message={"Корзина пока что пуста!"}/>
                : <Cart productsIds={productsIds}/>
            }
        </>
    )
}

export default CartContainer;