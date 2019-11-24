<template>
    <q-page>
        <div class="contact-parent">
            <div class="contact-child1"></div>
            <div class="contact-child2">
                <h5><b>Contact Us</b></h5>
                <p>Call or email us to get in touch</p>
                <q-list dense padding>
                    <q-item class="contact-detail">
                        <img
                            class="contact-icon"
                            src="~assets/contact-email.png"
                        />
                        <q-item-section>
                            info@dishlist.ca
                        </q-item-section>
                    </q-item>

                    <q-item class="contact-detail">
                        <img
                            class="contact-icon"
                            src="~assets/contact-call.png"
                        />
                        <q-item-section>
                            604.323.5511
                        </q-item-section>
                    </q-item>
                    <q-item class="contact-detail">
                        <img
                            class="contact-icon"
                            src="~assets/contact-web.png"
                        />
                        <q-item-section>
                            http://dishlist.wmdd.ca/
                        </q-item-section>
                    </q-item>
                    <q-item class="contact-detail">
                        <img
                            class="contact-icon"
                            src="~assets/contact-location.png"
                        />
                        <q-item-section>
                            100 West 49th Avenue, Vancouver, BC
                            <br />Canada V5Y 2Z6
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-page>
</template>
<script>
export default {
    name: 'Contact',
    created() {
        this.$emit('updateTitle', 'Contact');
    },
    data() {
        return {
            counter: 0,
        };
    },
};
</script>

<style lang="scss">
.contact-container {
    position: relative;
    top: 50px;
    height: 80vh;
    width: 100%;
}
.contact-child1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border: 10px solid $primary;
}
.contact-child2 {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 60%;
    background-color: white;
    padding-top: 10px;
    padding-left: 10px;
    > h5 {
        margin: 0;
        padding: 10px 0 20px 0;
    }
}
.contact-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.contact-detail {
    margin-bottom: 20px;
    padding-left: 0px !important;
}
</style>
