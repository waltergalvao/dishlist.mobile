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

                <q-item-label caption class="item__description summary"
                    >{{ restaurant.description }}
                </q-item-label>

                <q-item-label caption class="item__description dark"
                    >{{ restaurant.website }}
                </q-item-label>
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
.q-item__section--thumbnail img {
    width: 96px;
    height: 96px;
    border-radius: 4px;
}

.q-item {
    padding: 25px 16px;
}

.dark {
    color: rgb(26, 26, 26);
}

.summary {
    padding-top: 4px;
}

.title {
    margin-bottom: 0;
}
</style>
