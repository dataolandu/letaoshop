<template>
  <div class="login">
    <div class="lg-header">
      <div class="container">
        <img src="/imgs/login-logo.png" alt="" />
      </div>
    </div>
    <div class="lg-body">
      <div class="container">
        <div class="login-form">
          <div class="form-header">
            <span>账号登陆</span>
          </div>
          <div class="form-input">
            <div class="account">
              <input type="text" placeholder="账号/邮箱" v-model="username"/>
            </div>
            <div class="password">
              <input type="password" placeholder="密码" v-model="password"/>
            </div>
          </div>
          <div class="form-submit" @click="login">登录</div>
          <div class="register">
            <a href="/#/">还没有账号？去注册</a>
          </div>
        </div>
      </div>
    </div>
    <div class="lg-footer"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username: '',
            password: '',
            userId: '',
        }
    },
    methods:{
        login(){
            this.$http.post('/user/login',{
                username: this.username,
                password: this.password
            }).then(res => {
                console.log(res);
                this.$cookie.set('userId',res.id,{ expires: 7 });
                //这里还没把登录的用户信息保存到vuex里，先留着，待做-----------------------------------
                this.$store.dispatch('saveUsername', res.username);
                this.$router.push({
                    name: 'index',
                });
            })
        }
    }
};
</script>

<style lang="scss">
@import "/src/assets/scss/config.scss";
.login {
  .lg-header {
    height: 110px;
  }
  .lg-body {
    height: 590px;
    background-color: #ccc;
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      position: relative;
      .login-form {
        position: absolute;
        top: 40px;
        right: 0;
        width: 410px;
        height: 510px;
        background-color: #fff;
        .form-header {
          height: 70px;
          padding-top: 30px;
          font-size: 24px;
          color: $colorA;
          text-align: center;
          box-sizing: border-box;
        }
        .form-input {
          input {
            width: 350px;
            height: 50px;
            padding: 10px;
            box-sizing: border-box;
            outline: none;
            border: 1px solid #ccc;
          }
          .account {
            width: 350px;
            margin: 20px auto 15px;
          }
          .password {
            width: 350px;
            margin: 0 auto 20px;
          }
        }
        .form-submit {
          width: 350px;
          height: 50px;
          line-height: 50px;
          margin: 0 auto;
          background-color: $colorA;
          color: $colorG;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
        }
        .register {
          margin: 10px;
          text-align: center;
          a {
            color: $colorE;
          }
        }
      }
    }
  }
}
</style>