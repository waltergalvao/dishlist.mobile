<template>
    <q-page>
        <q-list class="full-width">
            <q-expansion-item group="faq" class="" label="What is Dishlist?">
                <q-card>
                    <q-card-section>
                        Dishlist is a digital menu that helps you to better
                        understand restaurants’ menus by presenting several
                        details about each dish such as:
                        <ul>
                            <li>description</li>
                            <li>ingredients</li>
                            <li>
                                characteristics (e.g. spicy, vegan,
                                gluten-free…)
                            </li>
                            <li>photos</li>
                            <li>price</li>
                            <li>ratings & reviews</li>
                        </ul>
                        Still, the application is a great tool for restaurants
                        to have direct feedback from their customers about each
                        dish.
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
                group="faq"
                class=""
                label="Which restaurants use Dishlist?"
            >
                <q-card>
                    <q-card-section>
                        <p>
                            You will find a wide range of restaurants that are
                            participants in Dishlist, from different
                            nationalities and with various specialties.
                        </p>
                        <p>
                            To know if a specific restaurant is participating
                            you can check whether the restaurant presents the QR
                            code on its table or you can search the restaurant
                            by its name – you can find both functions in the
                            first screen of the app.
                        </p>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item group="faq" class="" label="Is Dishlist free?">
                <q-card>
                    <q-card-section>
                        Yes! Just download the app and enjoy your dish!
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
                group="faq"
                class=""
                label="How to find a restaurant?"
            >
                <q-card>
                    <q-card-section>
                        <p>
                            At Dishlist’s main screen you can choose between two
                            options to find a restaurant:
                        </p>
                        <ol>
                            <li>
                                Scan QR Code: choose this option if the
                                restaurant provides a QR Code on its table. Once
                                the code is scanned the full menu will be
                                displayed.
                            </li>
                            <li>
                                Search by name: choose this option if the QR
                                Code is not available.
                            </li>
                        </ol>
                        <p>
                            You can search the restaurant by typing its name (or
                            just part of the name). A list of results will
                            appear on the screen; just choose the desired
                            restaurant and the full menu will be displayed. You
                            can always find the options to search for a
                            restaurant inside the navigation drawer.
                        </p>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
                group="faq"
                class=""
                label="Understanding the Restaurant’s Menu"
            >
                <q-card>
                    <q-card-section>
                        <p>
                            When accessing a restaurant’s menu, you will see:
                        </p>
                        <ol>
                            <li>
                                Dishes People Love – best dishes rated by
                                customers, at the top of the menu;
                            </li>
                            <li>
                                Filter option – filter the menu based on your
                                preferences;
                            </li>
                            <li>
                                Categories of the menu – quickly jump to a
                                specific category of the menu (e.g. Starters,
                                Mains, Desserts, etc.);
                            </li>
                            <li>
                                Dishes – view all the dishes organized by
                                categories.
                            </li>
                        </ol>
                        <p>
                            You can check the name, short description, price,
                            how many people served by each dish and
                            characteristics (e.g. spicy, vegan, etc.) and see a
                            thumbnail image of the dish. When selecting a dish,
                            you will be redirected to a screen with more details
                            such as ingredients and waiting time to be served.
                        </p>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item group="faq" class="" label="Reviews & Photos">
                <q-card>
                    <q-card-section>
                        <p>
                            Selecting a dish from the menu will take you to a
                            screen that gives you more details about that dish
                            (Details tab).
                        </p>
                        <p>
                            On this screen, there are two more tabs available:
                            "Reviews" and "Photos".
                            <br />Reviews tab On the Reviews tab, you can check
                            the average rating and most recent reviews.<br />
                            Click on the + sign to add your rating & review.
                            <br />
                            If you are not already logged in, the app will ask
                            you to log in before you can enter a review.<br />
                            Your review will appear at the top of the review
                            list. <br />Photos tab On the Photos tab, you will
                            be able to see the pictures of that dish, shared by
                            other customers. Click on a thumbnail to zoom in.
                        </p>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item group="faq" class="" label="Sign Up & Log In">
                <q-card>
                    <q-card-section>
                        <p>
                            If you want to add a dish review you will be asked
                            to Sign-up (if you still don’t have an account) or
                            to Log in (if you already have an account).
                            <br />You can sign-up / log-in by entering your
                            email and the password of your choice. <br />You can
                            also Sign-up, Log In and Log Out using the available
                            options inside the navigation drawer.
                        </p>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-separator />
        </q-list>
    </q-page>
</template>

<script>
export default {
    name: 'Help',
    created() {
        this.$emit('updateTitle', 'Help');
    },
    data() {
        return {
            counter: 0,
        };
    },
};
</script>

<style lang="scss">
.q-expansion-item {
    background-color: $secondary;
}

.q-list {
    width: 80%;
}
</style>
