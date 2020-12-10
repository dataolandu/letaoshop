<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{ title }}</span>
          <a
            href="javascript:;"
            class="icon-close"
            @click="$emit('cancel')"
          ></a>
        </div>
        <div class="modal-body">
          <slot name="body-content"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="sendText" v-if="btnType == 1" @click="$emit('tocart')">{{ sendText }}</a>
          <a href="javascript:;" class="cancelText" v-if="btnType == 2" @click="$emit('cancel')">{{ cancelText }}</a>
          <div class="btn-group" v-if="btnType == 3">
            <a href="javascript:;" class="sendText" @click="$emit('tocart')">{{ sendText }}</a>
            <a href="javascript:;" class="cancelText" @click="$emit('cancel')">{{ cancelText }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    //模态框类型： 分为small型，middle型，large型，form型
    modalType: {
      type: String,
      default: "form",
    },
    //模态框标题类型
    title: String,
    //模态框按钮类型： 1为确定按钮，2为取消按钮， 3为确定取消同时出现
    btnType: String,
    sendText: {
      type: String,
      default: "确定",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>

<style lang="scss">
@import "/src/assets/scss/config.scss";
@import "/src/assets/scss/mixin.scss";
@import "/src/assets/scss/modal.scss";
</style>