<template>
    <q-page>
        Add Review
    </q-page>
</template>

<script>
export default {
    name: 'AddReview',
    created() {
        this.$emit('updateBackRoute', {
            name: 'restaurant.menu.dish',
            params: {
                restaurantId: this.$route.params.restaurantId,
                dishId: this.dish.id,
            },
        });
    },
};
</script>

<style lang="scss"></style>
