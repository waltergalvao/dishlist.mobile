<template>
    <q-page>
        <div class="q-pa-sm q-mt-sm">
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
                    <q-icon name="search" />
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
        };
    },
    mounted() {
        this.resetMenu();
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
