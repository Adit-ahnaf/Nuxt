<template>
  <div class="container">
      Login Page
      <br/>
      <form @submit.prevent="userLogin">
         <label>username</label>
      <br/>
      <!-- <input type="text" v-model="user.username"/>  -->
      <br/>
      <label>email</label>
      <br/>
      <input type="text" v-model="user.identifier"/>
      <br/>
      <label>pass</label>
      <br/>
     <input type="password" v-model="user.password"/>
     <button type="submit">login</button>
      </form>
  </div>
</template>

<script>
export default {
methods:{
   async userLogin(){
         try {
        let response = await this.$auth.loginWith('local', { data: this.user })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
   }
},
data(){
    return {
        user:{
            identifier:'',
            password:''
        }
    }

}

}
</script>

<style>

</style>