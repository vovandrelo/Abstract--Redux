// <=================================================== MIDDLEWARES ===================================================> \\

// Middlewares в Redux предназначены для встраивания в приложение дополнительной логики обработки действия. Они
// представляют собой цепочку функций, которая запускается в момент передачи совершенного действия из dispatch в
// reducer (то есть при любом вызове dispatch действие сначала проходит через все middlewares и только потом
// попадает в reducer).

// Так же, в отличие от reducer-а, middleware может иметь побочные эффекты внутри, включая тайм-ауты и другую
// асинхронную логику, что позволяет использовать внутри middleware работу с асинхронным API.

// Для использования middlewares их необходимо подключить к store с помощью специальной функции: applyMiddleware

// <============================================= РЕАЛИЗАЦИЯ MIDDLEWARES ==============================================> \\

// Реализация каждой middleware представляет собой 3 вложенные функции:

// Внешняя функция по факту является самой middleware, она будет вызвана из applyMiddleware и получит объект store-API,
// содержащий функции хранилища, такие как dispatch и getState (следовательно, каждая middleware может взаимодействовать
// со store):
export default function logger(storeAPI) {
    // Средняя функция в качестве аргумента получает функцию "next", которая, по-факту является следующий middleware
    // в цепочке (или reducer-ом):
    return function wrapDispatch(next) {
        // Внутренняя функция получает в качестве аргумента совершённое действие:
        return function handleAction(action) {
            // Извлечение dispatch-а и state-а из store-API:
            const state = storeAPI.getState();
            const dispatch = storeAPI.dispatch;

            // Данная middleware выводит совершённое действие и текущее состояние:
            console.log("Совершённое действие:", action);
            console.log("Состояние на момент совершения действия:", state);
            
            // Для вызова следующей middleware(или reducer-а) необходимо вызвать функцию "next": 
            return next(action)

            // Если убрать вызов next, то все последующие middlewares, включая dispatch, вывполнены не будут
        }
    }
}

// Создание стрелочных middlewares: const logger = storeAPI => next => action => { return next(action) }

// <============================================= ЧТО УМЕЮТ MIDDLEWARES? ==============================================> \\

// Основные функции middlewares:
// - Логирование;
// - Использование асинхронного API;
// - Изменение, приостановка или отмена действия;

// Более подробно midddlewares рассмотрены в:
// https://redux.js.org/tutorials/fundamentals/part-4-store#middleware
// https://redux.js.org/understanding/history-and-design/middleware