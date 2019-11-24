<template>
    <q-page class="search-restaurant text-center">
        <div
            :class="[
                {'hide-splash-screen': hideSplashScreenState},
                'splash-screen',
            ]"
        >
            <div class="splash-screen__wrap">
                <div class="splash-screen__wrap__upper"></div>
                <div class="splash-screen__wrap__logo">
                    <img
                        class="splash-screen__wrap__logo_img"
                        src="~assets/app-logo.png"
                    />
                </div>
                <div class="splash-screen__wrap__text">
                    <div class="splash-screen__wrap__text__appName">
                        <span class="splash-screen__wrap__text__appName_red">DISH</span>
                        <span class="splash-screen__wrap__text__appName_black">LIST</span>
                    </div>
                    <div class="splash-screen__wrap__text__appSlogan">
                        Where your dishes come true
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'Home',
    data() {
        return {
        };
    },
    mounted() {
        if (!this.hideSplashScreenState) {
            setTimeout(() => {
                this.hideSplashScreen();
                this.$router.push({
                    name: 'home',
                });
            }, 5500);
        }
    },
    methods: {
        ...mapActions({
            hideSplashScreen: 'hideSplashScreen',
        }),
    },
    computed: {
        ...mapState({
            hideSplashScreenState: state => state.ui.splashScreen.isHide,
        }),
    },
};
</script>

<style lang="scss">

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
        grid-template-rows: 35% 30% 35%;
        place-items: center;

        &__upper {
            grid-row: 1/2;
            grid-column: 1/2;
        }

        &__text {
            align-self: baseline;
            grid-row: 3/4;
            grid-column: 1/2;

            &__appName {
                font-size:35px;
                font-weight: 400;
                animation: pulse 3s ease-in-out;

                &_red {
                    color: red;
                }

                &_black {
                    color: black;
                }
            }

            &__appSlogan {
                color: #707070;
                white-space: nowrap;
                font-size: 18px;
                font-weight: 400;
                animation: comeFromRight 3s ease-out;
            }
        }

        &__logo {
            grid-row: 2/3;
            grid-column: 1/2;

            &_img {
                width: 37%;
                position: relative;
                top: 4px;
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
