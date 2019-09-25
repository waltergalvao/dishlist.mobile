<template>
    <q-page>
        <div class="q-pa-md bg-grey-2" v-if="place">
            <div class="row">
                <div class="col">
                    <q-card flat class="bg-grey-2" ref="placeDescription">
                        <div class="text-h6">{{ place.name }}</div>
                        <div class="text-subtitle3">
                            {{ place.description }}
                        </div>
                    </q-card>
                </div>
            </div>
        </div>

        <q-tabs class="text-accent" stretch :value="null">
            <q-tab
                v-for="(category, key) in categories"
                :label="category.name"
                :key="key"
            />
        </q-tabs>

        <div class="q-pa-sm" v-if="categories">
            <q-list>
                <template v-for="(category, key) in categories">
                    <q-item-label header :key="key">{{
                        category.name
                    }}</q-item-label>
                    <menu-item
                        v-for="(item, key) in category.items"
                        :item="item"
                        :key="key"
                    />
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
            categories: state => state.menu.categories
        })
    }
};
</script>

<style scoped lang="scss">
.q-page-sticky {
    z-index: 5000;
}
</style>
