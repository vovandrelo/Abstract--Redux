export const SECTIONS_ACTIONS = {
    LOAD_SECTIONS: "sections/LOAD_SECTIONS",
    START_LOADING: "sections/START_LOADING",
    FAILED_LOADING: "sections/FAILED_LOADING",
    SUCCESS_LOADING: "sections/SUCCESS_LOADING",
    CHANGE_ACTIVE_SECTION: "sections/CHANGE_ACTIVE_SECTION",
}

export const loadSections = () => ({
    type: SECTIONS_ACTIONS.LOAD_SECTIONS,
});

export const startLoadingSections = () => ({
    type: SECTIONS_ACTIONS.START_LOADING,
});

export const successLoadingSections = (sections) => ({
    type: SECTIONS_ACTIONS.SUCCESS_LOADING,
    payload: { sections },
});

export const failedLoadingSections = () => ({
    type: SECTIONS_ACTIONS.FAILED_LOADING,
});

export const changeActiveSection = (sectionId) => ({
    type: SECTIONS_ACTIONS.CHANGE_ACTIVE_SECTION,
    payload: { sectionId },
});