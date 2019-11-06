<template>
    <router-link
        :to="{
            name: 'restaurant.menu.dish',
            params: {restaurantId: restaurant.id, dishId: item.id},
        }"
        tag="div"
    >
        <q-item class="item" clickable v-ripple>
            <q-item-section thumbnail>
                <img :src="item.thumbnail" class="item__thumbnail" />
            </q-item-section>
            <q-item-section>
                <div class="row">
                    <div class="col">
                        <q-item-label>{{ item.name }}</q-item-label>
                    </div>
                    <div class="col-auto text-right">
                        <q-item-label>${{ item.price }}</q-item-label>
                    </div>
                </div>

                <q-item-label caption class="item__description"
                    >{{ item.short_description }}
                </q-item-label>

                <q-item-section class="block item__tags">
                    <rating>{{ item.rating }}</rating>
                    <group-dish>2</group-dish>
                    <dish-tags :tags="item.tags"/>
                </q-item-section>
            </q-item-section>
        </q-item>

        <q-separator />
    </router-link>
</template>

<script>
import Rating from './_dumb/VRating';
import GroupDish from './_dumb/VGroupDish';
import DishTags from "./DishTags";

export default {
    name: 'DishItem',
    components: {DishTags, GroupDish, Rating},
    props: {
        item: {
            type: Object,
            required: true,
        },
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
</style>
