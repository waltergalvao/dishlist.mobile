<template>
    <q-page id="searchRestaurantScreen" >

        <img src="~assets/bg-search-screen.jpg"
        style="height: 100%; opacity: 0.8; ">
       
        

        <div class="fixed-center">

                <div id="qrCode" width="90%">
                    
                    <img v-on:click="scanQRcode" src="../statics/icons/qr-code.png" width="80%">
                
                </div>

                <q-btn @click="scanQRcode()" :dense="$q.screen.xs" no-caps label="Scan QR Code" icon-right="img:statics/icons/qr-code.svg" color="secondary" class="setWidth" text-color="color:rgba(0, 0, 0, 0.6)">

                </q-btn>

                <br><br>OR<br>

                

                <br>
                
                 <q-btn @click="searchRestaurant()" width="60%" :dense="$q.screen.xs" no-caps label="Search"  color="secondary"  text-color="color:rgba(0, 0, 0, 0.6)">

                </q-btn>
                
      
        </div>   
    </q-page>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    
    //import dishlistApiRequests from '../boot/axios';
    
    
    export default {
    
    data(){
        return{
                restaurantId : 1,
                restaurantList:[]

             }
        },
    
    name: 'Restaurant',
    
    async created() {
       // await this.fetchRestaurant();
       
     
        
    },
   
    methods: {
        ...mapActions({
            SearchMenu: 'SearchMenu',
        }),
        searchRestaurant(){
            this.$router.push("/place/:placeName/menu")

        },



        

        scanQRcode(){
           
            this.$store.dispatch('SearchMenu',{
           'restaurantId': this.restaurantId
       })

          
        }
    },
    computed: {
        ...mapState({
            featuredItems: state => state.menu.featuredItems,
            place: state => state.menu.place,
            categories: state => state.menu.categories,
        }),
    },
};
</script>

<style lang="scss">
    #searchRestaurantScreen{
        text-align: center;
        height: 1vh;
        background-color:white;
    }
  
 
    
.setWidth{
    width: 100%;
    font-weight: strong;
}

.fixed-center{
    width: 80%;
    position:absolute;
    z-index:999;
}
    

</style>
