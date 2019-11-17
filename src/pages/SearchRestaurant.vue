<template>
    <q-page>
        <div class="search-container">
            <q-img
                class="flip-vertical responsive "
                :src="screenTopBackground"
            ></q-img>
            <q-input
                clearable
                outlined
                debounce="500"
                class="search-container-restaurant"
                type="text"
                bg-color="white"
                ref="restaurantNameInput"
                v-model="restaurantName"
                label="Search for a restaurant"
                :disable="searchInputIsDisabled"
                @input="searchRestaurant()"
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
            // Restaurant name to search
            restaurantName: '',
            // Location of top background
            screenTopBackground: 'statics/home-screen-bottom.png',
            // Controls if the input component will be disabled or not
            searchInputIsDisabled: false,
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
            try {
                // Search for the restaurant. If it returns something, vue store will be updated.
                if (this.restaurantName) {
                    await this.fetchRestaurant(this.restaurantName);
                }
            } catch (error) {
                if (!(error.response && error.response.status === 404)) {
                    // tell the user to wait a little bit until next try
                    this.$q.notify({
                        message: 'Wait a little bit to try again',
                        icon: 'warning',
                        timeout: 1500,
                    });
                    // disable input for a while...
                    this.searchInputIsDisabled = true;
                    // get a reference to this component to use inside setTimeout
                    let thisComponent = this;
                    // remove focus from the input box
                    this.$refs.restaurantNameInput.blur();
                    // set timeout to restore input box
                    setTimeout(() => {
                        thisComponent.searchInputIsDisabled = false;
                        // clear the content
                        this.restaurantName = '';
                    }, 2500);
                }
            }
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
// set the height of the container with an image and an input box
.search-container {
    height: 150px;
    // move input box close to the top
    &-restaurant {
        position: relative;
        width: 80%;
        margin: 0 auto;
        top: -95px;
    }
}
</style>
