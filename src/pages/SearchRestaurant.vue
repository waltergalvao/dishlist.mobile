<template>
    <q-page id="searchRestaurantScreen">
        <div>
            <q-input
                ref="restaurantNameInput"
                v-model="restaurantName"
                label="Restaurant Name.."
                class="dishlist-searchbar"
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
            restaurantName: '',
            restaurantList: null,
        };
    },

    mounted(){
        this.$refs.restaurantNameInput.focus()
    },

    methods: {
        ...mapActions({
            fetchRestaurant: 'fetchRestaurant',
        }),
         async searchRestaurant() {
             await this.$store.dispatch('fetchRestaurant', {
                restaurantName: this.restaurantName,
            });

            if(this.$store.state.restaurant.restaurant ==[]){
                this.restaurantList = null;

            }else{
console.log(this.$store.state.restaurant.restaurant );
            this.restaurantList = this.$store.state.restaurant.restaurant;
            }
            
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



.dishlist-searchbar {
    background-color: white;
    margin: 5px;

}
.q-field--focused {
    border: 1px solid red;
    color: blue;
}
.q-field--focused .q-field__label {
    color: red !important;
}
</style>
