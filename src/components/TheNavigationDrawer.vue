<template>
    <q-drawer :value="isOpen" elevated class="drawer">
        <q-list>
            <q-item-label header>Navigation</q-item-label>
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
                <q-item-section avatar>
                    <q-icon name="school" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Docs</q-item-label>
                    <q-item-label caption>quasar.dev</q-item-label>
                </q-item-section>
            </q-item>
            <q-item
                clickable
                tag="a"
                target="_blank"
                href="https://github.quasar.dev"
            >
                <q-item-section avatar>
                    <q-icon name="code" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Github</q-item-label>
                    <q-item-label caption
                        >github.com/quasarframework</q-item-label
                    >
                </q-item-section>
            </q-item>

            <q-item
                to="/"
                clickable
                exact
                
            >
                <q-item-section avatar>
                    <q-icon name="home" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Home</q-item-label>
                   
                </q-item-section>
            </q-item>
        

             <q-item
                to="/place/:placeName/searchRestaurant/"
                clickable
                exact
                
            >
                <q-item-section avatar>
                    <q-icon name="search" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>Search Restaurant</q-item-label>
                   
                </q-item-section>
            </q-item>
        
            
           
        </q-list>
    </q-drawer>
</template>

<script>
export default {
    name: 'TheNavigationDrawer',
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
