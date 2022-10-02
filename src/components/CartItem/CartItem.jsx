
import style from "./cartItem.module.sass";



const CartItem = ({ count, name }) => {
    return (
        <li className={style.item}>
            <span className={style.name}>{name}</span>
            <span className={style.count}>Кол-во: {count}</span>
        </li>
    )
}

export default CartItem;