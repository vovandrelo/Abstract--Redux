import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../store/modules/collections/products/actions";
import { selectProductsLoadingStatus } from "../../store/modules/collections/products/selectors";
import { selectSectionActive } from "../../store/modules/collections/sections/selectors";
import { selectSectionProductsIdsById } from "../../store/modules/collections/sections/selectors";
import Products from "../../components/Products/Products";
import Notify from "../../components/Notify/Notify";
import { LOADING_STATUSES } from "../../store/constants/loading-statuses";

const ProductsContainer = () => {
    console.log("RENDER = CONTAINER = PRODUCTS");
    const activeSectionId = useSelector(selectSectionActive)
    const productsIds = useSelector(state => selectSectionProductsIdsById(state, activeSectionId))
    const loadingStatus = useSelector(selectProductsLoadingStatus)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProducts(activeSectionId))
    }, [activeSectionId])

    if (loadingStatus === LOADING_STATUSES.notStarted) {
        return <Notify message={"Загрузка вот-вот начнётся!"}/>
    } else if (loadingStatus === LOADING_STATUSES.inProgress) {
        return <Notify message={"Загрузка..."}/>
    } else if (loadingStatus === LOADING_STATUSES.failed) {
        return <Notify message={"Что-то сильно пошло не так..."}/>
    }

    return (
        
        <>
            { !productsIds || productsIds.length === 0 ? null : <Products productsIds={productsIds}/> }
        </>
    )
}

export default ProductsContainer;