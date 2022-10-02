export const PRODUCTS_ACTIONS = {
    LOAD_PRODUCTS: "products/LOAD_PRODUCTS",
    START_LOADING: "products/START_LOADING",
    FAILED_LOADING: "products/FAILED_LOADING",
    SUCCESS_LOADING: "products/SUCCESS_LOADING",
}

export const loadProducts = (sectionId) => ({
    type: PRODUCTS_ACTIONS.LOAD_PRODUCTS,
    payload: { sectionId },
});

export const startLoadingProducts = () => ({
    type: PRODUCTS_ACTIONS.START_LOADING, 
});

export const failedLoadingProducts = () => ({
    type: PRODUCTS_ACTIONS.FAILED_LOADING,
})

export const successLoadingProducts = (products) => ({
    type: PRODUCTS_ACTIONS.SUCCESS_LOADING,
    payload: { products },
})