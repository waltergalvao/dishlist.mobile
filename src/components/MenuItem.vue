<template>
    <div>
        <q-item class="item" clickable v-ripple>
            <q-item-section thumbnail>
                <img :src="item.thumbnail" />
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

                <q-rating
                    :value="item.rating"
                    icon="star_border"
                    icon-selected="star"
                    style="margin-top: 5px;"
                />

                <q-item-label caption class="item__description"
                    >{{ item.short_description }}
                </q-item-label>

                <q-item-section class="block item__tags">
                    <average-time> {{ item.average_time }} min </average-time>
                    <spicy-tag v-if="item.is_spicy" />
                    <vegan-tag v-if="item.is_vegan" />
                    <vegetarian-tag v-else-if="item.is_vegetarian" />
                </q-item-section>
            </q-item-section>
        </q-item>

        <q-separator />
    </div>
</template>

<script>
import SpicyTag from "./_dumb/VSpicyTag";
import VeganTag from "./_dumb/VVeganTag";
import VegetarianTag from "./_dumb/VVegetarianTag";
import AverageTime from "./_dumb/VAverageTime";

export default {
    name: "DishItem",
    components: { AverageTime, VegetarianTag, VeganTag, SpicyTag },
    props: {
        item: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss">
.item {
    &__tags {
        margin-top: 10px;
    }

    &__description {
        margin-top: 10px;
    }
}

.q-item__section--thumbnail img {
    width: 96px;
    height: 96px;
    border-radius: 4px;
}

.q-rating__icon {
    text-shadow: none !important;
    color: #ccc;
}

.q-rating__icon--active {
    color: $yellow;
}

.q-item {
    padding: 25px 16px;
}

.q-separator--horizontal.q-separator--item-inset {
    margin-left: 110px;
    width: calc(100% - 110px);
}
</style>
