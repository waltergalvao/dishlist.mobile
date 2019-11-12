<template>
    <router-link
        :to="{
            name: 'restaurant.menu',
            params: {restaurantId: restaurant.id},
        }"
        tag="div"
    >
        <q-item class="item" clickable v-ripple>
            <q-item-section thumbnail>
                <img :src="restaurant.thumbnail" class="item__thumbnail" />
            </q-item-section>
            <q-item-section>
                <div class="row title">
                    <div class="col">
                        <q-item-label>{{ restaurant.name }}</q-item-label>
                    </div>
                </div>
                <q-item-label caption class="item__description dark"
                    >{{ restaurant.street_name }} {{ restaurant.city }}
                </q-item-label>

                <q-item-label
                    lines="2"
                    caption
                    class="item__description summary"
                    >{{ restaurant.description }}
                </q-item-label>

                <a
                    v-bind:href="restaurant.website"
                    class="item__description websiteLink"
                >
                    {{ restaurant.website }}
                </a>
            </q-item-section>
        </q-item>

        <q-separator />
    </router-link>
</template>

<script>
export default {
    name: 'RestaurantDetails',
    props: {
        restaurant: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.dark {
    color: #000;
    font-weight: strong;
    font-size: 0.9rem;
}

.summary {
    padding-top: 4px;
}

.title {
    margin-bottom: 0;
    font-size: 1.2rem;
}
</style>
