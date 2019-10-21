import {SET_RESTAURANT} from '../mutationTypes';

export default {
    [SET_RESTAURANT]: (state, restaurant) => {
        state.restaurant = restaurant;
        return state;
    },
};
