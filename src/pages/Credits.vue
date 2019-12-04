<template>
    <q-page>
        <div class="q-pa-md">
            <q-card>
                <q-card-section>
                    <p>Below is a list of images used</p>
                    <p>Photo by Hisu lee on Unsplash https://unsplash.com/photos/bQLCyj-9-tk</p>
                    <p>Photo by Toa Heftiba on Unsplash https://unsplash.com/photos/HPX4lhOoIDA</p>
                    <p>Photo by Debby Hudson on Unsplash https://unsplash.com/photos/bNcMqYvvIJI</p>
                    <p>Icon made by Alfredo Hernandez from www.flaticon.com  https://www.flaticon.com/free- icon/email_458866?term=mail&amp;page=5&amp;position=25</p>
                    <p>Icon made by Alfredo Hernandez from www.flaticon.com https://www.flaticon.com/free-icon/call_399403</p>
                    <p>Icon made by Alfredo Hernandez from www.flaticon.com https://www.flaticon.com/free-icon/www_403991?term=www&page=1&position=41</p>
                    <p>Icon made by Alfredo Hernandez from www.flaticon.com https://www.flaticon.com/free-icon/email_458866?term=mail&page=5&position=25 </p>
                    <p>Icon made by Freepik from www.flaticon.com https://www.flaticon.com/free-icon/arrow-point-to-right_32213?term=arrow&page=1&position=2 </p>
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
