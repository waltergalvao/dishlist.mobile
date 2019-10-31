import {CLEAR_REVIEWS, LOAD_REVIEWS} from '../mutationTypes';

export default {
    [LOAD_REVIEWS]: (state, data) => {
        state.pagination = {
            current_page: data.current_page,
            total_pages: data.total_pages,
            total_reviews: data.total_reviews,
        };
        state.reviews = state.reviews.concat(data.reviews);

        return state;
    },
    [CLEAR_REVIEWS]: state => {
        state.pagination = {
            current_page: 1,
            total_pages: null,
            total_reviews: null,
        };

        state.reviews = [];
    },
};
