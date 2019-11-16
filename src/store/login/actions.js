import {SET_AUTHENTICATED, SET_NAVIGATION_DRAWER} from '../mutationTypes';
import Auth from './Auth';

// get the Authentication URL from dotenv file
let authURL = process.env.VUE_APP_AUTH_URL;

//
// Login methods:
//
// doLogin will receive email and password and will call /login on authentication server.
// doLogout will receive email, password and token. It will call /logout on authentication server.
// doRegister will receive name, email and password. It will call /register on authentication server.

export default {
    doLogin({commit}, user) {
        return this._vm.$axios.post(`${authURL}/login`, user).then(response => {
            if (response.data) {
                // store user into vuex store
                commit(SET_AUTHENTICATED, response.data);
            }
        });
    },
    doLogout({commit}, user) {
        return this._vm.$axios
            .post(`${authURL}/logout`, user)
            .then(response => {
                if (response.data) {
                    // Set an object with null fields
                    commit(SET_AUTHENTICATED, new Auth());
                    // since logout is called from the drawer, close it after logging out
                    commit(SET_NAVIGATION_DRAWER, false);
                }
            });
    },
    doRegister({commit}, user) {
        return this._vm.$axios
            .post(`${authURL}/register`, user)
            .then(response => {
                if (response.data) {
                    // store user into the vuex store
                    commit(SET_AUTHENTICATED, response.data);
                }
            });
    },
};
