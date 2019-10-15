<template>
    <q-chip
        outline
        class="no-border"
        dense
        icon="group"
    >
        <slot/>
    </q-chip>
</template>

<script>
export default {
    name: 'GroupDish',
};
</script>
