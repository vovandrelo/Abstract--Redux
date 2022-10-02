import style from "./product.module.sass";



const Product = ({ product, onAdd, onRemove }) => {
    return (
        <li className={style.item}>
            <span className={style.name}>{product.name}</span>
            <span className={style.price}>Цена: {product.price}₽</span>
            <button onClick={onRemove} className={style.btn}>-</button>
            <button onClick={onAdd} className={style.btn}>+</button>
        </li>
    )
}

export default Product;