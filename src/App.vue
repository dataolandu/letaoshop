<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import storage from '../src/storage/index'
export default {
    mounted () {
      // var res = storage.getItem('user').username;
      // storage.setItem('a',1,);
      storage.clear('a')
      // console.log(res);
    }
}
</script>

<style>

</style>
