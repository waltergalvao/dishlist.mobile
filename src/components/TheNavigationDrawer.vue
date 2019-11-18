// This component is responsible for the Menu

<template>
    <q-drawer
        :value="isOpen"
        @input="setNavigationDrawerState($event)"
        elevated
        class="drawer"
    >
        <div class="drawer__header">
            <!-- Show username and avatar if user is logged -->
            <div class="text-white q-pa-md" v-if="isAuthenticated">
                <q-avatar>
                    <img src="~assets/avatar.png" class="drawer__avatar" />
                </q-avatar>
                <div class="text-weight-bold drawer__name">
                    {{ auth.username }}
                </div>
                <div>{{ auth.email }}</div>
            </div>
            <!-- Otherwise, show a welcome message -->
            <div class="text-white q-pa-md" v-else>
                <div class="text-weight-bold drawer__name">
                    Welcome to DishList
                </div>
            </div>
        </div>

        <!-- Menu items -->
        <!-- First group - Restaurants -->
        <q-list>
            <q-item-label header>Select Restaurant</q-item-label>
            <!-- Link to home page, where the user can click to scan the QR Code -->
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

            <!-- Link to search restaurant by name -->
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

            <!-- Horizontal Line Separator -->
            <q-separator color="#E3E3E3" inset></q-separator>

            <!-- User menu -->
            <q-item-label header>User</q-item-label>

            <!-- Show Log in and Register if user is not authenticated -->
            <!-- Log in Link -->
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

            <!-- Register link -->
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

            <!-- If the user is already authenticated, show the log out button -->
            <q-item v-if="isAuthenticated" clickable v-ripple @click="logout">
                <q-item-section avatar>
                    <q-icon name="fas fa-sign-out-alt" />
                </q-item-section>

                <q-item-section>Logout</q-item-section>
            </q-item>
            <!-- Horizontal Line -->
            <q-separator color="#E3E3E3" inset></q-separator>
        </q-list>
    </q-drawer>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

export default {
    name: 'TheNavigationDrawer',
    methods: {
        ...mapActions({
            setNavigationDrawerState: 'setNavigationDrawerState',
        }),
        logout() {
            // Save user name to say goodbye...
            let username = this.auth.username;
            this.$store
                .dispatch('doLogout', this.auth)
                .then(() => {
                    // redirect the user to home
                    if (this.$router.currentRoute.name !== 'home') {
                        this.$router.push({
                            name: 'home',
                        });
                    }
                    // say goodbye...
                    this.$q.notify({
                        message: `Bye ${username}! See you soon.`,
                        icon: 'emoji_people',
                        timeout: 1000,
                    });
                })
                .catch(error => {
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
                });
        },
    },
    computed: {
        ...mapGetters({
            isAuthenticated: 'isUserLoggedIn',
        }),
        ...mapState({
            isOpen: state => state.ui.drawer.isOpen,
            auth: state => state.login,
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
