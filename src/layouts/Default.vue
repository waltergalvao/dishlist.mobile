<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <v-navigation-menu
                    v-if="showNavigation"
                    @click.native="leftDrawerOpen = !leftDrawerOpen"
                />
                <back-button :to="backRoute" v-if="showBackButton" @click="goBack"/>

                <q-toolbar-title>
                    {{ title }}
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <the-navigation-drawer :is-open="leftDrawerOpen" />

        <q-page-container>
            <router-view @updateTitle="updateTitle" @updateBackRoute="updateBackRoute"/>
        </q-page-container>

    </q-layout>
</template>

<script>
import TheNavigationDrawer from '../components/TheNavigationDrawer';
import VNavigationMenu from '../components/_dumb/VNavigationButton';
import BackButton from "../components/_dumb/VBackButton";

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
        updateTitle(value) {
            this.title = value;
        },
        updateBackRoute(value) {
            this.backRoute = value;
        },
        goBack() {
            this.$router.go(-1);
        },
    },
    computed: {
        backUrl() {
            return this.$route.meta.backUrl;
        },
        showBackButton() {
            return !!this.$route.meta.showBackButton;
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
