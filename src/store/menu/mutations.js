import { SET_MENU } from "../mutationTypes";

export default {
    [SET_MENU]: (state, menu) => {
        state.place = menu.place;
        state.items = menu.items;
        return state;
    }
};
