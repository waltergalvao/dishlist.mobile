import {SET_RESTAURANT} from '../mutationTypes';

export default {
    fetchRestaurant({commit}, restaurantName) {
        return this._vm.$axios
            .get('/restaurant/read.php?name=' + restaurantName)
            .then(response => {
                commit(SET_RESTAURANT, response.data);
            })
            .catch(err => {
                commit(SET_RESTAURANT, []);
                throw err;
            });
    },
    resetRestaurantList({commit}) {
        
        commit(SET_RESTAURANT, []);
                
    },

    
};
