import { LOADING_STATUSES } from "../../../constants/loading-statuses.js";
import { SECTIONS_ACTIONS } from "./actions.js";


const initialState = {
    entities: {},
    ids: [],
    activeSectionId: "",
    loadingStatus: LOADING_STATUSES.notStarted,
}

export const sectionsReducer = (state = initialState, action) => {
    switch(action?.type) {
        case SECTIONS_ACTIONS.START_LOADING:
            return {
                ...state,
                loadingStatus: LOADING_STATUSES.inProgress,
            }
        case SECTIONS_ACTIONS.FAILED_LOADING:
            return {
                ...state,
                loadingStatus: LOADING_STATUSES.failed,
            }
        case SECTIONS_ACTIONS.SUCCESS_LOADING:
            const sections = action.payload.sections;
            return {
                entities: sections.reduce((acc, section) => {
                    acc[section.id] = section;
                    return acc;
                }, {}),
                ids: sections.map(section => section.id),
                activeSectionId: sections[0].id,
                loadingStatus: LOADING_STATUSES.success,
            }
        case SECTIONS_ACTIONS.CHANGE_ACTIVE_SECTION:
            const sectionId = action.payload.sectionId;
            return {
                ...state,
                activeSectionId: sectionId,
            }
        default:
            return state;
    }
}