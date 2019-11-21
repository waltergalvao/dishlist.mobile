<template>
    <q-page>
        Hiiii
    </q-page>
</template>
<script>
export default {
    name: 'Contact',
    created() {
        this.$emit('updateTitle', 'Contact');
    },
    data() {
        return {
            counter: 0,
        };
    },
};
</script>

<style lang="scss"></style>
