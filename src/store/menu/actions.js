import {SET_MENU} from '../mutationTypes';

export default {
    fetchMenu({commit}, restaurantId) {
        return this._vm.$axios
            .get('http://dishlist.wmdd.ca/api/menu/read.php?id=' + restaurantId)
            .then(response => {
                commit(SET_MENU, response.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    resetMenu({commit}) {
        commit(SET_MENU, {
            place: {},
            categories: [],
            featuredItems: [],
        });
    },
};
