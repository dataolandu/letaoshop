<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>

export default {
    mounted () {
      this.getUser();
      this.getCartNum();
    },
    methods: {
      //登录后用户信息已经存储到vuex里面了，所以直接跳转到index的话，index是可以直接拿到vuex里面state保存的数据的，而当用户刷新页面时，vuex会被情况，所以当我们第一次进入商城时就发送一次获取用户信息的请求
      //进入页面获取一次用户数据，当登录后将数据保存到vuex中()
      getUser(){
        this.$http.get('/user').then( (res) => {
          console.log(res);
          this.$store.dispatch('saveUsername',res.username);
        })
      },
      getCartNum(){
        this.$http.get('/carts/products/sum').then( res => {
          this.$store.dispatch('saveCartcount',res);
        })
      }
    }
}
</script>

<style lang="scss">
@import "/src/assets/scss/config.scss";
@import "/src/assets/scss/base.scss";
@import "/src/assets/scss/reset.scss";

</style>
