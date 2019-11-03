<template>
    <q-page>
        <div class="q-pa-md fixed-center" style="max-width: 400px">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <dish-email-input v-model="email"></dish-email-input>

                <q-input
                    filled
                    type="password"
                    v-model="password"
                    label="Your password *"
                    lazy-rules
                    :rules="[
                        val =>
                            (val !== null && val !== '') ||
                            'Please type your password',
                    ]"
                />

                <div>
                    <q-btn label="Log In" type="submit" color="primary" />
                    <q-btn
                        label="Reset"
                        type="reset"
                        color="primary"
                        flat
                        class="q-ml-sm"
                    />
                </div>
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
    },
    components: {
        DishEmailInput,
    },
    methods: {
        ...mapActions({}),
        onReset() {
            this.email = null;
            this.password = null;
        },
        onSubmit() {
            this.$store
                .dispatch('doLogin', {
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    this.$router.push({
                        name: 'home',
                    });
                })
                .catch(error => {
                    let msg = error;
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.message
                    ) {
                        msg = error.response.data.message;
                    }
                    this.$q.notify(msg);
                });
        },
    },
    computed: {
        ...mapState({}),
    },
};
</script>

<style scoped lang="scss"></style>
