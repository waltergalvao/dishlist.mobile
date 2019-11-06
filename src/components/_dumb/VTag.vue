<template>
    <q-chip outline class="no-border" :style="{color: color}" dense>
        <slot></slot>
    </q-chip>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        color: {
            type: String,
            required: true,
        },
    },
};
</script>
