<template>
    <div>
        <q-item>
            <q-item-section avatar>
                <q-avatar rounded>
                    <img :src="item.thumbnail"/>
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <div class="row">
                    <div class="col">
                        <q-item-label>{{ item.name }}</q-item-label>
                    </div>
                    <div class="col">
                        <q-rating :value="item.rating" size="1.5em" readonly />
                    </div>
                </div>
                <q-item-label caption
                    >{{ item.short_description }}
                </q-item-label>

                <q-item-section class="block">
                    <q-chip color="secondary" dense icon="timer">
                        15 min
                    </q-chip>
                    <q-chip
                        color="primary"
                        text-color="white"
                        dense
                        icon="whatshot"
                    >
                        Spicy
                    </q-chip>
                </q-item-section>
            </q-item-section>
        </q-item>

        <q-separator spaced inset="item" />
    </div>
</template>

<script>
export default {
    name: "DishItem",
    props: {
        item: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss">
.q-rating__icon {
    text-shadow: none !important;
}
</style>
