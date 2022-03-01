<template>
  <div class="container">
      <div class="category">
          <div class="category__header">
              <h3 class="category__cth3 text text--category">category</h3>
              <h1 class="category__p title title--cat">We Offer Best Services</h1>
          </div>
        <div class="contgrid">
            <div class="category__container contitem" v-for="(item,index) in items" :key="index">
              <img :src="`/images/${item.img}`" alt="" class="contitem__img">
              <h3 class=" title title--cathead">
                  {{item.head}}
              </h3>
              <p class="conitem__p title title--catdes">
                  {{item.body}}
              </p>
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
                {img:"Group48.svg", head:"Calculated Weather", body:"Built Wicket longer admire do barton vanity itself do in it."},
                {img:"Group48.svg", head:"Calculated Weather", body:"Built Wicket longer admire do barton vanity itself do in it."},
                {img:"Group48.svg", head:"Calculated Weather", body:"Built Wicket longer admire do barton vanity itself do in it."},
                {img:"Group48.svg", head:"Calculated Weather", body:"Built Wicket longer admire do barton vanity itself do in it."},
            ]
        }
    }

}
</script>

<style lang="scss">
.category{
    position: relative;
    &__header{
        text-align: center;
    }

    &::before {
        content: '';
        display: block;
        width: 150px;
        height: 150px;
        background-image: url('/images/Group4.svg');
        position: absolute;
        top: 0;
        right: 0;
         @media screen and (max-width:714px){
            height: 100px;
            width: 100px;
            }
    }

    &__header{
        margin-bottom: 34px;
    }
}
.contitem{  
    padding:10px 20px;
    border-radius: 10px;
   
    @media screen and (max-width:714px){
           text-align: center;
            }  
    &__img{
        height: 78px;
        width: 92px;
    }
    &:hover{
        box-shadow: 3px 8px 10px #000;
    }

}
.contgrid{
    display: grid;
    grid-template-columns: repeat(4,1fr) ;
    grid-gap:20px;
    padding-bottom: 33px;
    @media screen and (max-width:714px){
           display: grid;
           grid-template-columns: 1fr;
           grid-gap: 20px;
           align-content: center;
            }
}
</style>