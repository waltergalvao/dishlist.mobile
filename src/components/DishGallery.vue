<template>
    <div class="gallery">
        <q-banner dense class="bg-blue-5 text-white" v-if="images.count > 0">
            Those photos are uploaded by customers and contain unmoderated data.
        </q-banner>

        <div class="gallery__photos" v-if="images.count > 0">
            <gallery
                :images="images"
                :index="index"
                @close="index = null"
                class="q-mt-sm"
            ></gallery>
            <div
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                class="photo gallery__thumbnail"
                :style="{
                    backgroundImage: 'url(' + image + ')',
                }"
            ></div>
        </div>
        <div v-else>
            <q-banner rounded class="bg-grey-3">
                No photos were found for this dish.
            </q-banner>
        </div>

        <q-page-sticky position="bottom-right" :offset="[25, 25]">
            <q-btn fab icon="add" color="accent" @click="addPhotoDialog = true" />
        </q-page-sticky>

        <q-dialog
            v-model="addPhotoDialog"
        >
            <q-card style="width: 300px">
                <q-card-section>
                    <div class="text-h6">Sorry</div>
                </q-card-section>

                <q-card-section>
                    This feature will be available in the next version of this app.
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import VueGallery from 'vue-gallery';
import _ from 'lodash';

export default {
    name: 'DishGallery',
    components: {
        gallery: VueGallery,
    },
    data() {
        return {
            index: null,
            addPhotoDialog: false,
        };
    },
    methods: {
        addPhoto() {
            alert('We do not support this feature yet');
        }
    },
    computed: {
        ...mapState({
            dish: state => state.dish.dish,
        }),
        images() {
            return _.map(this.dish.photos, 'url');
        },
    },
};
</script>

<style scoped lang="scss">
.gallery {
    &__photos {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    &__thumbnail {
        width: 100%;
        height: 200px;
        background-size: cover;
    }
}

#blueimp-gallery {
    margin-top: 0 !important;
}
</style>
