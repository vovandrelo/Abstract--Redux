

export const selectProductsModuleState = state => state.collections.products;
export const selectProductsIds = state => selectProductsModuleState(state)?.ids;
export const selectProductById = (state, productId) => selectProductsModuleState(state).entities[productId];
export const selectProductNameById = (state, productId) => selectProductById(state, productId).name;
export const selectProductsLoadingStatus = state => selectProductsModuleState(state)?.loadingStatus;