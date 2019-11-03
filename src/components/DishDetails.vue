<template>
    <q-page class="details">
        <div class="row details__main">
            <div class="col details__price">
                $23.50
            </div>
            <div class="col">
                <average-time class="details__average-time"
                    >5 mins</average-time
                >
            </div>
            <div class="col">
                <q-chip
                    dense
                    icon="users"
                    class="details__serve"
                    style="margin-left: 0;"
                    color="white"
                >
                    2 persons
                </q-chip>
            </div>
        </div>
        <p class="no-margin">{{ dish.description }}</p>
        <spicy-tag v-if="dish.is_spicy" />
        <vegan-tag v-if="dish.is_vegan" />
        <vegetarian-tag v-else-if="dish.is_vegetarian" />

        <q-list
            bordered
            separator
            class="details__ingredients"
            v-if="dish.ingredients.length"
        >
            <q-item
                v-for="(ingredient, index) in dish.ingredients"
                :key="index"
            >
                <q-item-section>{{ ingredient.name }}</q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
import VeganTag from './_dumb/VVeganTag';
import VegetarianTag from './_dumb/VVegetarianTag';
import SpicyTag from './_dumb/VSpicyTag';
import AverageTime from './_dumb/VAverageTime';
import {mapState} from 'vuex';

export default {
    name: 'DishDetails',
    components: {AverageTime, SpicyTag, VegetarianTag, VeganTag},
    computed: {
        ...mapState({
            dish: state => state.dish.dish,
        }),
    },
};
</script>

<style scoped lang="scss">
.details {
    &__main {
        padding: 0 0 10px 0;
    }

    &__price {
        font-size: 2em;
        color: green;
    }

    &__average-time {
        font-size: 1.3em;
    }

    &__serve {
        font-size: 1.3em;
    }

    &__ingredients {
        margin-top: 10px;
    }

    &__item {
        padding: 12px 0;
    }
}
</style>
