import CartItemContainer from "../../containers/CartItem/CartItemContainer";

import style from "./cart.module.sass";

const Cart = ({ productsIds }) => {
    return(
        <ul className={style.cart}>
            <span className={style.title}>Корзина</span>
            {productsIds.map(productId => <CartItemContainer key={productId} productId={productId}/>)}
        </ul>
    )
}

export default Cart;