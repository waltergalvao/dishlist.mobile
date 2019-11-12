import {FILTER_MENU, RESET_MENU, SET_MENU} from '../mutationTypes';

export default {
    fetchMenu({commit}, restaurantId) {
        return this._vm.$axios
            .get('/menu/read.php?id=' + restaurantId)
            .then(response => {
                commit(SET_MENU, response.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    resetMenu({commit}) {
        commit(RESET_MENU);
    },
    filterMenu({commit}, filters) {
        commit(FILTER_MENU, filters);
    },
};
