import {SET_NAVIGATION_DRAWER, HIDE_SPLASH_SCREEN} from '../mutationTypes';

export default {
    setNavigationDrawerState({commit}, isOpen) {
        commit(SET_NAVIGATION_DRAWER, isOpen);
    },
    hideSplashScreen({commit}) {
        commit(HIDE_SPLASH_SCREEN);
    },
};
