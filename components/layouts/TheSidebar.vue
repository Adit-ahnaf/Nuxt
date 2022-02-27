<template>
  <div class="sidebar">
      <div class="sidebar__header">
        <img src="/images/Logo.png" alt="" class="sidebar__logo">
        <img src="/icons/close.svg" alt="" class="sidebar__icon">
      </div>

      <div class="sidebar__menu sdmenu">
          <ul class="sdmenu__list">
              <li class="sdmenu__item text text--menu" v-for="(item,index) in slidelistitem" :key="index">{{item.itemname}}</li>
          </ul>
          <button class=" slidebtn btn btn--menu">Add</button>
      </div>

      
  </div>
</template>

<script>
export default {
    data(){
        return{
            slidelistitem:[
            {itemname:"Destinations"},
            {itemname:"Hotels"},
            {itemname:"Flights"},
            {itemname:"bookings"},
            {itemname:"Login"}
        ]
        }
    }

}
</script>

<style lang="scss" scoped>
.sidebar{
    position: fixed;
    top:0px;
    right: 0;
    width: 100vw;
    height: 100vh;
    margin: 20px 0 ;
    padding: 0 20px;
    
    &__header{
        display:flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    &__menu{
        margin: 20px 0;
    
    }

    &__logo{
        @media screen and (max-width: 768px) {
            width: 101px;
            object-fit: contain;
        }
    }

    &__icon{
        @media screen and (max-width: 768px) {
            width: 22px;
        }
    }

}
.sdmenu{
    &__list{
        padding: 0 20px;
    }
    &__item{
        margin:20px 0;
        &:hover{
            box-shadow: 3px 8px;
        }
    }
}
.slidebtn{
    width: 100%;
}
</style>