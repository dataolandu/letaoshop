<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
// import storage from '../src/storage/index'
// import jsonp from 'jsonp'

export default {
    mounted () {
      this.$http.get('/user/login').then(res => {
        console.log(res);
      })
    }
}
</script>

<style>

</style>
