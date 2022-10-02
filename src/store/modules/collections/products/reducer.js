import { LOADING_STATUSES } from "../../../constants/loading-statuses.js";
import { PRODUCTS_ACTIONS } from "./actions.js";


const initialState = {
    entities: {},
    ids: [],
    loadingStatus: LOADING_STATUSES.notStarted,
}


export const productsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case PRODUCTS_ACTIONS.START_LOADING:
            return {
                ...state,
                loadingStatus: LOADING_STATUSES.inProgress,
            }
        case PRODUCTS_ACTIONS.FAILED_LOADING:
            return {
                ...state,
                loadingStatus: LOADING_STATUSES.failed,
            }
        case PRODUCTS_ACTIONS.SUCCESS_LOADING:
            const products = action.payload.products;
            return {
                entities: products.reduce((acc, product) => {
                    acc[product.id] = product;
                    return acc;
                }, {...state.entities}),
                //ids: products.map(product => product.id),
                ids: [].concat(...state.ids, products.map(({ id }) => id)),
                loadingStatus: LOADING_STATUSES.success,
            }
        default:
            return state;
    }
}