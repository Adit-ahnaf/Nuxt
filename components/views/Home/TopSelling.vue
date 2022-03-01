<template>
  <div class="selling container">
      <div class="selling_text">
          <h3 class="selling_h3 title title--selhead">Top Selling</h3>
          <h1 class="selling_h1 title title--cat">Top Destinations</h1>
      </div>

      <div class="selling_card">
          <div class="selling_carditems scard" v-for="(item,index) in items" :key="index">
              <div class="scover">
                  <img :src="`/images/${item.img}`" alt="" class="scard_img">
              </div>
            <div class="scard_head1">
                <h3 class="scard_h31 text text--category">{{item.name}}</h3>
                <h3 class="scard_price text text--category">{{item.price}}</h3>
            </div>
            <div class="scard_head2 text text--category">
                <img src="/icons/navigation1.svg" alt="" class="scard_icon">
                <h3 class="scard_trip">{{item.trip}}</h3>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {img:"small.jpg", name:"Rome,Italy", price:"$5,42", trip:"10 Days Trip"},
                {img:"small.jpg", name:"Rome,Italy", price:"$5,42", trip:"10 Days Trip"},
                {img:"small.jpg", name:"Rome,Italy", price:"$5,42", trip:"10 Days Trip"},
                
            
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
.selling{
        margin-bottom: 61px;
    &_text{
        text-align: center ;
    }
    &_card{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap:20px;
        @media screen and (max-width:714px){
           display: grid;
           grid-template-columns: 1fr;
           grid-gap: 20px;
           align-content: center;
            }
    }
    &_h1{
        padding-bottom: 26px;
    }
}

.scard{
    box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: 0.3);
    border-radius: 10px;
    
    &_head1{
        display: flex;
        column-gap: 20px;
        padding: 0px 20px;
    }
    &_head2{
        display: flex;
        column-gap: 20px;
        padding: 0px 10px;
        margin-bottom: 15px;
    }
    &_img{
        position:  absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    
}
.scover{
    position: relative;
    width: 100%;
    padding-top: 75%;
    
}

</style>