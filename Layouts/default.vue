<template>
  <div>
      <TheHeader @open="openDrawer"/>
      <TheSidebar :drawer="drawer" @close="closeDrawer"/>
      <div class="main">
         <nuxt/>
      </div>
      
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
import TheSidebar from '@/components/layouts/TheSidebar'


export default {
    data: () => ({
        drawer: false,
    }),
    components: {
        TheHeader,
        TheSidebar,
    },
    methods: {
        openDrawer() {
            this.drawer = true
            console.log(this.drawer)
        },
        closeDrawer() {
            this.drawer = false
        }
    }

}
</script>

<style>

</style>