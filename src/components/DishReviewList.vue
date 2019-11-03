<template>
    <div class="reviews">
        <div
            class="text-orange no-margin text-h3 text-center flex justify-center "
        >
            <q-icon name="star" /> {{ dish.rating }}
        </div>
        <div class="text-weight-light text-center">
            {{ reviewData.pagination.total_reviews }} reviews
        </div>
        <q-list class="q-mt-sm">
            <div v-for="review in reviewData.reviews" :key="review.id">
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

        <div class="text-center">
            <q-spinner-dots color="primary" size="4em" v-show="isLoading" />
        </div>

        <q-btn
            label="Load More"
            @click="loadMore"
            v-if="hasMorePages"
            v-show="!isLoading"
            class="full-width"
            flat
        ></q-btn>
        <q-page-sticky position="bottom-right" :offset="[25, 25]">
            <q-btn fab icon="add" color="accent" @click="navigateToAddReview" />
        </q-page-sticky>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'DishReviewList',
    data() {
        return {
            tab: 'details',
            page: 1,
            isLoading: true,
        };
    },
    async created() {
        this.clearReviews();
        await this.fetchReviews({
            dishId: this.$route.params.dishId,
            page: this.page,
        });
        this.isLoading = false;
    },
    methods: {
        ...mapActions({
            fetchReviews: 'fetchReviews',
            clearReviews: 'clearReviews',
        }),
        navigateToAddReview() {
            this.$router.push({
                name: 'restaurant.review',
                params: {
                    restaurantId: this.$route.params.restaurantId,
                    dishId: this.dish.id,
                },
            });
        },
        async loadMore() {
            this.page++;
            this.isLoading = true;
            await this.fetchReviews({
                dishId: this.$route.params.dishId,
                page: this.page,
            });
            this.isLoading = false;
        },
    },
    computed: {
        ...mapState({
            reviewData: state => state.review,
            dish: state => state.dish.dish,
        }),
        hasMorePages() {
            return (
                this.reviewData.pagination.current_page <
                this.reviewData.pagination.total_pages
            );
        },
    },
};
</script>

<style scoped lang="scss">
.reviews {
}
</style>
