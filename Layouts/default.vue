<template>
  <div>
      <!-- <TheHeader/> -->
      <TheSidebar/>
      <div class="main">
         <nuxt />
      </div>
      
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
import TheSidebar from '@/components/layouts/TheSidebar'

export default {
    components: {
        TheHeader,
        TheSidebar
    }

}
</script>

<style>

</style>