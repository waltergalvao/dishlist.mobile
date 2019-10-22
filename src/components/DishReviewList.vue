<template>
    <div class="reviews">
        <div class="text-orange no-margin text-h3 text-center">
            <q-icon name="star" /> {{ dish.rating }}
        </div>
        <q-list>
            <div v-for="review in reviewPagination.reviews" :key="review.id">
                <q-item>
                    <q-item-section>
                        <q-item-label>{{ review.description }}</q-item-label>
                        <q-item-label caption
                            >{{ review.user.name }} at
                            {{ review.date_created }}</q-item-label
                        >
                    </q-item-section>

                    <q-item-section side top>
                        <div class="text-orange">
                            <q-icon name="star" />
                            {{ review.rating }}
                        </div>
                    </q-item-section>
                </q-item>

                <q-separator spaced inset />
            </div>
        </q-list>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'DishReviewList',
    props: {
        dish: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            tab: 'details',
        };
    },
    async created() {
        await this.fetchReviews({
            dishId: 1,
            page: 1,
        });
    },
    methods: {
        ...mapActions({
            fetchReviews: 'fetchReviews',
        }),
    },
    computed: {
        ...mapState({
            reviewPagination: state => state.review.reviewsPagination,
        }),
    },
};
</script>

<style scoped lang="scss">
.reviews {
}
</style>
