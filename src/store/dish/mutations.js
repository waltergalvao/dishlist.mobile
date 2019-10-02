import {SET_DISH} from '../mutationTypes';

export default {
    [SET_DISH]: (state, dish) => {
        state.dish = dish;
        return state;
    },
};
