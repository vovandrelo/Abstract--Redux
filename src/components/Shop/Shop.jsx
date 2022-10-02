import TabsContainer from "../../containers/Tabs/TabsContainer";
import ProductsContainer from "../../containers/Products/ProductsContainer";
import CartContainer from "../../containers/Cart/CartContainer";
import style from "./shop.module.sass";


const Shop = () => {
    return (
        <div className={style.container}>
            <TabsContainer/>
            <div className={style.content}>
                <ProductsContainer/>
                <CartContainer/>
            </div>
        </div>
    )
}

export default Shop;