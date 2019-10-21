<template>
    <q-btn :to="to" flat icon="arrow_back_ios" class="back" :ripple="false" />
</template>

<script>
export default {
    name: 'BackButton',
    props: {
        to: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.back {
    padding: 4px;
}
</style>
