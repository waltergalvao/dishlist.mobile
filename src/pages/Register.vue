// This Component is responsible for the registration process

<template>
    <q-page>
        <div class="q-pa-xs fixed-center">
            <!-- Application Logo -->
            <div class="app-logo-container">
                <img src="~assets/app-logo.png" />
            </div>

            <!-- Register Form -->
            <q-form @submit.prevent="onSubmit" class="q-gutter-xs">
                <!-- Name Input -->
                <q-input
                    filled
                    type="text"
                    v-model="username"
                    label="Your name *"
                    lazy-rules
                    :rules="[
                        val =>
                            (val !== null && val !== '') ||
                            'Please type your name',
                    ]"
                />

                <!--
                    Email component with validation
                 -->
                <dish-email-input v-model="email"></dish-email-input>

                <!-- Password input -->
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

                <!-- Submit button -->
                <q-btn-group spread>
                    <q-btn label="Register" type="submit" color="primary" />
                </q-btn-group>
            </q-form>
        </div>
    </q-page>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import DishEmailInput from '../components/input/DishEmailInput';

export default {
    name: 'Register',
    data() {
        return {
            username: '',
            email: '',
            password: '',
        };
    },
    created() {
        this.$emit('updateTitle', 'Register');
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
            // Form submission
            this.$store
                .dispatch('doRegister', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    // Register process is ok. Check if this page was called from review. If true, redirect to that page, if not, go to home
                    if (this.$route.query.redirectTo) {
                        // Greetings
                        this.$q.notify({
                            message: `Welcome to DishList ${
                                this.auth.username
                            }! You may now create your review.`,
                            icon: 'tag_faces',
                            timeout: 1000,
                        });

                        this.$router.push(this.$route.query.redirectTo);
                        return;
                    }

                    // if user is registered ok, redirect to the home page
                    this.$router.push({
                        name: 'home',
                    });

                    // Greeting the user...
                    this.$q.notify({
                        message: `Hello ${this.username}. Welcome to DishList!`,
                        icon: 'tag_faces',
                        timeout: 1000,
                    });
                })
                .catch(error => {
                    // Show error message
                    let msg = new String(error);
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.message
                    ) {
                        msg = error.response.data.message;
                    }
                    this.$q.notify({
                        message: msg,
                        icon: 'error',
                        color: 'negative',
                    });
                });
        },
    },
    computed: {
        ...mapState({}),
    },
};
</script>
