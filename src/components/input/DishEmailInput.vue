<template>
    <q-input
        filled
        type="email"
        v-model="emailInputText"
        label="Your e-mail *"
        lazy-rules
        :rules="[val => emailValidation(val) || 'Please enter a valid e-mail']"

    />
</template>

<script>
export default {
    name: 'DishEmailInput',
    props: ['value'],
    computed: {
        emailInputText: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
    methods: {
        emailValidation(val) {
            /**
             * testing expressions with https://regex101.com/
             *  The following explanation was obtained with the help of https://regex101.com/
             *      \w+ matches any word character (equal to [a-zA-Z0-9_])
                    + Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
                    @ matches the character @ literally (case sensitive)
                    \w+ matches any word character (equal to [a-zA-Z0-9_])
                    + Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
                    . matches the character . literally (case sensitive)
                    Match a single character present in the list below [\.\w]+
                    + Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
                    . matches the character . literally (case sensitive)
                    \w matches any word character (equal to [a-zA-Z0-9_])
                    Match a single character present in the list below [a-z]+
                    + Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
                    a-z a single character in the range between a (index 97) and z (index 122) (case sensitive)
                    $ asserts position at the end of a line
            */
            let regularExpression = /^\w+@\w+.[.\w]+[a-z]+$/;
            val = val.toLowerCase();
            let validation =
                val !== null &&
                val !== '' &&
                val &&
                regularExpression.test(val);

            return validation;
        },
    },
};
</script>
