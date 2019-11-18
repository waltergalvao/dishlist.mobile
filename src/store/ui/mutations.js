import {SET_NAVIGATION_DRAWER, HIDE_SPLASH_SCREEN} from '../mutationTypes';

export default {
    [SET_NAVIGATION_DRAWER]: (state, isOpen) => {
        state.drawer.isOpen = isOpen;
        return state;
    },
    [HIDE_SPLASH_SCREEN]: state => {
        state.splashScreen.isHide = true;
        return state;
    },
};
