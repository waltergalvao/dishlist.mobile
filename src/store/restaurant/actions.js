import {SET_RESTAURANT} from '../mutationTypes';

export default {
        fetchRestaurant({commit}) {
            return this._vm.$axios.get('/restaurant.json').then(response => {
                commit(SET_RESTAURANT, response.data);
            });
    },
};
