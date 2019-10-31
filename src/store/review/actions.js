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
                console.log('deu load')
            });
    },
    createReview({commit}, {dishId, data}) {
        console.log(commit);

        return this._vm.$axios
            .post('/review/create.php?id=' + dishId, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then(response => {
                console.log(response);
                return true;
            })
            .catch(error => {
                console.log(error);
                return false;
            });
    },
};
