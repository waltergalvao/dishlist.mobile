<template>
    <q-page id="searchRestaurantScreen">
        <div class="fixed-center">
            <span>To open the Menu</span>

            <q-img
                id="qrCode"
                v-on:click="scanQRcode"
                :src="imageSrc"
                style="width: 100%"
            >
                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                    Scan QR Code
                </div>
            </q-img>
            <router-link class="linkText" :to="{ name: 'restaurant.search.list' }">
                or search restaurant by name
            </router-link>
        </div>
    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    data() {
        return {
            restaurantId: 1,
            restaurantList: [],
            imageSrc: 'statics/qr-code.png',
        };
    },

    name: 'Restaurant',

    async created() {
        // this.restaurantList = this.$store.state.restaurant;
    },

    methods: {
        ...mapActions({
            fetchMenu: 'fetchMenu',
        }),

        scanQRcode() {
            let vueMethodsObj = this;
            cordova.plugins.barcodeScanner.scan(function(result) {
                console.log(result);
                vueMethodsObj.$store.dispatch('fetchMenu', {
                    restaurantId: result.text,
                });
                vueMethodsObj.$router.push('/restaurant/' + result.text + '/menu');
            });
        },

        searchRestaurantByName() {
            this.$router.push('/restaurant/search/');
        },
    },
    computed: {
        ...mapState({
            featuredItems: state => state.menu.featuredItems,
            place: state => state.menu.place,
            categories: state => state.menu.categories,
        }),
    },
};
</script>

<style lang="scss">
.linkText {
    color: blue;
    text-decoration: underline;
}

#searchRestaurantScreen {
    text-align: center;
    height: 1vh;
    background-color: white;
}

.setWidth {
    width: 100%;
    font-weight: strong;
}

.fixed-center {
    width: 70%;
    z-index: 999;
    position: absolute;
}
span {
    display: block;
}

#qrCode {
    margin: 1em;
}
</style>
