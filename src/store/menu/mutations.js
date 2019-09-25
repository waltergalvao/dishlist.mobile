import { SET_MENU } from "../mutationTypes";

export default {
    [SET_MENU]: (state, menu) => {
        state.menu = menu;
        return state;
    }
};
