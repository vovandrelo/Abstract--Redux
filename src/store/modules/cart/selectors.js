export const selectCartModuleState = (state) => state.cart;
export const selectCartItemsIds = (state) => Object.keys(selectCartModuleState(state));
export const selectCartItemCountById = (state, itemId) => selectCartModuleState(state)[itemId]?.count;