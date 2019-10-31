import {SET_AUTHENTICATED, SET_NAVIGATION_DRAWER} from '../mutationTypes';
import Auth from './Auth';
let authURL = process.env.AUTH_URL;

export default {
    doLogin({commit}, user) {
        return this._vm.$axios.post(`${authURL}/login`, user).then(response => {
            if (response.data) {
                commit(SET_AUTHENTICATED, response.data);
            }
        });
    },
    doLogout({commit}) {
        return this._vm.$axios
            .post(`${authURL}/logout`, this.state.auth)
            .then(response => {
                if (response.data) {
                    commit(SET_AUTHENTICATED, new Auth());
                    commit(SET_NAVIGATION_DRAWER, false);
                }
            });
    },
    doRegister({commit}, user) {
        return this._vm.$axios
            .post(`${authURL}/register`, user)
            .then(response => {
                if (response.data) {
                    commit(SET_AUTHENTICATED, response.data);
                }
            });
    },
};
