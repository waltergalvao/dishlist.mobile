<template>
    <q-page>
        <div class="q-pa-md bg-grey-2" v-if="place">
            <div class="row">
                <div class="col">
                    <q-card flat class="bg-grey-2" ref="placeDescription">
                        <div class="text-h6">{{ place.name }}</div>
                        <div class="text-subtitle3">{{ place.description }}</div>
                    </q-card>
                </div>
            </div>
        </div>

        <q-tabs class="text-accent" stretch :value="null">
            <q-tab label="Appetizers" />
            <q-tab label="Salads" />
            <q-tab label="Steaks" />
            <q-tab label="Pasta" />
            <q-tab label="Soups" />
            <q-tab label="Hot Beverages" />
            <q-tab label="Beverages" />
            <q-tab label="Drinks" />
            <q-tab label="Deserts" />
        </q-tabs>

        <div class="q-pa-sm" v-if="items">
            <q-list>
                <q-item-label header>Top 3 Dishes</q-item-label>
                <template v-for="(item, key) in items">
                    <menu-item :item="item" :key="key"/>
                </template>
            </q-list>
        </div>
    </q-page>
</template>

<script>
import MenuItem from "../components/MenuItem";
import { mapActions, mapState } from "vuex";
export default {
    name: "PageIndex",
    components: { MenuItem },
    data() {
        return {
            filter: null,
            toggle: false
        };
    },
    created() {
        this.fetchMenu();
    },
    methods: {
        ...mapActions({
            fetchMenu: "fetchMenu"
        })
    },
    computed: {
        ...mapState({
            place: state => state.menu.place,
            items: state => state.menu.items
        })
    }
};
</script>

<style scoped lang="scss">
.q-page-sticky {
    z-index: 5000;
}
</style>
