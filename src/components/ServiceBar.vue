<template>
  <div class="service">
    <div class="container">
      <ul>
        <li>
          <div class="bar-msg">
            <span class="img-setting"></span>
            <span class="msg">预约维修服务</span>
          </div>
        </li>
        <li>
          <div class="bar-msg">
            <span class="img-7day"></span>
            <span class="msg">7天无理由退货</span>
          </div>
        </li>
        <li>
          <div class="bar-msg">
            <span class="img-15day"></span>
            <span class="msg">15天免费换货</span>
          </div>
        </li>
        <li>
          <div class="bar-msg">
            <span class="img-post"></span>
            <span class="msg">满150元包邮</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.service {
  .container {
    height: 90px;
    ul {
      line-height: 90px;
      li {
        width: 25%;
        display: inline-block;
        .bar-msg {
          text-align: center;
          position: relative;
          &::after {
            content: "";
            border-left: 1px solid #ccc;
            height: 20px;
            position: absolute;
            top: 35px;
            right: 0;
          }
          span {
            vertical-align: middle;
          }
          .img-setting {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../assets/imgs/icon-setting.png") no-repeat 50%;
            background-size: contain;
          }
          .img-7day {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../assets/imgs/icon-7day.png") no-repeat 50%;
            background-size: contain;
          }
          .img-15day {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../assets/imgs/icon-15day.png") no-repeat 50%;
            background-size: contain;
          }
          .img-post {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url("../assets/imgs/icon-post.png") no-repeat 50%;
            background-size: contain;
          }
          .msg {
            font-size: 18px;
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>