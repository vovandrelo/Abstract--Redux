export const CART_ACTIONS = {
    ADD_PRODUCT: "cart/ADD_PRODUCT",
    REMOVE_PRODUCT: "cart/REMOVE_PRODUCT",
}

export const addProduct = (productId) => ({
    type: CART_ACTIONS.ADD_PRODUCT,
    payload: { productId }
});

export const removeProduct = (productId) => ({
    type: CART_ACTIONS.REMOVE_PRODUCT,
    payload: { productId }
});