<template>
    <q-page class="dish" v-if="dish">
        <dish-header :photos="dish.photos" :dish-name="dish.name"/>


        <q-tabs
            v-model="tab"
            class=""
            align="justify"
            narrow-indicator
        >
            <q-tab name="details" label="Details" />
            <q-tab name="reviews" label="Reviews" />
            <q-tab name="photos" label="Photos" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="">
            <q-tab-panel name="details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="reviews">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="photos" class="no-padding">
                <q-banner dense class="bg-blue-3 text-white">
                    Those photos are uploaded by customers and contain unmoderated data.
                </q-banner>

                <div class="q-pa-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </q-tab-panel>
        </q-tab-panels>


    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import DishHeader from "../components/DishHeader";

export default {
    name: 'Dish',
    components: {DishHeader},
    async created() {
        await this.fetchDish();
        this.$emit('updateTitle', this.place.name);
    },
    data() {
        return {
            tab: 'details'
        };
    },
    methods: {
        ...mapActions({
            fetchDish: 'fetchDish',
        }),
    },
    computed: {
        ...mapState({
            dish: state => state.dish.dish,
        }),
    },
};
</script>

<style scoped lang="scss"></style>
