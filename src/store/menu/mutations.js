import {SET_MENU} from '../mutationTypes';

export default {
    [SET_MENU]: (state, menu) => {
        state.place = menu.place;
        state.categories = menu.categories;
        return state;
    },
};
