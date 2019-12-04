<template>
    <q-page>
        <div class="q-pa-md">
            <q-card>
                <q-card-section>
                    <p>Below is a list of images used</p>
                    <p><a href="#">Reference 1</a></p>
                    <p><a href="#">Reference 2</a></p>
                    <p><a href="#">Reference 3</a></p>
                    <p><a href="#">Reference 4</a></p>
                    <p><a href="#">Reference 5</a></p>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script>
    export default {
        name: 'Credits',
        created() {
            this.$emit('updateTitle', 'Credits');
        },
    };
</script>
