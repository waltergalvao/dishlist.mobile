import {SET_REVIEWS} from '../mutationTypes';

export default {
    [SET_REVIEWS]: (state, reviewsPagination) => {
        state.reviewsPagination = reviewsPagination;
        return state;
    },
};
