<template>
  <div class="product">
    <div class="product-msgbg">
      <h1>{{ productinfo.name }}</h1>
      <h2>{{ productinfo.subtitle }}</h2>
      <div class="product-piont">
        <span>全球首款双频 GP</span>
        <span>骁龙845</span>
        <span>AI 变焦双摄</span>
        <span>红外人脸识别</span>
      </div>
      <div class="product-price">¥{{ productinfo.price }}</div>
    </div>
    <div class="container"><div class="product-advantage"></div></div>
    <div class="product-design"></div>
    <div class="product-swiper">
      <swiper :options="swiperOption">
        <swiper-slide
          ><img src="/imgs/product/gallery-2.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/imgs/product/gallery-3.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/imgs/product/gallery-4.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/imgs/product/gallery-5.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/imgs/product/gallery-6.jpg" alt=""
        /></swiper-slide>
        <!-- Optional controls -->
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
      <p>小米8 AI智能双摄</p>
    </div>
    <div class="product-video">
      <h1>60帧超慢动作摄影</h1>
      <h1>慢慢回味每一瞬间的精彩</h1>
      <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！</p>
      <p>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
      <div class="container">
        <img src="/imgs/product/gallery-1.png" alt="" @click="videomodal = true" />
      </div>
    </div>
    <div class="empty"></div>
    <transition name="slide">
    <div v-if="videomodal" class="videomodal">
      <div class="occlusion"></div>
      <div class="video-box">
        <!-- 这里的动画还有问题 -->
        <video src="/imgs/product/video.mp4" controls="controls" loop></video>
        <span class="video-close" @click="videomodal = false"></span>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Product",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      productinfo:{},
      videomodal: false,
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    // this.getProductMsg();
  },
  methods:{
    getProductMsg() {
      // console.log(this.$route.params.id);
      let id = this.$route.params.id;
      this.$http.get(`/products/${id}`).then( res => {
        this.productinfo = res;
      })
    }
  }
};
</script>

<style lang="scss">
@import "/src/assets/scss/config.scss";
@import "/src/assets/scss/mixin.scss";
.product {
  .product-msgbg {
    height: 718px;
    background: url("/imgs/product/product-bg-1.png") no-repeat center;
    background-size: contain;
    text-align: center;
    h1 {
      font-size: 76px;
      padding-top: 72px;
    }
    h2 {
      font-size: 25px;
      letter-spacing: 10px;
    }
    .product-piont {
      padding: 25px;
      font-size: 16px;
      span {
        padding: 0 15px;
        position: relative;
        &::after {
          content: "";
          height: 12px;
          border-right: 1px solid #111;
          position: absolute;
          top: 3px;
          right: 0;
        }
        &:last-child::after {
          border: none;
        }
      }
    }
    .product-price {
      font-size: 42px;
      padding-top: 10px;
    }
  }
  .product-advantage {
    height: 480px;
    background: url("/imgs/product/product-bg-2.png") no-repeat center;
    background-size: contain;
  }
  .product-design {
    height: 640px;
    background: url("/imgs/product/product-bg-3.png") no-repeat center;
    background-size: contain;
  }
  .product-swiper {
    margin: 36px auto 42px;
    .swiper-slide {
      width: 614px !important; /*设为固定值*/
      padding: 0 10px;
    }
    img {
      width: 100%;
    }
    p {
      text-align: center;
      font-size: 18px;
      margin-top: 10px;
    }
  }
  .product-video {
    height: 900px;
    background-color: #070708;
    text-align: center;
    color: #fff;
    padding: 90px 0;
    h1 {
      font-size: 66px;
      padding-bottom: 10px;
    }
    p {
      font-size: 25px;
    }
    img {
      height: 543px;
      margin: 60px auto;
      cursor: pointer;
    }
  }
  .empty {
    height: 100px;
    background-color: #fff;
  }
  .videomodal {
    transition: all 1s;
    .occlusion {
      @include position(fixed, 0, 0, 100%, 100%);
      background-color: $colorI;
      opacity: 0.5;
      z-index: 2;
    }
    .video-box {

    transition: all 1s;
        z-index: 6;
        @include position(fixed, 50%, 50%, 900px, auto);
        transform: translate(-50%, -50%);
      video {
        width: 900px;
        height: auto;
        position: relative;
        outline: none;
      }
      span {
        z-index: 7;
        background: url("/imgs/icon-close.png") no-repeat center;
        @include position(absolute, 0, 100%, 25px, 25px);
        transform: translate(-35px,10px);
        cursor: pointer;
      }
      &.slide-enter-active{
        top: 0;
    }
    &.slide-enter{
        top: -100%;
    }
    &.slide-leave-active{
        top: -100%;
    }
    &.slide-leave-to{
        top: 0;

    }
    }

  }
}
</style>