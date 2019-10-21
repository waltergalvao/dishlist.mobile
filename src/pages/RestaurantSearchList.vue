<template>
    <q-page id="searchRestaurantScreen">
        <img
            src="~assets/bg-search-screen.jpg"
            style="height: 100%; opacity: 0.8; "
        />

        <div class="fixed-center">
            <q-input
                v-model="restaurantName"
                label="Restaurant Name.."
                class="setWidth dishlist-searchbar"
            >
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
            </q-input>

            <br />

            <q-btn
                @click="searchRestaurant()"
                width="60%"
                :dense="$q.screen.xs"
                no-caps
                label="Search"
                color="secondary"
                text-color="color:rgba(0, 0, 0, 0.6)"
            >
            </q-btn>
        </div>
    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    data() {
        return {
            restaurantName: 'Veggie Bowl',
            restaurantList: [],
        };
    },

    name: 'RestaurantSearchList',

    async created() {
        this.restaurantList = this.$store.state.restaurant;
    },

    methods: {
        ...mapActions({
            fetchRestaurant: 'fetchRestaurant',
        }),
        searchRestaurant() {
            this.$store.dispatch('fetchRestaurant', {
                restaurantName: this.restaurantName,
            });
            //this.$router.push("/place/:placeName/menu")
        },
    },

    computed: {
        ...mapState({
            restaurant: state => state.restaurant.restaurant,
        }),
    },
};
</script>

<style lang="scss">
.setWidth {
    width: 100%;
    font-weight: strong;
}

.fixed-center {
    width: 80%;
    position: absolute;
    z-index: 999;
}

.dishlist-searchbar {
    background-color: white;
}
.q-field--focused {
    border: 4px solid green;
    color: blue;
}
.q-field--focused .q-field__label {
    color: green !important;
}
</style>
