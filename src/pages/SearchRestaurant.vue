<template>
    <q-page>
        <div>
            <q-img
                class="flip-vertical responsive "
                :src="screenTopBackground"
            ></q-img>
        </div>
        <div class="q-pa-sm q-mt-sm searchBox">
            <q-input
                outlined
                ref="restaurantNameInput"
                v-model="restaurantName"
                label="Restaurant Name.."
                type="text"
                clearable
                @keyup="searchRestaurant()"
            >
                <template v-slot:append>
                    <q-icon name="search" color="red" />
                </template>
            </q-input>
        </div>

        <div class="q-pa-sm" v-if="restaurantList">
            <q-list>
                <div>
                    <restaurant-details
                        v-for="(restaurant, key) in restaurantList"
                        :restaurant="restaurant"
                        :key="key"
                    />
                </div>
            </q-list>
        </div>
    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import RestaurantDetails from '../components/RestaurantItem';

export default {
    name: 'RestaurantSearchList',
    components: {RestaurantDetails},
    data() {
        return {
            restaurantName: '',
            screenTopBackground: 'statics/home-screen-bottom.png',
        };
    },
    mounted() {
        this.$refs.restaurantNameInput.focus();
    },
    methods: {
        ...mapActions({
            fetchRestaurant: 'fetchRestaurant',
            resetMenu: 'resetMenu',
        }),
        async searchRestaurant() {
            await this.fetchRestaurant(this.restaurantName);
        },
    },
    computed: {
        ...mapState({
            restaurantList: state => state.restaurant.restaurant,
        }),
    },
};
</script>

<style lang="scss">
.searchBox {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 80%;
}

.q-field__inner.relative-position.col.self-stretch.column.justify-center {
    background-color: white !important;
}
</style>
