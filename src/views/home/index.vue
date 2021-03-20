<template>
  <div class="index">
    <div class="container">
      <div class="content">
        <div class="swiper-box">
          <div class="nav-menu">
            <ul>
              <li class="menu">
                <a class="menu-a" href="javascript:;">手机 电话卡</a>
                <div class="menu-child">
                  <ul v-for="(item, i) in menuList" :key="i">
                    <li v-for="(phone, j) in item" :key="j">
                      <a
                        :href="phone ? '/#/product/' + phone.id : ''"
                        target="_blank"
                      >
                        <img
                          :src="phone ? phone.img : '/imgs/nav-img/nav-2.png'"
                          alt=""
                        />
                        {{ phone ? phone.name : "小米手机" }}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu">
                <a class="menu-a" href="javascript:;">电视 盒子</a>
              </li>
              <li class="menu">
                <a class="menu-a" href="javascript:;">笔记本 平板</a>
              </li>
              <li class="menu">
                <a class="menu-a" href="javascript:;">家电 插线板</a>
              </li>
              <li class="menu">
                <a class="menu-a" href="javascript:;">出行 穿戴</a>
              </li>
              <li class="menu">
                <a class="menu-a" href="javascript:;">智能 路由器</a>
              </li>
              <li class="menu">
                <a class="menu-a" href="javascript:;">电源 配件</a>
              </li>
              <li class="menu">
                <a class="menu-a" href="javascript:;">生活 箱包</a>
              </li>
            </ul>
          </div>
          <!-- 轮播组件 -->
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(item, index) in swiperList" :key="index">
              <a :href="'/#/product/' + item.id" target="_blank"><img :src="item.img" /></a>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
            <div slot="pagination" class="swiper-pagination"></div>
            <div slot="button-prev" class="swiper-button-prev"></div>
            <div slot="button-next" class="swiper-button-next"></div>
          </swiper>
          <!-- -- -->
        </div>
        <div class="advert-box">
          <ul>
            <li v-for="(item, index) in advertList" :key="index">
              <a :href="'/#/product/' + item.id" target="_blank">
                <img v-lazy="item.img" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div class="banner">
          <a href="/#/product/30" target="_blank">
            <img v-lazy="'/imgs/banner-1.png'" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h1>手机</h1>
        <div class="brick-box">
          <div class="left-box">
            <a href="/#/product/35" target="_blank">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
            </a>
          </div>
          <div class="right-box">
            <ul>
              <li v-for="(item, index) in brickList" :key="index">
                <span class="brick-new">新品</span>
                <div class="brick-img">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <p class="brick-name">{{ item.name }}</p>
                <p class="brick-title">{{ item.subtitle }}</p>
                <a href="javascript:;" @click="showModal = true">
                  <span class="brick-price">{{ item.price }}元</span>
                  <div class="brick-bg"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <modal
    class="summit-cart"
    title="提示"
    btn-type="1"
    send-text="去购物车看看"
    :show-modal="showModal"
    @cancel="showModal = false"
    @tocart="gotoCart"
    >
      <template v-slot:body-content>
        <p>添加到购物车成功！</p>
      </template>
    </modal>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "@/components/ServiceBar";
import Modal from "@/components/Modal";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        //轮播动画
        effect: "flip",
        flipEffect: {
          slideShadows: true,
          limitRotation: true,
        },
        //分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        //上下页按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: "30",
            img: "/imgs/item-box-1.png",
            name: "小米C9",
          },
          {
            id: "31",
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: "32",
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: "33",
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      advertList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      brickList: [],
      showModal: false,
    };
  },
  mounted() {
    // this.getBrickdata();
    this.getProductList();
  },
  methods: {
    // getBrickdata() {
    //   this.$http
    //     .get("/products", {
    //       params: {
    //         categoryId: 100012,
    //         pageNum: 1,
    //         pageSize: 8,
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       this.brickList = res.list;
    //     });
    // },
    async getProductList() {
      let res = await this.$http.getProductList({
        pageNum: 1,
        pageSize: 10,
      })
      console.log(res);
      if(res.code == 0) {
        this.brickList = res.data;
      }

    },
    gotoCart() {
      //添加购物车功能未完成————————————————————————————————————————————————————————————————————————
      this.$router.push('/cart');
    }
  },
};
</script>

<style lang="scss">
@import "/src/assets/scss/config.scss";
@import "/src/assets/scss/mixin.scss";
@import "/src/assets/scss/base.scss";
.content {
  .swiper-box {
    height: 460px;
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 460px;
      background-color: rgba(85, 88, 90, 0.48);
      z-index: 2;
      padding: 15px 0;
      box-sizing: border-box;
      .menu {
        .menu-a {
          display: block;
          height: 53px;
          line-height: 53px;
          font-size: 16px;
          padding-left: 30px;
          color: #ffffff;
          cursor: pointer;
          position: relative;
          &::after {
            content: " ";
            position: absolute;
            top: 20px;
            right: 25px;
            width: 10px;
            height: 15px;
            background: url("../../assets/imgs/icon-arrow.png") no-repeat;
            background-size: contain;
          }
        }
        &:hover {
          background-color: $colorA;
          .menu-child {
            display: block;
          }
        }
        .menu-child {
          display: none;
          width: 963px;
          height: 460px;
          background-color: $colorG;
          position: absolute;
          top: 0;
          left: 264px;
          ul {
            display: flex;
            height: 76px;
            li {
              flex: 1;
              text-align: center;
              line-height: 76px;
              a {
                color: #333;
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
    .swiper-button-prev {
      left: 270px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .advert-box {
    ul {
      @include flex();
      margin: 15px 0;
      li {
        a {
          display: block;
          width: 296px;
          height: 167px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
.product-box {
  background-color: #f5f5f5;
  padding-bottom: 20px;
  h1 {
    padding: 15px 0;
  }
  .brick-box {
    display: flex;
    .left-box {
      width: 224px;
      height: 619px;
      margin-right: 20px;
      &:hover {
        @include hoverfl(0, -2px, 0, 0.2s);
      }
    }
    .right-box {
      flex: 1;
      ul {
        height: 619px;
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
        li {
          width: 234px;
          height: 296px;
          margin-bottom: 15px;
          background-color: #fff;
          margin-right: 10px;
          text-align: center;
          .brick-new {
            display: inline-block;
            background-color: #7ecf68;
            color: #fff;
            padding: 5px 20px;
          }
          .brick-img {
            img {
              height: 150px;
              padding: 15px 0;
            }
          }
          .brick-name {
            font-size: 14px;
            font-weight: bold;
            padding: 5px 0;
          }
          .brick-title {
            color: #999;
          }
          a {
            display: block;
            color: $colorA;
            .brick-price {
              display: inline-block;
              padding: 5px;
              font-weight: bold;
            }
            .brick-bg {
              @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
              vertical-align: middle;
            }
          }
          &:hover {
            @include hoverfl(0, -2px, 0, 0.2s);
          }
        }
      }
    }
  }
}
</style>