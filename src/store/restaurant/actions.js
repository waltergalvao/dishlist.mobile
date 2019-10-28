import {SET_RESTAURANT} from '../mutationTypes';

export default {
    fetchRestaurant({commit}, params) {
        return this._vm.$axios
            .get(
                'http://dishlist.wmdd.ca/api/restaurant/read.php?name=' +
                    params.restaurantName,
            )
            .then(response => {
                console.log(response.data);
                commit(SET_RESTAURANT, response.data);
            })
            .catch(err => {
                console.log(err);
                commit(SET_RESTAURANT, []);
            });
    },
};
