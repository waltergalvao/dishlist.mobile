import {SET_MENU} from '../mutationTypes';
//import restaurants from '../../boot/axios';

export default {
    fetchMenu({commit}) {
        return this._vm.$axios.get('/menu.json').then(response => {
            commit(SET_MENU, response.data);
        });
    },

    SearchMenu({commit},params) {
        return this._vm.$axios.get('http://dishlist.wmdd.ca/api/menu/read.php?id='+ params.restaurantId).then(response => {
            // console.log(response.data);
            commit(SET_MENU, response.data);
        }).catch((err) => {
            console.log(err);
        });
    },

//     fetchRestaurant({commit},params) {
            
//         return this._vm.$axios.get('http://dishlist.wmdd.ca/api/restaurant/read.php?name='+ params.restaurantName).then(response => {
//            // return this._vm.$axios.get('/restaurant.json').then(response => {
                
//             console.log(response.data);
//             commit(SET_RESTAURANT, response.data);
//         });
// },
};
