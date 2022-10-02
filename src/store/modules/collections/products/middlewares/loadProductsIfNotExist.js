import { failedLoadingProducts, PRODUCTS_ACTIONS, startLoadingProducts, successLoadingProducts } from "../actions.js";
import { selectSectionProductsIdsById } from "../../sections/selectors.js";
import { selectProductsIds } from "../selectors.js";


export const loadProductsIfNotExist = (store) => (next) => (action) => {
    if (action.type !== PRODUCTS_ACTIONS.LOAD_PRODUCTS) {
        return next(action);
    }

    const productsIds = selectSectionProductsIdsById(store.getState(), action.payload.sectionId);
    const uploadedProdsIds = selectProductsIds(store.getState());
    if (productsIds?.length === 0 || (uploadedProdsIds?.length > 0 && productsIds.every(id => uploadedProdsIds.includes(id)))) {
        return
    }

    store.dispatch(startLoadingProducts());

    fetch(`http://localhost:3001/products?sectionId=${action.payload.sectionId}`)
    .then(res => res.json())
    .then(products => store.dispatch(successLoadingProducts(products)))
    .catch(err => store.dispatch(failedLoadingProducts()))
}