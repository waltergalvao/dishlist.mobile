<template>
    <q-page class="menu">
        <q-page-sticky position="top">
            <q-tabs
                class="text-accent shadow-5 bg-white"
                v-model="currentCategory"
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
            <menu-filter v-show="showFilter" />
        </q-page-sticky>

        <menu-featured v-if="featuredItems.length" />

        <div class="q-pa-sm" v-if="categories">
            <q-list>
                <div
                    v-for="(category, key) in categories"
                    ref="categories"
                    :key="category.id"
                    :id="'category-' + category.id"
                >
                    <q-item-label header :key="'label' + key">
                        {{ category.name }}
                    </q-item-label>
                    <menu-item
                        v-for="item in category.items"
                        :item="item"
                        :restaurant="place"
                        :key="item.id"
                    />
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

export default {
    name: 'PageIndex',
    components: {MenuFeatured, MenuFilter, MenuItem},
    data() {
        return {
            filter: null,
            toggle: false,
            currentCategory: null,
            showFilter: false,
        };
    },
    async created() {
        await this.fetchMenu(this.$route.params.restaurantId); // @TODO Change for id found in route
        this.$emit('updateTitle', this.place.name);
        this.currentCategory = 'category-' + this.categories[0].id;
        document.addEventListener('scroll', this.handleScroll);
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
            if (window.pageYOffset) {
                this.showFilter = true;
            } else {
                this.showFilter = false;
            }

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
    },
    computed: {
        ...mapState({
            featuredItems: state => state.menu.featuredItems,
            place: state => state.menu.place,
            categories: state => state.menu.categories,
        }),
        currentCategoryElement() {
            return document.getElementById(this.currentCategory);
        },
    },
};
</script>

<style scoped lang="scss">
.q-page-sticky {
    z-index: 5000;
}

.menu {
    padding: 45px 0 40px 0;
}
</style>
