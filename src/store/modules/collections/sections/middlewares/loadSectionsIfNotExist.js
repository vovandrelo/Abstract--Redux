
import { failedLoadingSections, SECTIONS_ACTIONS, startLoadingSections, successLoadingSections } from "../actions.js";
import { selectSectionsIds } from "../selectors.js";

export const loadSectionsIfNotExist = (store) => (next) => (action) => {
    if (action.type !== SECTIONS_ACTIONS.LOAD_SECTIONS) {
        return next(action);
    }

    if (selectSectionsIds(store.getState())?.length > 0) {
        return;
    }

    store.dispatch(startLoadingSections());

    fetch("http://localhost:3001/sections")
    .then(res => res.json())
    .then(sections => store.dispatch(successLoadingSections(sections)))
    .catch(err => store.dispatch(failedLoadingSections()));
}