<template>
  <div class="footer">
    <div class="container">
      <div class="logo">
        <img src="../assets/imgs/logo-footer.png" alt="">
        <p>leto</p>
      </div>
      <div class="main-msg">
        <a href="javascript:;">主页</a><span>|</span>
        <a href="javascript:;">Vue全栈课程</a><span>|</span>
        <a href="javascript:;">React全家桶课程</a><span>|</span>
        <a href="javascript:;">微信支付专项课程</a><span>|</span>
        <a href="javascript:;">配套课程：Java通用型支付+电商平台双系统实战</a>
      </div>
      <div class="order-msg">Copyright ©2020 All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss">
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
  .footer{
    overflow: hidden;
    text-align: center;
    height: 234px;
    background-color: #333;
    color: #999;
    font-size: 16px;
    border-top: 5px solid $colorA;
    .logo{
      margin: 45px 0 35px;
      img{
        width: 53px;
        height: 36px;
      }
      p{
        margin-top: 10px;
        
      }
    }
    .main-msg{
      a{
        text-decoration: none;
        color: #999;
        padding: 10px;
      }
    }
    .order-msg{
      margin: 10px 0;
    }
  }
</style>