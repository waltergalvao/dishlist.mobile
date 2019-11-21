// This Component is responsible for the Login process

<template>
    <q-page>
        <div class="q-pa-xs fixed-center">
            <div class="app-logo-container">
                <img src="~assets/app-logo.png" />
            </div>

            <!--  Login Form -->
            <q-form @submit.prevent="onSubmit" class="q-gutter-xs">
                <!--
                    Email component
                    This component will validate if the email string is valid.
                 -->
                <dish-email-input v-model="email"> </dish-email-input>

                <!-- Password field with validation -->
                <q-input
                    filled
                    type="password"
                    v-model="password"
                    label="Your password *"
                    lazy-rules
                    :rules="[
                        val =>
                            (val !== null && val !== '' && val.length > 5) ||
                            'Type your password (at least 6 characters)',
                    ]"
                />

                <q-btn-group spread>
                    <q-btn label="Log In" type="submit" color="primary" />
                </q-btn-group>
            </q-form>
        </div>
    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import DishEmailInput from '../components/input/DishEmailInput';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    created() {
        this.$emit('updateTitle', 'Login');

        if (this.$route.query.backTo) {
            this.$emit('updateBackRoute', this.$route.query.backTo);
        }
    },
    components: {
        DishEmailInput,
    },
    methods: {
        ...mapActions({}),
        onSubmit() {
            // Submit function
            this.$store
                .dispatch('doLogin', {
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    // If login is ok, check if this page was called from review. If true, redirect to that page, if not, go to home
                    if (this.$route.query.redirectTo) {
                        // Greetings
                        this.$q.notify({
                            message: `Welcome ${
                                this.auth.username
                            }! You may now create your review.`,
                            icon: 'thumb_up',
                            timeout: 1000,
                        });

                        this.$router.push(this.$route.query.redirectTo);
                        return;
                    }

                    // redirect to home
                    this.$router.push({
                        name: 'home',
                    });

                    // Greeting the user
                    this.$q.notify({
                        message: `Hello ${this.auth.username}. Welcome back!`,
                        icon: 'tag_faces',
                        timeout: 1000,
                    });
                })
                .catch(error => {
                    // show error message
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.message
                    ) {
                        this.$q.notify({
                            message: error.response.data.message,
                            icon: 'error',
                            color: 'negative',
                        });
                    } else {
                        this.$q.notify({
                            message: 'Error found. Please try again!',
                            icon: 'error',
                            color: 'negative',
                        });
                    }
                });
        },
    },
    computed: {
        ...mapState({
            auth: state => state.login,
        }),
    },
};
</script>

<style scoped lang="scss"></style>
