<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
// import storage from '../src/storage/index'
import jsonp from 'jsonp'
export default {
    mounted () {
      // var res = storage.getItem('user').username;
      // storage.setItem('a',1,);
      // storage.clear('a')
      // console.log(res);
      let url = '/api/u/loading';
      jsonp(url,(err,res)=>{
        console.log(res);
      })
    }
}
</script>

<style>

</style>
