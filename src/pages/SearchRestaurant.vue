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
                    <RestaurantDetails
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
import RestaurantDetails from '../components/RestaurantDetails';

export default {
    name: 'RestaurantSearchList',
    components: {RestaurantDetails},
    data() {
        return {
            restaurantName: null,
        };
    },
    mounted() {
        this.$refs.restaurantNameInput.focus();
    },
    methods: {
        ...mapActions({
            fetchRestaurant: 'fetchRestaurant',
        }),
        async searchRestaurant() {
            await this.fetchRestaurant({restaurantName: this.restaurantName});
        },
    },
    computed: {
        ...mapState({
            restaurantList: state => state.restaurant.restaurant,
        }),
    },
};
</script>
