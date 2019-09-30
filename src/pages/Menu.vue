<template>
    <q-page>
        <q-tabs class="text-accent" stretch :value="null">
            <q-tab
                v-for="(category, categoryKey) in categories"
                :label="category.name"
                :key="'category' + categoryKey"
            />
        </q-tabs>

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
export default {
    name: 'PageIndex',
    components: {MenuItem},
    data() {
        return {
            filter: null,
            toggle: false,
        };
    },
    created() {
        this.fetchMenu();
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
</style>
