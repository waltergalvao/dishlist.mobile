<template>
    <div>
        <q-carousel
            arrows
            animated
            v-model="currentSlide"
            height="250px"
            class="featured"
            swipeable
            infinite
        >
            <q-carousel-slide
                v-for="(item, key) in featuredItems"
                :key="key"
                class="featured__item"
                :name="item.id"
                :img-src="item.thumbnail"
                @click="navigateToDish(item)"
            >
                <div
                    class="absolute-bottom custom-caption bg-dark-separator q-pa-sm featured__bg flex justify-between"
                >
                    <div class="text-h5 text-bold featured__heading">
                        {{ item.name }}
                    </div>

                    <q-chip
                        outline
                        class="no-border"
                        color="white"
                        text-color="white"
                        icon="favorite"
                        dense
                    >
                        People Love
                    </q-chip>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'MenuFeatured',
    data() {
        return {
            currentSlide: null,
        };
    },
    props: {
        restaurant: {
            type: Object,
            required: true,
        },
    },
    created() {
        this.currentSlide = this.featuredItems[0].id || null;
    },
    computed: {
        ...mapState({
            featuredItems: state => state.menu.featuredItems,
        }),
    },
    methods: {
        navigateToDish(item) {
            this.$router.push({
                name: 'restaurant.menu.dish',
                params: {restaurantId: this.restaurant.id, dishId: item.id},
            });
        },
    },
};
</script>

<style scoped lang="scss">
.options {
    width: 100vw;
    padding: 10px;
}

.featured {
    &__bg {
        //background: linear-gradient(to bottom, rgba(255,175,75,0) 0%, rgba(0,0,0,0.8) 100%) !important;
        background: linear-gradient(
            to bottom,
            rgba(255, 175, 75, 0) 0%,
            rgba(0, 0, 0, 0.7) 80%
        ) !important;
    }

    &__heading {
        color: white;
    }
}
</style>
