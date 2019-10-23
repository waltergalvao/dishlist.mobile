<template>
    <q-drawer
        :value="isOpen"
        @input="setNavigationDrawerState($event)"
        elevated
        class="drawer"
    >
        <div class="drawer__header">
            <div class="text-white q-pa-md">
<!--                <q-avatar>-->
<!--                    <img src="~assets/avatar.png" class="drawer__avatar" />-->
<!--                </q-avatar>-->
                <div class="text-weight-bold drawer__name">Jhon Doe</div>
                <div>johndoe@gmail.com</div>
            </div>
        </div>

        <q-list>
            <q-item-label header>Select Restaurant</q-item-label>

            <q-item
                clickable
                v-ripple
                :to="{name: 'home'}"
                active-class="menu--active"
            >
                <q-item-section avatar>
                    <q-icon name="fas fa-qrcode" />
                </q-item-section>

                <q-item-section>Scan QR Code</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :to="{name: 'restaurant.search'}"
                active-class="menu--active"
            >
                <q-item-section avatar>
                    <q-icon name="search" />
                </q-item-section>

                <q-item-section>Search Restaurant</q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item-label header>User</q-item-label>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                    <q-icon name="fas fa-sign-out-alt" />
                </q-item-section>

                <q-item-section>Logout</q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'TheNavigationDrawer',
    methods: {
        ...mapActions({
            setNavigationDrawerState: 'setNavigationDrawerState',
        }),
    },
    computed: {
        ...mapState({
            isOpen: state => state.ui.drawer.isOpen,
        }),
    },
};
</script>

<style lang="scss" scoped>
.drawer {
    &__header {
        background: url('~assets/drawer-bg.png');
        background-size: cover;
        background-position-y: bottom;
        padding: 40px 0 5px 0;
    }

    &__name {
        padding-top: 10px;
    }
}
</style>
