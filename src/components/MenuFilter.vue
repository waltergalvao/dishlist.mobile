<template>
    <div class="filter text-center">
        <q-btn-dropdown
            color="white"
            text-color="black"
            label="Filters"
            class="shadow-5"
            @click="card = true"
        >
        </q-btn-dropdown>

        <q-dialog v-model="card">
            <q-card>
                <q-card-section>
                    <div class="text-subtitle1">Categories</div>
                    <div class="filter__options">
                        <q-checkbox
                            v-for="category in categories"
                            :key="category.id"
                            v-model="selectedCategories"
                            :val="category.id"
                            :label="category.name"
                            class="filter__checkbox"
                        />
                    </div>
                </q-card-section>

                <q-card-section>
                    <div class="text-subtitle1">Traits</div>
                    <div class="filter__options">
                        <q-checkbox
                            v-for="tag in tags"
                            :key="tag.id"
                            v-model="selectedTags"
                            :val="tag.id"
                            :label="tag.name"
                            class="filter__checkbox"
                        />
                    </div>
                </q-card-section>

                <q-separator />

                <q-card-actions align="around">
                    <q-btn flat round v-close-popup color="grey-7"
                        >Cancel</q-btn
                    >
                    <q-btn flat color="primary" v-close-popup @click="filter"
                        >Filter</q-btn
                    >
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'MenuFilter',
    data() {
        return {
            card: false,
            selectedTags: [],
            selectedCategories: [],
        };
    },
    props: {
        tags: {
            type: Array,
            default: () => [],
        },
        categories: {
            type: Array,
            required: true,
        },
    },
    created() {
        this.selectedTags = this.filteredTags;
        this.selectedCategories = this.filteredCategories;
    },
    methods: {
        ...mapActions({
            filterMenu: 'filterMenu',
        }),
        filter() {
            this.filterMenu({
                categories: this.selectedCategories,
                tags: this.selectedTags,
            });
        },
    },
    computed: {
        ...mapState({
            filteredCategories: state => state.menu.filteredCategories,
            filteredTags: state => state.menu.filteredTags,
        }),
    },
};
</script>

<style lang="scss">
.filter {
    width: 100vw;
    padding: 10px;

    &__options {
        display: grid;
        grid-gap: 0px 10px;
        grid-template-columns: 1fr 1fr;
    }

    &__checkbox {
        .q-checkbox__label {
            color: $grey-7;
        }
    }
}
</style>
