<template>
    <q-page class="search-restaurant text-center">
        <div
            :class="[
                {'hide-splash-screen': hideSplashScreenState},
                'splash-screen',
            ]"
        >
            <div class="splash-screen__wrap">
                <div class="splash-screen__wrap__appName">
                    <span class="splash-screen__wrap__appName_red">Dish</span>
                    <span class="splash-screen__wrap__appName_black">List</span>
                </div>
                <div class="splash-screen__wrap__appSlogan">
                    Where your dishes come true
                </div>
                <div class="splash-screen__wrap__logo">
                    <img
                        class="splash-screen__wrap__logo_img"
                        src="~assets/app-logo.png"
                    />
                </div>
            </div>
        </div>

        <div class=" search-restaurant__searchContainer">
            <div class="search-restaurant__qr width85" v-on:click="scanQRcode">
                <img class="search-restaurant__qr_img" :src="scanQRImage" />
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
            <q-img class="fixed-bottom responsive" :src="homeScreenBottom" />
            <q-img
                class="fixed-bottom responsive search-restaurant__dishImg"
                :src="homeScreenDishImg"
            ></q-img>
            <q-img
                class="fixed-bottom responsive search-restaurant__cofeeImg"
                :src="homeScreenCafe"
            ></q-img>
            <q-img
                class="fixed-bottom responsive search-restaurant__strawberryImg"
                :src="homeScreensStrawberryImg"
            ></q-img>
            <q-img
                class="fixed-bottom responsive search-restaurant__strawberry2Img"
                :src="homeScreensStrawberries2Img"
            ></q-img>
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
            homeScreenDishImg: 'statics/home-screen-dish-img.png',
            homeScreenCafe: 'statics/home-cafe.png',
            homeScreensStrawberryImg: 'statics/home-strawberry-img.png',
            homeScreensStrawberries2Img: 'statics/home-strawberries-2-img.png',
        };
    },
    created() {
        this.$emit('updateTitle', 'DishList');
    },
    mounted() {
        if (!this.hideSplashScreenState) {
            setTimeout(() => {
                this.hideSplashScreen();
            }, 10000);
        }
    },
    methods: {
        ...mapActions({
            fetchMenu: 'fetchMenu',
            resetMenu: 'resetMenu',
            hideSplashScreen: 'hideSplashScreen',
        }),
        scanQRcode() {
            // show loading gif while loading camera component
            this.$q.loading.show({
                delay: 400,
            });
            // user barcode scanner plugin
            cordova.plugins.barcodeScanner.scan(
                result => {
                    // hide loading gif
                    this.$q.loading.hide();
                    // if read something and user didn't cancelled it..
                    if (result && result.cancelled !== 1 && result.text) {
                        // reset menu properties
                        this.resetMenu();
                        // redirect to restarant's menu
                        this.$router.push(
                            '/restaurant/' + result.text + '/menu',
                        );
                    }
                },
                error => {
                    // hide loading gif
                    this.$q.loading.hide();

                    // show error message
                    let msg = new String(error);
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.message
                    ) {
                        msg = error.response.data.message;
                    }
                    this.$q.notify({
                        message: msg,
                        icon: 'error',
                        color: 'negative',
                    });
                },
            );
        },
    },
    plugins: ['Loading'],
    computed: {
        ...mapState({
            hideSplashScreenState: state => state.ui.splashScreen.isHide,
        }),
    },
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
        background: #cdcdcd;
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
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    &__dishImg {
        width: 50%;
        margin: auto;
    }
    &__cofeeImg {
        width: 10%;
        position: absolute;
        bottom: 3.5rem;
        left: 1rem;
    }
    &__strawberryImg {
        width: 15%;
        position: absolute;
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

// Splash Screen Configuration
div.hide-splash-screen {
    display: none;
}
.splash-screen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    animation: fadeAway 3s ease-in-out;
    animation-delay: 3s;
    animation-fill-mode: forwards;

    &__wrap {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 30% 40% 30%;
        place-items: center;

        &__appName {
            grid-row: 1/2;
            grid-column: 1/2;
            font-size: 55px;
            font-weight: 700;
            animation: comeFromLeft 3s ease-in-out;
            &_red {
                color: red;
            }

            &_black {
                color: black;
            }
        }

        &__appSlogan {
            grid-row: 3/4;
            grid-column: 1/2;
            white-space: nowrap;
            font-size: 25px;
            font-weight: 400;
            animation: comeFromRight 3s ease-out;
        }

        &__logo {
            grid-row: 2/3;
            grid-column: 1/2;

            &_img {
                width: 40%;
                animation: pulse 4s linear;
            }
        }

        @keyframes pulse {
            from {
                opacity: 0.5;
                transform: scale(2, 2);
            }
            to {
                opacity: 1;
                transform: scale(1, 1);
            }
        }

        @keyframes comeFromLeft {
            from {
                transform: translateX(-1000px) skewX(-60deg);
            }

            75% {
                transform: translateX(100px) skewX(-60deg);
            }

            to {
                transform: translateX(0) skewX(0);
            }
        }

        @keyframes comeFromRight {
            from {
                transform: translateX(1000px) skewX(60deg);
            }

            75% {
                transform: translateX(-100px) skewX(-60deg);
            }

            to {
                transform: translateX(0) skewX(0);
            }
        }

        @keyframes fadeAway {
            from {
                opacity: 1;
            }

            to {
                opacity: 0;
                visibility: hidden;
            }
        }
    }
}
</style>
