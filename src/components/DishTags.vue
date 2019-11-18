<template>
    <div>
        <tag v-for="tag in tags" class="reset-left" :key="tag.id" :color="'#' + tag.color">
            {{ tag.name }}
        </tag>
    </div>
</template>

<script>
import Tag from './_dumb/VTag';
export default {
    name: 'DishTags',
    components: {Tag},
    props: {
        tags: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.details {
    &__main {
        padding: 0 0 10px 0;
    }

    &__price {
        font-size: 2em;
        color: green;
    }

    &__average-time {
        font-size: 1.3em;
    }

    &__serve {
        font-size: 1.3em;
    }

    &__ingredients {
        margin-top: 10px;
    }

    &__item {
        padding: 12px 0;
    }
}
</style>
