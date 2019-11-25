import {LOGIN, LOGOUT} from '../mutationTypes';

export default {
    [LOGIN]: (state, auth) => {
        state.id = auth.id;
        state.username = auth.username;
        state.email = auth.email;
        state.token = auth.token;
        return state;
    },
    [LOGOUT]: state => {
        state.id = null;
        state.username = null;
        state.email = null;
        state.token = null;
    },
};
