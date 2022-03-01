<template>
<div>
    <HomeHero/>
    <HomeCategory/>
    <TopSelling/>
    <EasyandFast/>
    <!-- <DataFetch/> -->
</div>
</template>

<script>
import HomeHero from "@/components/views/Home/HomeHero.vue"
import HomeCategory from "@/components/views/Home/HomeCategory.vue"
import TopSelling from "@/components/views/Home/TopSelling.vue"
import EasyandFast from "@/components/views/Home/EasyandFast.vue"

export default {
  name: 'IndexPage',
  components:{
    HomeHero,
    HomeCategory,
    TopSelling,
    EasyandFast,
  }
}
</script>
