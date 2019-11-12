import {FILTER_MENU, SET_MENU} from '../mutationTypes';

export default {
    [SET_MENU]: (state, menu) => {
        state.place = menu.place;
        state.categories = menu.categories;
        state.featuredItems = menu.featured;
        return state;
    },
    [FILTER_MENU]: (state, filters) => {
        state.filteredCategories = filters.categories;
        state.filteredTags = filters.tags;
    },
};
