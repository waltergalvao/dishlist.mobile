<template>
    <q-drawer :value="isOpen" elevated class="drawer">
        <q-img src="https://image.freepik.com/free-vector/red-abstract-background-with-flat-design_23-2147875149.jpg" style="height: 150px">
            <div class="absolute-bottom bg-transparent">
                <q-avatar size="56px" class="q-mb-sm">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <div class="text-weight-bold">Jhon Doe</div>
                <div>+1 (604) 726-2010</div>
            </div>
        </q-img>

        <q-list>
            <q-item-label header>Select Restaurant</q-item-label>

            <q-item
                clickable
                v-ripple
                :active="link === 'trash'"
                @click="link = 'trash'"
                active-class="my-menu-link"
            >
                <q-item-section avatar>
                    <q-icon name="fas fa-qrcode" />
                </q-item-section>

                <q-item-section>Scan QR Code</q-item-section>
            </q-item>

            <q-item
                clickable
                v-ripple
                :active="link === 'trash'"
                @click="link = 'trash'"
                active-class="my-menu-link"
            >
                <q-item-section avatar>
                    <q-icon name="search" />
                </q-item-section>

                <q-item-section>Search Restaurant</q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item-label header>User</q-item-label>
            <q-item
                clickable
                v-ripple
                :active="link === 'settings'"
                @click="link = 'settings'"
                active-class="my-menu-link"
            >
                <q-item-section avatar>
                    <q-icon name="fas fa-sign-out-alt" />
                </q-item-section>

                <q-item-section>Logout</q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>

<script>
export default {
    name: 'TheNavigationDrawer',
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
