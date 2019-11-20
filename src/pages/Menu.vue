<template>
    <q-page class="menu">
        <q-page-sticky position="top" v-if="categories">
            <q-tabs
                class=" shadow-5 bg-white"
                v-model="currentCategory"
                indicator-color="primary"
                active-color="primary"
                stretch
                :value="null"
                style="width: 100vw;"
            >
                <q-tab
                    v-for="(category, index) in categories"
                    :label="category.name"
                    :tabindex="index"
                    :key="category.id"
                    :name="'category-' + category.id"
                    @click="changeTab('category-' + category.id)"
                />
            </q-tabs>
            <menu-filter :tags="tags" :categories="allCategories" />
        </q-page-sticky>

        <menu-featured v-if="featuredItems.length && restaurant" />

        <div v-if="categories">
            <q-list>
                <div
                    v-for="(category, key) in categories"
                    ref="categories"
                    :key="category.id"
                    :id="'category-' + category.id"
                >
                    <div :key="'label' + key" class="menu__category">
                        {{ category.name }}
                        <q-img
                            src="statics/category-separator.svg"
                            class="menu__category-separator"
                        ></q-img>
                    </div>

                    <template
                        v-for="(item, index) in filterItemsByTags(category)"
                    >
                        <menu-item
                            :item="item"
                            :class="['q-pa-sm', {'first-item': index === 0}]"
                            :restaurant="restaurant"
                            :key="item.id"
                        />

                        <q-separator
                            v-if="
                                index + 1 < filterItemsByTags(category).length
                            "
                            :key="index"
                        />
                    </template>

                    <p
                        v-if="filterItemsByTags(category).length === 0"
                        class="text-center text-weight-light"
                    >
                        No results found, try changing the filters.
                    </p>
                </div>
            </q-list>
        </div>
    </q-page>
</template>

<script>
import MenuItem from '../components/MenuItem';
import {mapActions, mapState} from 'vuex';
import MenuFilter from '../components/MenuFilter';
import MenuFeatured from '../components/MenuFeatured';
import _ from 'lodash';

export default {
    name: 'PageIndex',
    components: {MenuFeatured, MenuFilter, MenuItem},
    data() {
        return {
            filter: null,
            toggle: false,
            currentCategory: null,
        };
    },
    async created() {
        this.$q.loading.show();
        await this.fetchMenu(this.$route.params.restaurantId);
        this.$emit('updateTitle', this.restaurant.name);
        this.currentCategory = 'category-' + this.categories[0].id;
        document.addEventListener('scroll', this.handleScroll);
        this.$q.loading.hide();
    },
    destroyed() {
        document.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        ...mapActions({
            fetchMenu: 'fetchMenu',
        }),
        isInViewport(el) {
            var top = el.offsetTop;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
            }

            return (
                top >= window.pageYOffset &&
                top + height <= window.pageYOffset + window.innerHeight
            );
        },
        handleScroll() {
            // Only changes when the current category is no longer in Viewport
            if (this.isInViewport(this.currentCategoryElement)) {
                return;
            }

            this.$refs.categories.find(element => {
                if (this.isInViewport(element)) {
                    this.currentCategory = element.id;
                    return true;
                }
            });
        },
        changeTab(elementId) {
            let vm = this;

            this.$scrollTo(document.getElementById(elementId), 300, {
                onStart() {
                    document.removeEventListener('scroll', vm.handleScroll);
                },
                onDone() {
                    document.addEventListener('scroll', vm.handleScroll);
                },
            });
        },
        filterItemsByTags(category) {
            if (this.isFilteringTag === false) {
                return category.items;
            }

            return category.items.filter(this.correspondsTagFilter);
        },
        correspondsTagFilter(item) {
            if (this.isFilteringTag === false) {
                return true;
            }

            for (let i = 0; i < item.tags.length; i++) {
                if (this.filteredTags.includes(item.tags[i].id)) {
                    return true;
                }
            }

            return false;
        },
    },
    computed: {
        ...mapState({
            featuredItems: state => state.menu.featuredItems,
            restaurant: state => state.menu.place,
            allCategories: state => state.menu.categories,
            filteredCategories: state => state.menu.filteredCategories,
            filteredTags: state => state.menu.filteredTags,
        }),
        currentCategoryElement() {
            return document.getElementById(this.currentCategory);
        },
        tags() {
            let tags = _.map(this.allCategories, category => {
                return _.map(category.items, item => {
                    return item.tags;
                });
            });

            tags = _.flattenDeep(tags);
            tags = _.uniqBy(tags, 'id');

            return tags;
        },
        isFilteringTag() {
            return this.filteredTags.length > 0;
        },
        categories() {
            if (this.filteredCategories.length === 0) {
                return this.allCategories;
            }

            return this.allCategories.filter(category => {
                return this.filteredCategories.includes(category.id);
            });
        },
    },
};
</script>

<style scoped lang="scss">
.q-page-sticky {
    z-index: 5000;
}

.menu {
    padding: 45px 0 0 0;

    &__category {
        padding: 20px 10px 0 10px;
        color: $primary;
        text-align: center;
        font-size: 1.7em;

        &-separator {
            position: relative;
            margin-top: -30px;
        }
    }
}
    .first-item {
        padding-top: 0 !important;
    }
</style>
