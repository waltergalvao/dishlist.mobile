<script src="../../../../../tray/spa/src/vuex/modules/ticket.js"></script>
<template>
    <div>
        <q-item>
            <q-item-section avatar>
                <q-avatar rounded>
                    <img
                        src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
                    />
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <div class="row">
                    <div class="col">
                        <q-item-label>Dish Name</q-item-label>
                    </div>
                    <div class="col">
                        <q-rating :value="3" size="1.5em" readonly />
                    </div>
                </div>
                <q-item-label caption
                    >O hambúrguer (do inglês hamburger), também conhecido como
                    hamburgo e hamburguesa, sanduíche de carne é carne
                    (principalmente de carne bovina, mas também de frango moído.
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
        image: {
            type: String,
            required: false
        }
    }
};
</script>

<style lang="scss">
.q-rating__icon {
    text-shadow: none !important;
}
</style>
