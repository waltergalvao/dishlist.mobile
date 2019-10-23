import {SET_NAVIGATION_DRAWER} from '../mutationTypes';

export default {
    setNavigationDrawerState({commit}, isOpen) {
        commit(SET_NAVIGATION_DRAWER, isOpen);
    },
};
