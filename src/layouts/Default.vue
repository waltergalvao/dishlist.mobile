<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <v-navigation-menu
                    @click.native="leftDrawerOpen = !leftDrawerOpen"
                />

                <q-toolbar-title>
                    DishList
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <the-navigation-drawer :is-open="leftDrawerOpen" />

        <q-page-container>
            <router-view />
        </q-page-container>

        <place-navigation />
    </q-layout>
</template>

<script>
import TheNavigationDrawer from '../components/TheNavigationDrawer';
import VNavigationMenu from '../components/_dumb/VNavigationButton';
import PlaceNavigation from '../components/_dumb/VPlaceNavigation';

export default {
    name: 'Default',
    components: {PlaceNavigation, VNavigationMenu, TheNavigationDrawer},
    data() {
        return {
            leftDrawerOpen: false,
        };
    },
};
</script>
