<template>
    <q-page-sticky position="bottom" class="full-width shadow-10">
        <q-tabs v-model="tab" dense active-color="white" class="place-nav q-pa-sm"
                indicator-color="transparent">
            <q-tab name="home" icon="home" />
            <q-tab name="menu" icon="menu_book" />
            <q-tab name="restaurant" icon="info"/>
        </q-tabs>
    </q-page-sticky>
</template>

<script>
export default {
    name: 'PlaceNavigation',
    data() {
        return {
            tab: 'menu',
        };
    },
};
</script>

<style scoped>
.place-nav {
    width: 100vw !important;
    background: #303030;
    color:#909090;
}
</style>
