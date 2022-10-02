import { applyMiddleware, createStore } from "redux";
import { sectionsReducer } from "./modules/collections/sections/reducer.js";
import { loadSectionsIfNotExist } from "./modules/collections/sections/middlewares/loadSectionsIfNotExist.js";
import { loggerMiddleware } from "./middlewares/logger.js";
import { productsReducer } from "./modules/collections/products/reducer.js";
import { loadProductsIfNotExist } from "./modules/collections/products/middlewares/loadProductsIfNotExist.js";
import { cartReducer } from "./modules/cart/reducer.js";
import { createLogger } from 'redux-logger'

const logger = createLogger({
    diff: true,
});

const rootInitialState = {
    collections: {}
};

const rootReducer = (state = rootInitialState, action) => {
    return {
        collections: {
            sections: sectionsReducer(state.collections.sections, action),
            products: productsReducer(state.collections.products, action),
        },
        cart: cartReducer(state.cart, action),
    }
}

export const store = createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware,         // пользовательский метод для вывода действий
        loadSectionsIfNotExist,
        loadProductsIfNotExist,
        //logger,                   // Библиотека redux-logger для просмотра актуального состояния 
    )
);