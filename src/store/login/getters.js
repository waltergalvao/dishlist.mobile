export default {
    isUserLoggedIn(state) {
        return state.auth.isAuthenticated();
    }
};
