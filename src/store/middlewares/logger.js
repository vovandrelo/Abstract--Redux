export const loggerMiddleware = (store) => (next) => (action) => {
    console.log("ACTION ##", action, "##", store.getState());
    return next(action);
};
  