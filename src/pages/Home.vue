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
        this.resetMenu();
    },
    methods: {
        ...mapActions({
            fetchMenu: 'fetchMenu',
            resetMenu: 'resetMenu',
        }),
        scanQRcode() {
            let combinedVueInstance = this;

            combinedVueInstance.$q.loading.show({
                delay: 400,
            });

            cordova.plugins.barcodeScanner.scan(
                result => {
                    this.$q.loading.hide();
                    if (result && result.cancelled !== 1 && result.text) {
                        combinedVueInstance.$store.dispatch('fetchMenu', {
                            restaurantId: result.text,
                        });
                        combinedVueInstance.$router.push(
                            '/restaurant/' + result.text + '/menu',
                        );
                    }
                },
                error => {
                    this.$q.loading.hide();
                    this.$q.notify(error);
                },
            );
        },
    },
    computed: {
        ...mapState({
            featuredItems: state => state.menu.featuredItems,
            place: state => state.menu.place,
            categories: state => state.menu.categories,
        }),
    },
    plugins: ['Loading'],
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
