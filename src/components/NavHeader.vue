<template>
  <div class="header">
    <div class="header-top">
      <div class="container">
        <div class="con-left">
          <a href="javascript:;">快乐淘</a>
          <a href="javascript:;">LETO</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="con-right">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="cartbox"
            ><span class="icon-cart"></span> 购物车</a
          >
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="btm-logo">
          <a href="javascript:;" class="logo"></a>
        </div>
        <div class="btm-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="child-menu">
              <ul>
                <li v-for="item in phoneList" :key="item.id" class="product">
                  <a :href="'/#/product/'+ item.id" target="_blank">
                    <div class="pro-img">
                      <img
                        :src="item.mainImage"
                        :alt="item.subtitle"
                      />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="child-menu"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="child-menu">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="../assets/imgs/nav-img/nav-3-1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="../assets/imgs/nav-img/nav-3-2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">2999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="../assets/imgs/nav-img/nav-3-3.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">3699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="../assets/imgs/nav-img/nav-3-4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">4699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="../assets/imgs/nav-img/nav-3-5.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">7799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="../assets/imgs/nav-img/nav-3-6.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视大师 82英寸</div>
                    <div class="pro-price">9999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="btm-search">
          <input type="search" class="search" />
          <input type="submit" class="submit" value="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data(){
    return {
      phoneList:[]
    }
  },
  mounted(){
    this.getphoneList();
  },
  methods:{
    getphoneList(){
      this.$http.get('/products',{
        params:{
          categoryId: '100012',
          pageSize: 6
        }
      }).then((res) => {
        this.phoneList = res.list;
        // console.log(this.phoneList);
        // console.log(res.list);
        // console.log(res);
      })
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .header-top {
    background-color: #333333;
    height: 39px;
    .container {
      @include flex();
      a {
        color: #b0b0b0;
        line-height: 39px;
        margin-right: 10px;
      }
      .con-right {
        width: 200px;
        height: 39px;
        @include flex();
        .cartbox {
          display: inline-block;
          width: 110px;
          height: 39px;
          background-color: #ff6600;
          text-align: center;
          color: #ffffff;
          margin: 0;
          .icon-cart {
            @include bgImg(16px, 12px, "./../assets/icon-cart-checked.png");
          }
        }
      }
    }
  }
  .header-bottom {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .btm-logo {
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        overflow: hidden;

        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: "";
            @include bgImg(55px, 55px, "./../assets/imgs/mi-logo.png");
            transition: all 0.3s;
          }
          &::after {
            content: "";
            @include bgImg(55px, 55px, "./../assets/imgs/mi-home.png");
          }
          &:hover::before {
            margin-left: -55px;
          }
        }
      }
      .btm-menu {
        margin-left: -200px;
        .item-menu {
          display: inline-block;
          line-height: 112px;
          margin-right: 15px;
          cursor: pointer;
          span {
            font-size: 18px;
          }
          &:hover {
            color: $colorA;
            .child-menu {
              height: 220px;
              opacity: 1;
            }
          }
          .child-menu {
            width: 1226px;
            position: absolute;
            top: 112px;
            left: 0;
            text-align: center;
            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
            background-color: #ffffff;
            z-index: 10;
            opacity: 0;
            height: 0;
            transition: all 0.5s;
            overflow: hidden;
            .product {
              width: 16.6%;
              height: 220px;
              float: left;
              position: relative;
              &::after {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
              }
              &:last-child::after {
                border: none;
              }
              a {
                display: inline-block;
                .pro-img {
                  line-height: 0;
                  img {
                    width: auto;
                    height: 111px;
                    margin-top: 25px;
                  }
                }
                .pro-name {
                  margin-top: 10px;
                  color: $colorB;
                  font-weight: bold;
                  line-height: 16px;
                }
                .pro-price {
                  margin: 0 0 25px 0;
                  color: $colorA;
                  line-height: 16px;
                }
              }
            }
          }
        }
      }
      .btm-search {
        @include flex();
        .search {
          width: 296px;
          height: 50px;
          border: 1px solid #e0e0e0;
          font-size: 18px;
          &::-webkit-search-cancel-button {
            display: none;
          }
        }
        .submit {
          border: 1px solid #e0e0e0;
          @include bgImg(
            50px,
            50px,
            "./../assets/imgs/icon-search.png",
            20px,
            inline
          );
          cursor: pointer;
        }
      }
    }
  }
}
</style>