import {SET_REVIEWS} from '../mutationTypes';

export default {
    fetchReviews({commit}, {dishId, page}) {
        return this._vm.$axios
            .get('/review/read.php?id=' + dishId + '&page=' + page)
            .then(response => {
                commit(SET_REVIEWS, response.data);
            });
    },
};
