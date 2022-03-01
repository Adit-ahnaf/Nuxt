<template>
  <div class="homehero container">
      <div class="homehero__text">
          <h3 class="homehero__text__texth3 title title--homeheroh3">BEST DESTINATION AROUND THE WORLD</h3>
          <h1 class="homehero__text__texth1 title title--homeheroh1">
             Travel, enjoy
                and live a new
                and full life
          </h1>
          <p class="homehero__text__textp title title--homeherop">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div class="homehero__button">
              <button class="homehero__button1 btn btn--hero1">
                  Find Out more
              </button>
              <button class="homehero__button2 btn btn--hero2">
                  <img src="/images/Polygon.svg" alt="" class="homehero__button2img">
              </button>
          </div>
      </div>
      <div class="homehero__img">
          <img src="/images/Traveller1.png" alt="" class="homehero__img1">

      </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    computed: {
        ...mapState(['users'])
    },
methods:{
    ...mapActions(['getUsers'])
},
async mounted() {
    await this.getUsers()
    console.log(this.users)
}
}
</script>

<style lang="scss">

.homehero{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media screen and (max-width:768px){
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 52px;
            padding-top:70px;
                }

    &__button{
        display: flex;
        column-gap: 10px;
        align-items: center;
    }
   
    &__button2img{
        height: 18px;
        width:18px;
        

    }
    &__text{
        &__texth3{
            margin: 20px 0;
        }
        &__texth1{
            margin-bottom: 20px;
        }
         &__textp{
            margin-bottom: 20px;

        }
    }

    &__img1{
         @media screen and (max-width:1440px){
            width: 600px ;
        } 
        @media screen and (max-width:768px){
            width: 100% ;
        }
    }


}
</style>