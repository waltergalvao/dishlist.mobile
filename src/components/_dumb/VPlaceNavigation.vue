<template>
    <q-page-sticky position="bottom" class="full-width">
        <q-tabs v-model="tab" dense class="bg-grey-1 place-nav">
            <q-tab name="menu" icon="menu_book" label="Menu" />
            <q-tab name="restaurant" icon="restaurant" label="Restaurant" />
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
}
</style>
