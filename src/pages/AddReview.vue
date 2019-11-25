<template>
    <q-page class="q-pa-md text-center full-height">
        <q-form @submit="onSubmit">
            <div class="text-center full-width" v-if="dish">
                <q-item-section thumbnail class="items-center">
                    <img :src="dish.thumbnail" class="item__thumbnail" />
                </q-item-section>
                <q-item-label class="text-h5 q-mt-md">
                    {{ dish.name }}
                </q-item-label>
            </div>
            <div>
                <q-item-section>
                    <div class="row">
                        <div class="col">
                            <q-rating
                                v-model="formData.rating"
                                size="3em"
                                :max="5"
                                class="q-ma-md"
                            />
                        </div>
                    </div>
                </q-item-section>
            </div>
            <div class="reviewAs">
                <q-input
                    :value="user"
                    filled
                    type="text"
                    class="q-mt-md"
                    label="Reviewing as"
                    disable
                />
            </div>

            <q-input
                v-model="formData.description"
                filled
                type="textarea"
                @focusin="showSubmit = false"
                @focusout="showSubmit = true"
                class="q-mt-md user"
                label="Share details of your experience"
                lazy-rules
                :rules="[
                    val => (val && val.length > 0) || 'Please type something',
                ]"
            />

            <div class="text-left">
                <q-btn
                    color="primary"
                    flat
                    icon="camera_enhance"
                    label="Add Photo"
                    @click="addPhotoDialog = true"
                />
            </div>

            <q-page-sticky position="bottom" expand :offset="[18, 18]">
                <q-btn
                    v-show="showSubmit"
                    color="primary"
                    label="Send"
                    class="full-width q-ma-md"
                    type="submit"
                    size="lg"
                />
            </q-page-sticky>
        </q-form>

        <q-dialog v-model="addPhotoDialog">
            <q-card style="width: 300px">
                <q-card-section>
                    <div class="text-h6">Sorry</div>
                </q-card-section>

                <q-card-section>
                    This feature will be available in the next version of this
                    app.
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
    name: 'AddReview',
    data() {
        return {
            formData: {
                rating: 1,
                description: null,
                user: {
                    id: 1,
                },
            },
            showSubmit: true,
            addPhotoDialog: false,
        };
    },
    async created() {
        if (this.isUserLoggedIn === false) {
            this.$q.notify({
                message: `Please login before creating your review.`,
                icon: 'warning',
                timeout: 1000,
            });

            this.$router.push({
                name: 'review.login',
                query: {
                    redirectTo: this.$route.path,
                    backTo: this.$router.resolve(this.backRoute).resolved.path,
                },
            });
        }

        if (this.dish === null) {
            await this.fetchDish(this.$route.params.dishId);
        }

        this.formData.user.id = this.auth.id;
        this.$emit('updateTitle', 'Add Review');
        this.$emit('updateBackRoute', this.backRoute);
    },
    methods: {
        ...mapActions({
            createReview: 'createReview',
            fetchDish: 'fetchDish',
        }),
        async onSubmit() {
            let isSuccess = await this.createReview({
                dishId: this.$route.params.dishId,
                data: this.formData,
            });

            if (isSuccess) {
                this.$router.push(this.backRoute);
                this.$q.notify('Review successfully created!');
                return;
            }

            this.$q.notify('There was an error, please try again!');
        },
    },
    computed: {
        ...mapGetters(['isUserLoggedIn']),
        ...mapState({
            auth: state => state.login,
            dish: state => state.dish.dish,
        }),
        backRoute() {
            return {
                name: 'restaurant.menu.dish',
                params: {
                    restaurantId: this.$route.params.restaurantId,
                    dishId: this.$route.params.dishId,
                },
                query: {
                    tab: 'reviews',
                },
            };
        },
        user() {
            return this.auth.username + ' <' + this.auth.email + '>';
        },
    },
};
</script>

<style lang="scss">
.reviewAs .q-field--filled .q-field__control {
    background: #fff !important;
}
</style>
