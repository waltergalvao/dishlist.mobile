<template>
    <div class="details">
        <div class="q-pa-md">
            <div class="row details__main items-center">
                <div class="col details__price">
                    $23.50
                </div>
                <div class="col text-center">
                    <average-time class="details__average-time no-margin"
                    >5 mins</average-time
                    >
                </div>
                <div class="col text-right">
                    <q-chip
                        dense
                        icon="users"
                        class="details__serve no-margin"
                        color="white"
                    >
                        2 persons
                    </q-chip>
                </div>
            </div>
            <p class="no-margin">{{ dish.description }}</p>
            <dish-tags :tags="dish.tags" />
        </div>

        <div class="details__ingredients-card shadow-2">
            <q-card>
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
            </q-card>
        </div>
    </div>
</template>

<script>
import AverageTime from './_dumb/VAverageTime';
import {mapState} from 'vuex';
import DishTags from './DishTags';

export default {
    name: 'DishDetails',
    components: {DishTags, AverageTime},
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

        &__ingredients-card {
            background: url("https://previews.123rf.com/images/rosadu/rosadu1801/rosadu180100004/92843856-pizza-ingredients-seamless-pattern-in-black-and-white.jpg");
            padding: 20px 50px;
        }

        &__ingredients {
            margin-top: 10px;
        }

        &__item {
            padding: 12px 0;
        }
    }
</style>
