<template>
    <q-page class="menu">
        <menu-options/>

        <div class="q-pa-sm" v-if="categories">
            <q-list>
                <template v-for="(category, key) in categories">
                    <q-item-label header :key="'label' + key">{{
                        category.name
                    }}</q-item-label>
                    <menu-item
                        v-for="item in category.items"
                        :item="item"
                        :key="item.id"
                    />
                </template>
            </q-list>
        </div>
    </q-page>
</template>

<script>
import MenuItem from '../components/MenuItem';
import {mapActions, mapState} from 'vuex';
import MenuOptions from "../components/MenuOptions";
export default {
    name: 'PageIndex',
    components: {MenuOptions, MenuItem},
    data() {
        return {
            filter: null,
            toggle: false,
        };
    },
    async created() {
        await this.fetchMenu();
        this.$emit('updateTitle', this.place.name)
    },
    methods: {
        ...mapActions({
            fetchMenu: 'fetchMenu',
        }),
    },
    computed: {
        ...mapState({
            place: state => state.menu.place,
            categories: state => state.menu.categories,
        }),
    },
};
</script>

<style scoped lang="scss">
.q-page-sticky {
    z-index: 5000;
}

    .menu {
        padding: 0 0 40px 0;
    }
</style>
