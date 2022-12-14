# Redux


## Основные функции приложения



## Redux
Redux позволяет создавать в приложении некое глобальное состояние и обращаться к нему из любого компонента как для извлечения каких-либо данных, так и для их изменения. Причём, перерендеру будут подвергаться только те компоненты, которые
как-либо зависят от изменённых данных.

### Изменение глобального состояния
Изменение глобального состояния происходит на основании некоторых правил, который называются действиями (actions). Чтобы изменить глобальное состояние необходимо выбрать нужный action и передать его в dispatch, который, в свою очередь, отправит указанное действие в reducer. Reducer представляет собой механизм, имеющий информацию о всевозможных действиях над ГС и реализующий изменение ГС.

То есть, изменение ГС происходит в 6 этапов:
- Разработчиком выбирается небходимое действие;
- Выбранное действие передаётся в dispatch;
- Dispatch передаёт действие в reducer;
- Reducer идентифицирует действие;
- После идентификации reducer необходимым образом изменяет состояние;
- Происходит перерендер необходимых компонентов; 

### Получение доступа к конкретной части ГС
Получение доступа к конкретной части ГС осуществляется с помощью selector-а - функции, которая извлекает из ГС необходимые данные и выполняет подписку на их изменение. То есть, компонент будет перерендериваться каждый раз, когда данные, получаемые с помощью selector-а из ГС, будут как-либо изменены.

### API
- Для объединения нескольких reducer-ов используется функция combineReducers.
- Создание глобального состояния происходит с помощью функции createStore.
- Для предоставления всем компонентам доступа к ГС их необходимо расположить внутри компонента Provider.
- Для изменения ГС внутри компонента необходимо получить dispatch, который извлекается с помощью хука useDispatch().
- Для получения какой-либо части ГС внутри компонента используется хук useSelector, в качестве аргумента которого принимается функция-selector, извлекающая из ГС необходимую часть. 


## Запуск приложения
Для запуска приложения в терминале необходимо выполнить команду: npm run start