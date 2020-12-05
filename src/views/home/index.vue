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
                      <a :href="phone ? '/#/product/' + phone.id : ''" target="_blank">
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
              <a :href="'/#/product/' + item.id" target="_blank"
                ><img :src="item.img"
              /></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="sort-box"></div>
        <div class="banner"></div>
        <div class="product-box"></div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "@/components/ServiceBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
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
    };
  },
};
</script>

<style lang="scss">
@import "/src/assets/scss/config.scss";
.content {
  background-color: #f5f5f5;
  .swiper-box {
    height: 460px;
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 460px;
      background-color: rgba(85, 88, 90, 0.48);
      z-index: 10;
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
            .menu-child{
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
}
</style>