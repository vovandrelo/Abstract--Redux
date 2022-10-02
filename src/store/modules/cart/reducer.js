import { CART_ACTIONS } from "./actions.js";

const initialState = {}

export const cartReducer = (state = initialState, action) => {
    const productId = action.payload?.productId;
    const productCount = state[productId]?.count;
    switch (action?.type) {
        case CART_ACTIONS.ADD_PRODUCT:
            return {
                ...state,
                [productId]: {
                    count: (state[productId]?.count || 0) + 1
                }
            }
        case CART_ACTIONS.REMOVE_PRODUCT:
            if (!productCount) {
                return state;
            } else if (productCount === 1) {
                const newState = {};
                for (const id in state) {
                    if (id !== productId) {
                        newState[id] = state[id];
                    }
                }
                return newState;
            } else {
                return {
                    ...state,
                    [productId]: {
                        count: productCount - 1
                    }
                }
            }
        default:
            return state;
    }
}