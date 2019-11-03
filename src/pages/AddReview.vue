<template>
    <q-page class="q-pa-sm text-center">
        <q-form @submit="onSubmit">
            <q-rating
                v-model="formData.rating"
                size="4em"
                :max="5"
                class="q-ma-md"
            />

            <q-input
                v-model="formData.description"
                filled
                type="textarea"
                class="q-mt-md"
                label="Review content"
                lazy-rules
                :rules="[
                    val => (val && val.length > 0) || 'Please type something',
                ]"
            />
            <q-btn
                color="primary"
                label="Send"
                class="full-width q-ma-md"
                type="submit"
                size="lg"
            />
        </q-form>
    </q-page>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'AddReview',
    data() {
        return {
            formData: {
                rating: 1,
                description: null,
                user: {
                    id: 1,
                },
            },
        };
    },
    created() {
        this.$emit('updateBackRoute', this.backRoute);
    },
    methods: {
        ...mapActions({
            createReview: 'createReview',
        }),
        async onSubmit() {
            let isSuccess = await this.createReview({
                dishId: this.$route.params.dishId,
                data: this.formData,
            });

            if (isSuccess) {
                this.$router.push(this.backRoute);
                this.$q.notify('Review successfully created!');
                return;
            }

            this.$q.notify('There was an error, please try again!');
        },
    },
    computed: {
        backRoute() {
            return {
                name: 'restaurant.menu.dish',
                params: {
                    restaurantId: this.$route.params.restaurantId,
                    dishId: this.$route.params.dishId,
                },
            };
        },
    },
};
</script>
