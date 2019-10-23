<template>
    <q-page class="search-restaurant">
        <div class="fixed-center text-center">
            <q-img
                class="search-restaurant__qr shadow-10"
                style="border-radius: 10px;"
                v-on:click="scanQRcode"
                :src="imageSrc"
            >
                <div
                    class="absolute-bottom text-subtitle1 text-center q-pa-xs search-restaurant__overlay"
                >
                    Scan QR Code
                </div>
            </q-img>
            <q-btn
                color="primary"
                class="q-ma-lg"
                outline
                :to="{name: 'restaurant.search'}"
                >or search by name</q-btn
            >
        </div>
    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'Home',
    data() {
        return {
            restaurantId: 1,
            restaurantList: [],
            imageSrc: 'statics/qr-code.png',
        };
    },
    created() {
        this.$emit('updateTitle', 'DishList');
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
                vueMethodsObj.$router.push(
                    '/restaurant/' + result.text + '/menu',
                );
            });
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
.search-restaurant {
    &__overlay {
        background: rgba(0, 0, 0, 0.8) !important;
        font-weight: bold;
        font-size: 1.3em;
        text-transform: uppercase;
    }

    &__qr {
        margin: 1em 0;
    }
}
</style>
