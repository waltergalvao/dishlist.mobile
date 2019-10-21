<template>
    <div class="options text-center" v-show="showFilter">
        <q-btn-dropdown
            color="white"
            text-color="black"
            label="Filters"
            rounded
            class="shadow-5"
        >
            <q-list>
                Filters
            </q-list>
        </q-btn-dropdown>
    </div>
</template>

<script>
export default {
    name: 'MenuFilter',
    data() {
        return {
            showFilter: false,
        };
    },
    created() {
        document.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        document.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset > 100) {
                this.showFilter = true;
            } else {
                this.showFilter = false;
            }
        },
    },
};
</script>

<style scoped lang="scss">
.options {
    width: 100vw;
    padding: 10px;
}
</style>
