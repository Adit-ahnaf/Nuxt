<template>
  <div class="header">
      <div class="container header__wraper">
          <div class="header__logo">
              <img src="/images/Logo.png" alt="" class="header__logo__img">
          </div>
          <div class="header__menu d-flex">
              <ul class="header__menu__list mlist">
                  <li class="mlist__item" v-for="(item,index) in mlistitem" :key="index">
                      <nuxt-link class="mlist__item__link text text--menu" :to="item.itemname.toLowerCase()">{{item.itemname}}</nuxt-link>
                  </li>
              </ul>
              <button class="mlist__button btn btn--menu">Sign up</button>
              <div class="header__menu__lang hoveritems">
                  <div class="d-flex">
                      <h1 class="text text--menu">{{ selected }}</h1>
                      <img src="/icons/arrow-down.svg" alt="" class="drp-icn">
                  </div>

                  <ul class="hoveritems__list">
                      <li class="hoveritems__list__item" v-for="(name,index) in languagelist" :key="index" @click="selectLanguage(name.listname)">{{name.listname}}</li>
                  </ul>
                  
              </div>
          </div>

          <div class="header__mblmenu" @click="slideOpen">
              <img src="/icons/hamberger.svg" alt="" class="header__mblmenu__img">
          </div>

      </div>

  </div>
</template>

<script>
import TheSidebar from '@/components/layouts/TheSidebar';
export default {
components:{
    TheSidebar
},    
data(){
    return{
        mlistitem:[
            {itemname:"Destinations"},
            {itemname:"about"},
            {itemname:"Flights"},
            {itemname:"bookings"},
            {itemname:"Login"}
        ],
        selected: 'EN',
        languagelist:[
            {listname:"EN"},
            {listname:"BN"},
        ]
    }

},
methods:{
    selectLanguage(data){
        this.selected = data

    },
    slideOpen(){
        this.$emit('open')
    }

} 
}
</script>

<style lang="scss">
.header{
    &__wraper {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        align-items: center;
        padding: 10px 10px;

    @media screen and (max-width: 414px) {
        position: fixed;
        column-gap: 254px;
        background-color: beige;
        margin: 0px;
        z-index: 9;
        
        
    }
    }

    &__menu {
        @media screen and (max-width: 991px) {
            // background-color: yellow;
            display: none;
            
        }
    }
    &__mblmenu{
        display: none;
        @media screen and (max-width: 991px) {
            // background-color: yellow;
            display: block;
            
        }
    }
}
.mlist{
    display: flex;
    align-items: center;
    column-gap: 20px;
    &__button{
        margin:0 20px;
    }
    
}

.drp-icn {
    width: 18px;
    height: 18px;
}

.hoveritems {
    position: relative;
    padding: 25px 0;
    &:hover{
        .hoveritems__list{
            display: block;
        }
    }

    &__list {
        position: absolute;
        top: 70px;
        right:-15px;
        width:200px;
        background-color: rgba($color: $colorGrey, $alpha: 0.1);
        display: none;
        z-index: 99;

        &__item{
            padding: 15px;
            border-bottom: 1px solid $colorWhite;
        }
    }
}



</style>