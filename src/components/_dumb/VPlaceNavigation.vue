<template>
    <q-page-sticky position="bottom" class="full-width place-nav">
        <q-tabs v-model="tab" dense class="bg-grey-2 text-primary full-width">
            <q-tab name="menu" icon="mail" label="Menu" />
            <q-tab name="restaurant" icon="alarm" label="Restaurant" />
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
.place-nav > div {
    width: 100%;
}
</style>
