<template>
   <q-page class="search-restaurant text-center">
        <div class=" search-restaurant__searchContainer">
            <div class="search-restaurant__qr width85 ">
                <img
                class="search-restaurant__qr_img"            
                :src="scanQRImage"
                >
            </div>
            
            <q-btn
                color="primary"
                class=" width85 search-restaurant__searchBtn"
                v-on:click="scanQRcode"           
                >SCAN QR CODE</q-btn
            >
                
            <q-btn
                color="primary"
                class="width85 search-restaurant__searchBtn search-restaurant__searchNameBtn"
                outline
                :to="{name: 'restaurant.search'}"
                >SEARCH BY NAME</q-btn
            >            
        </div>

        <div class="search-restaurant__bottom">
            <q-img class="fixed-bottom responsive" :src="homeScreenBottom"/>
            <q-img class="fixed-bottom responsive search-restaurant__dishImg" :src="homeScreenDishImg"></q-img>
            <q-img class="fixed-bottom responsive search-restaurant__cofeeImg" :src="homeScreenCafe"></q-img>
            <q-img class="fixed-bottom responsive search-restaurant__strawberryImg" :src="homeScreensStrawberryImg"></q-img>
            <q-img class="fixed-bottom responsive search-restaurant__strawberry2Img" :src="homeScreensStrawberries2Img"></q-img>
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
            scanQRImage: 'statics/qr-code.png',
            homeScreenBottom: 'statics/home-screen-bottom.png',
            homeScreenDishImg:'statics/home-screen-dish-img.png',
            homeScreenCafe: 'statics/home-cafe.png',
            homeScreensStrawberryImg: 'statics/home-strawberry-img.png',
            homeScreensStrawberries2Img: 'statics/home-strawberries-2-img.png',
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
            font-weight: bold;
            font-size: 1.3em;
            text-transform: uppercase;
        }
        &__qr {        
            background:#cdcdcd;       
            height: 12rem;
            border-radius: 3px;
            margin-top: 2rem;
        }
        &__searchBtn {
            height: 3.5rem;
        }
        &__searchNameBtn {
            margin-top: 1rem;
        }
        &__qr_img {
            height: 80%;
            width: auto;
            position: relative;;
            top:50%;
            transform: translateY(-50%);
        }   
        &__dishImg {
            width:50%;
            margin:auto;
        }
        &__cofeeImg {
            width: 10%;
            position:absolute;
            bottom: 3.5rem;
            left: 1rem;
        }
        &__strawberryImg {
            width: 15%;
            position:absolute;
            bottom: 6rem;
            left: 80%;
        }
        &__strawberry2Img {
            position: absolute;
            bottom: 8rem;
            width: 50%;
            left: 30%;
        }
    }

    div.search-restaurant__searchContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
</style>
