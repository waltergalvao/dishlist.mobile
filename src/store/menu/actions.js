import {SET_MENU} from '../mutationTypes';
//import restaurants from '../../boot/axios';

export default {
    fetchMenu({commit},params) {
        return this._vm.$axios.get('http://dishlist.wmdd.ca/api/menu/read.php?id='+ params.restaurantId).then(response => {
            commit(SET_MENU, response.data);
        }).catch((err) => {
            console.log(err);
        });
    },

    SearchMenu({commit},params) {
        return this._vm.$axios.get('http://dishlist.wmdd.ca/api/menu/read.php?id='+ params.restaurantId).then(response => {
            commit(SET_MENU, response.data);
        }).catch((err) => {
            console.log(err);
        });
    },

};
