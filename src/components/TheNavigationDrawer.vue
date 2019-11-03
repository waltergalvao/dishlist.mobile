<template>
    <q-drawer
        :value="isOpen"
        @input="setNavigationDrawerState($event)"
        elevated
        class="drawer"
    >
        <div class="drawer__header">
            <div class="text-white q-pa-md" v-if="isAuthenticated">
                <q-avatar>
                    <img src="~assets/avatar.png" class="drawer__avatar" />
                </q-avatar>
                <div class="text-weight-bold drawer__name">{{ username }}</div>
                <div>{{ email }}</div>
            </div>
            <div class="text-white q-pa-md" v-else>
                <div class="text-weight-bold drawer__name">Welcome</div>
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
            <q-item
                v-if="!isAuthenticated"
                clickable
                v-ripple
                :to="{name: 'login'}"
            >
                <q-item-section avatar>
                    <q-icon name="fas fa-sign-in-alt" />
                </q-item-section>

                <q-item-section>Login</q-item-section>
            </q-item>
            <q-item
                v-if="!isAuthenticated"
                clickable
                v-ripple
                :to="{name: 'register'}"
            >
                <q-item-section avatar>
                    <q-icon class="fas fa-user-plus" />
                </q-item-section>

                <q-item-section>Register</q-item-section>
            </q-item>
            <q-item v-if="isAuthenticated" clickable v-ripple @click="logout">
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
        logout() {
            this.$store
                .dispatch('doLogout')
                .then(() => {
                    if (this.$router.currentRoute.name !== 'home') {
                        this.$router.push({
                            name: 'home',
                        });
                    }
                })
                .catch(error => {
                    let msg = error;
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.message
                    ) {
                        msg = error.response.data.message;
                    }
                    this.$q.notify(msg);
                });
        },
    },
    computed: {
        ...mapState({
            isOpen: state => state.ui.drawer.isOpen,
            isAuthenticated: state => state.login.auth.isAuthenticated(),
            username: state => state.login.auth.username,
            email: state => state.login.auth.email,
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
