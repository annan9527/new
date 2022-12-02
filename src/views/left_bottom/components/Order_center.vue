<template>
  <div class="box">
    <div class="btn" @click="open"></div>
    <Dailog :isshow="isshow" @close="change"></Dailog>
  </div>
</template>

<script>
import Dailog from "./Dailog.vue";
export default {
  data() {
    return {
      isshow: false,
    };
  },
  methods: {
    open() {
      this.isshow = true;
    },
    change(val) {
      this.isshow = val;
    },
  },
  components: { Dailog },
};
</script>

<style lang="scss" scoped>
.box {
  width: 950px;
  height: 600px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(../../../assets/秩序管理/主视觉.png);
  position: relative;
  .btn {
    position: absolute;
    top: 200px;
    right: 0px;
    width: 200px;
    height: 100px;
  }
}
</style>