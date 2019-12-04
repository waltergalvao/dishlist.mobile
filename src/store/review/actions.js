import {LOAD_REVIEWS, CLEAR_REVIEWS} from '../mutationTypes';

export default {
    clearReviews({commit}) {
        commit(CLEAR_REVIEWS);
    },
    fetchReviews({commit}, {dishId, page}) {
        return this._vm.$axios
            .get('/review/read.php?id=' + dishId + '&page=' + page)
            .then(response => {
                commit(LOAD_REVIEWS, response.data);
            })
            .catch(() => {
                commit(CLEAR_REVIEWS);
            });
    },
    // eslint-disable-next-line no-unused-vars
    createReview({commit}, {dishId, data}) {
        return this._vm.$axios
            .post('/review/create.php?id=' + dishId, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then(() => true)
            .catch(error => {
                console.log(error);
                return false;
            });
    },
};
