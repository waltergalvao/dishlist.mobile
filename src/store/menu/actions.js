import { SET_MENU } from "../mutationTypes";

export default {
    fetchMenu({ commit }) {
        fetch("http://localhost/statics/api/menu.json").then(response => {
            console.log(response);
            commit(SET_MENU, response.data);
        });
    }
};
