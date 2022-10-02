

export const selectSectionsModuleState = state => state.collections.sections;
export const selectSectionsIds = state => selectSectionsModuleState(state)?.ids;
export const selectSectionNameById = (state, sectionId) => selectSectionsModuleState(state)?.entities[sectionId]?.name;
export const selectSectionActive = state => selectSectionsModuleState(state)?.activeSectionId;
export const selectSectionProductsIdsById = (state, sectionId) => selectSectionsModuleState(state)?.entities[sectionId]?.products;
export const selectSectionsLoadingStatus = state => selectSectionsModuleState(state)?.loadingStatus;