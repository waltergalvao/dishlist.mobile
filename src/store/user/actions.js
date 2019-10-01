
export default {
    saveUsers({commit}) {
        return this._vm.$axios.get('/menu.json').then(response => {
            commit(SET_MENU, response.data);
        });
    },
};
