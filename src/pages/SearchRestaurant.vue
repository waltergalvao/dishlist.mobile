
<template>
    <q-page id="searchRestaurantScreen">
        <div class="fixed-center">
            <span>To open the Menu</span>
            <br />
            <br />

            <q-img
                id="qrCode"
                v-on:click="scanQRcode"
                src="~assets/qr-code.png"
                style="width: 100%"
            >
                <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">Scan QR Code</div>
            </q-img>

            <br />
            <br />
            <br />Or
            <br />To search restaurant by name
            <span
                class="linkText"
                v-on:click="SearchRestaurantByName"
            >Click Here</span>

            <br />
            <span v-on:click="pratice">scan</span>
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
        };
    },

    name: 'Restaurant',

    async created() {
        // this.restaurantList = this.$store.state.restaurant;
    },

    methods: {
        ...mapActions({
            SearchMenu: 'SearchMenu',
        }),

        scanQRcode() { //add practice code here when the image import works
            this.$store.dispatch('SearchMenu', {
                restaurantId: this.restaurantId,
            });
            this.$router.push('/place/:placeName/menu');
        },

        SearchRestaurantByName() {
            this.$router.push('/place/:placeName/RestaurantSearchList');
        },

        pratice() {
            let vueMethodsObj = this;
            cordova.plugins.barcodeScanner.scan(function(result) {
                console.log(result);
                vueMethodsObj.$store.dispatch('SearchMenu', {
                    restaurantId: result.text,
                });
                vueMethodsObj.$router.push('/place/:placeName/menu');
            });

            // this.$store.dispatch('SearchMenu', {
            //     restaurantId: this.restaurantId,
            // });
            // this.$router.push('/place/:placeName/menu');
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
    position: absolute;
    z-index: 999;
}
</style>
