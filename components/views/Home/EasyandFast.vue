<template>
    <div class="container">
            <div class="easy">
                    <h3 class="easy__title title title--selhead">Easy and fast</h3>
            </div>
            <div class="easy__flex card">
                     <div class="plan">
                             <h1 class="easy__flex__h1 title title--easy">Book Your Next Trip In 3 Easy Steps</h1>
                             <div class="plan__des">
                                      <SelectionIcon class="plan-icn btn btn--plan"/>
                                     <div class="plan__head">
                                             <h3 class="plan__title title title--selhead">choose destination</h3>
                                             <div class="plan__p title title--homeherop">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </div>
                                     </div>
                             </div>
                     </div>
                    
                    <div class="card">
                            <img src="/images/girl.png" alt="" class="card__img">
                            <h2 class="card__head title title--card">Trip To Greece</h2>
                            <div class="card__date carditem">
                                    <div class="carditem__grid">
                                            <h3 class="carditem__date title title--selhead">14-29 June</h3>
                                            <h3 class="carditem__name title title--selhead">by Robibin Josheph</h3>
                                    </div>
                                    <div class="carditem__icon">
                                               <component v-for="(items,index) in icons" :key="index" class="svg-icn btn btn--easy" :is="items.name"></component>
                                    </div>
                                    <div class="carditem__people people">
                                            <img src="/icons/building.svg" alt="" class="people__icon">
                                            <h3 class="people__name title title--selhead">24 people going</h3>
                                            <img src="/icons/heart.svg" alt="" class="people__heart">
                                    </div>

                            </div>
                        
                    </div>
            </div>
    </div>
</template>

<script>
import LeafIcon from '@/components/icons/LeafIcon.vue';
import SelectionIcon from '@/components/icons/SelectionIcon.vue';
export default {
components:{
        LeafIcon,
        SelectionIcon
},

data(){
        return{
                icons:[{name:"LeafIcon"},{name:"LeafIcon"}]
        }

},

}
</script>

<style lang="scss">
.easy{
        &__flex{
                display:grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 25px;
        }
        &__flex__h1{
                    margin-bottom: 27px;
        }
        &__title{
                margin-bottom: 21px;
        }
}
// .card{
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         grid-gap: 10px;
// }
.carditem{
        &__icon{
                    display: grid;
                    grid-template-columns: 81px 100px 76px;
                    padding-bottom: 18px;
        }
        &__lf{
                height: 30px;
                width:30px;
                
        }
        &__grid{
                    display: grid;
                    grid-template-columns: 114px 1fr;
                    padding-bottom: 18px;
        }
        

}


.people{
        display: grid;
        grid-template-columns: 46px 162px 100px;
        align-items: center;
}
.card{
        &__img{
                    margin-bottom: 17px;
        }
        &__head{
                padding-bottom: 12px;
        }
        @media screen and (max-width:714px){
           display: grid;
           grid-template-columns: 1fr;
           grid-gap: 30px;
           align-content: center;
            }
}
.svg-icn {
        width: 18px;
        height: 18px;
}
.plan{
       &__des{
               display: grid;
               grid-template-columns: 85px 275px;
               align-items: center;
       }
}
.planicn{
        width: 30px;
        height: 30px;
}
</style>