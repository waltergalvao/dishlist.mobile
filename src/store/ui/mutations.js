import {SET_NAVIGATION_DRAWER} from '../mutationTypes';

export default {
    [SET_NAVIGATION_DRAWER]: (state, isOpen) => {
        state.drawer.isOpen = isOpen;
        return state;
    },
};
