<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <v-navigation-menu
                    v-if="showNavigation"
                    @click.native="setNavigationDrawerState(true)"
                />

                <back-button
                    :to="backRoute"
                    v-if="showBackButton"
                    @click="goBack"
                />

                <q-toolbar-title>
                    {{ title }}
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <the-navigation-drawer />

        <q-page-container>
            <router-view
                @updateTitle="updateTitle"
                @updateBackRoute="updateBackRoute"
                :key="$route.fullPath"
            />
        </q-page-container>
    </q-layout>
</template>

<script>
import TheNavigationDrawer from '../components/TheNavigationDrawer';
import VNavigationMenu from '../components/_dumb/VNavigationButton';
import BackButton from '../components/_dumb/VBackButton';
import {mapActions} from 'vuex';

export default {
    name: 'Default',
    components: {BackButton, VNavigationMenu, TheNavigationDrawer},
    data() {
        return {
            leftDrawerOpen: false,
            title: 'DishList',
            backRoute: null,
        };
    },
    methods: {
        ...mapActions({
            setNavigationDrawerState: 'setNavigationDrawerState',
        }),
        updateTitle(value) {
            this.title = value;
        },
        updateBackRoute(value) {
            this.backRoute = value;
        },
        goBack() {
            this.$router.push(this.backRoute);
        },
    },
    computed: {
        backUrl() {
            return this.$route.meta.backUrl;
        },
        showBackButton() {
            return !!this.$route.meta.showBackButton && this.backRoute !== null;
        },
        showNavigation() {
            if (this.$route.meta.showNavigation === undefined) {
                return true;
            }

            return !!this.$route.meta.showNavigation;
        },
    },
};
</script>
