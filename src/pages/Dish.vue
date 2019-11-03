<template>
    <q-page class="dish" v-if="dish">
        <dish-header
            :photos="dish.photos"
            :dish-name="dish.name"
            :rating="dish.rating"
        />

        <q-tabs v-model="tab" class="" align="justify" narrow-indicator>
            <q-tab name="details" label="Details" />
            <q-tab name="reviews" label="Reviews" />
            <q-tab name="photos" label="Photos" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="details">
                <dish-details :dish="dish" />
            </q-tab-panel>

            <q-tab-panel name="reviews">
                <dish-review-list :dish="dish" />
            </q-tab-panel>

            <q-tab-panel name="photos" class="no-padding">
                <dish-gallery />
            </q-tab-panel>
        </q-tab-panels>
    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import DishHeader from '../components/DishHeader';
import DishDetails from '../components/DishDetails';
import DishReviewList from '../components/DishReviewList';
import DishGallery from '../components/DishGallery';

export default {
    name: 'Dish',
    components: {DishGallery, DishReviewList, DishDetails, DishHeader},
    async created() {
        await this.fetchDish(this.$route.params.dishId);
        this.$emit('updateTitle', this.dish.name);
        this.$emit('updateBackRoute', {
            name: 'restaurant.menu',
            params: {
                restaurantId: this.$route.params.restaurantId,
                dishId: this.dish.id,
            },
        });
    },
    data() {
        return {
            tab: 'details',
        };
    },
    methods: {
        ...mapActions({
            fetchDish: 'fetchDish',
        }),
    },
    computed: {
        ...mapState({
            dish: state => state.dish.dish,
        }),
    },
};
</script>

<style scoped lang="scss"></style>
