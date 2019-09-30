<template>
    <q-page-sticky position="top" class="full-width">
        <div class="options text-center">
            <q-btn-dropdown
                color="white"
                text-color="black"
                label="Filters"
                rounded
                class="shadow-10"
            >
                <q-list>
                    <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                            <q-item-label>Photos</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                            <q-item-label>Videos</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                            <q-item-label>Articles</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
        </div>
    </q-page-sticky>
</template>

<script>
export default {
    name: 'MenuOptions',
};
</script>

<style scoped lang="scss">
.options {
    width: 100vw;
    padding: 10px;
}
</style>
