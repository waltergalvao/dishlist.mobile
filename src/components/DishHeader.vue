<template>
    <div>
        <q-carousel
            arrows
            animated
            v-model="currentSlide"
            height="250px"
            class="photos"
            swipeable
            infinite
        >
            <q-carousel-slide
                v-for="(item, index) in photos"
                :key="index"
                class="photos__item"
                :name="index"
                :img-src="item"
            >
                <div
                    class="absolute-bottom custom-caption bg-dark-separator q-pa-sm photos__bg flex justify-between"
                >
                    <div class="text-h5 text-bold photos__heading">
                        {{ dishName }}
                    </div>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script>
export default {
    name: 'DishHeader',
    data() {
        return {
            currentSlide: 0,
        };
    },
    props: {
        photos: {
            type: Array,
            required: true,
        },
        dishName: {
            type: String,
            required: true
        }
    },
};
</script>

<style scoped lang="scss">
.photos {
    &__bg {
        //background: linear-gradient(to bottom, rgba(255,175,75,0) 0%, rgba(0,0,0,0.8) 100%) !important;
        background: linear-gradient(
            to bottom,
            rgba(255, 175, 75, 0) 0%,
            rgba(0, 0, 0, 0.7) 80%
        ) !important;
    }

    &__heading {
        padding-top: 25px;
        color: white;
    }
}
</style>
