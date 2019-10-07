<template>
    <q-page id="searchRestaurantScreen" >

        <img src="~assets/bg-search-screen.jpg"
        style="height: 100%; opacity: 0.8; ">
       
        

        <div class="fixed-center">

                

                <q-btn @click="scanQRcode()" :dense="$q.screen.xs" no-caps label="Scan QR Code" icon-right="img:statics/icons/qr-code.svg" color="secondary" class="setWidth" text-color="color:rgba(0, 0, 0, 0.6)">

                </q-btn>

                <br><br>OR<br>

                 <q-input v-model="restaurantName"  label="Restaurant Name.."  class="setWidth">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                </q-input>

                <br>
                
                 <q-btn @click="searchRestaurant()" width="60%" :dense="$q.screen.xs" no-caps label="Search"  color="secondary"  text-color="color:rgba(0, 0, 0, 0.6)">

                </q-btn>
                
      
        </div>   
    </q-page>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    export default {
    data(){
        return{
                restaurantName:''
             }
        },
    
    name: 'Restaurant',
    
    async created() {
        await this.fetchRestaurant();
        
    },
   
    methods: {
        ...mapActions({
            fetchRestaurant: 'fetchRestaurant',
        }),
        searchRestaurant(){
            this.$router.push("/place/:placeName/menu")

        },

        scanQRcode(){

        }
    },
    computed: {
        ...mapState({
        }),
    },
};
</script>

<style scoped lang="scss">
    #searchRestaurantScreen{
        text-align: center;
        height: 1vh;
        background-color:white;
    }
  
  #scanQRBtn{
      color:rgba(0, 0, 0, 0.6)
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
