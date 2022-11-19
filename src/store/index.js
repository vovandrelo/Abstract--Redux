import { applyMiddleware, createStore, combineReducers } from "redux";

// <================================================= ИМПОРТ DEVTOOLS =================================================> \\

// Redux DevTools - дополнение, которое показывает историю изменения ГС в течение работы приложения. Пользовательский
// интерфейс Redux DevTools доступен в качестве расширения браузера для Chrome.

// Импорт функции, которая позволит подключить devTools:
import { composeWithDevTools } from "@redux-devtools/extension";

// <================================================== ИМПОРТ THUNK ===================================================> \\

import thunk from "redux-thunk";

// <================================================ ИМПОРТ REDUCER-ОВ ================================================> \\
import { sectionsReducer } from "./modules/collections/sections/reducer.js";
import { productsReducer } from "./modules/collections/products/reducer.js";
import { cartReducer } from "./modules/cart/reducer.js";

// <======================================= ИМПОРТ ПОЛЬЗОВАТЕЛЬСКИХ MIDDLEWARES =======================================> \\
import logger from "./middlewares/logger.js";

// import { loadSectionsIfNotExist } from "./modules/collections/sections/middlewares/fetchSections.js";
// import { loadProductsIfNotExist } from "./modules/collections/products/middlewares/fetchProductsById.js";

// <========================================== СОЗДАНИЕ ГЛОБАЛЬНОГО СОСТОЯНИЯ =========================================> \\

// Большие приложения React подразумевают под собой разбиение глобального состояния не некоторые логические подсостояния
// (модули). Каждое такое состояние имеет свой reducer, а так же свой набор обслуживаемых действий. Для объединения
// модулей в один общий reducer используется функция combineReducers:
const rootReducer = combineReducers({
    sections: sectionsReducer,
    products: productsReducer,
    cart: cartReducer,
});

// Конфигурация Stor-а происходит с помощью функции createStore:
export const store = createStore(
    rootReducer,                                            // Указание основного reducer-а;
    composeWithDevTools(applyMiddleware(thunk, logger)),    // Подключение devTools и middlewares (включаях thunk-и);
);