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
                <div class="row">
                    <div class="col">
                        <q-item-label>{{ restaurant.name }}</q-item-label>
                    </div>
                </div>

                <q-item-label caption class="item__description"
                    >{{ restaurant.description }}
                </q-item-label>

                <q-item-label caption class="item__description"
                    >{{ restaurant.website }}
                </q-item-label>


                <!-- <q-item-section class="block item__tags">
                    <rating>{{ item.rating }}</rating>
                    <group-dish>2</group-dish>
                    <spicy-tag v-if="item.is_spicy" />
                    <vegan-tag v-if="item.is_vegan" />
                    <vegetarian-tag v-else-if="item.is_vegetarian" />
                </q-item-section>-->
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

    created(){
        console.log(this.restaurant);
    }
};
</script>

<style lang="scss" scoped>
.item {
    align-items: center;

    &__tags {
        margin-top: 10px;
    }

    &__description {
        margin: 10px 0;
    }

    &__thumbnail {
        border-radius: 50% !important;
    }
}

.q-item__section--thumbnail img {
    width: 96px;
    height: 96px;
    border-radius: 4px;
}



.q-item {
    padding: 25px 16px;
}

.q-separator--horizontal.q-separator--item-inset {
    margin-left: 110px;
    width: calc(100% - 110px);
}
</style>



