<template>
    <q-page>
        <div class="q-pa-md bg-grey-2" v-if="restaurant">
            <div class="row">
                <div class="col">
                    <q-card flat class="bg-grey-2" ref="placeDescription">
                        <div class="text-h6">Xpto</div>
                        <div class="text-subtitle3">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </div>
                    </q-card>
                </div>
            </div>
        </div>

        <q-tabs class="text-accent" stretch :value="null" v-if="categories">
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

                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>

                <q-item-label header>Salads</q-item-label>
                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>

                <q-item-label header>Steaks</q-item-label>
                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>

                <q-item-label header>Beverages</q-item-label>
                <menu-item></menu-item>
                <menu-item></menu-item>
                <menu-item></menu-item>
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
            restaurant: state => state.menu.movies,
            categories: state => state.menu.categories,
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
