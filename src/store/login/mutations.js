import {SET_AUTHENTICATED} from '../mutationTypes';

export default {
    [SET_AUTHENTICATED]: (state, auth) => {
        let newAuth = Object.assign({}, state.auth, auth);
        state.auth = newAuth;
        return state;
    },
};
