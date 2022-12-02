<template>
  <div class="botton">
    <div class="item1" @click="go('company')">
      <div class="text1" >企</div>
    </div>
    <div class="item2" @click="go('car')">
      <div class="text1" >车</div>
    </div>
    <div class="item3" @click="go('people')">
      <div class="text1" >人</div>
    </div>
    <div class="item4" @click="go('road')">
      <div class="text1" >路</div>
    </div>
    <div class="item5" @click="go('event')">
      <div class="text1">事</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    go(val) {
      this.$router.push(`/${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.botton {
  cursor: pointer;
  padding: 0 20px;
  width: 1000px;
  height: 156px;
  // opacity: 0.8;
  background-image: url("../assets/image/最下面的按钮BG.png");
  // background: linear-gradient(0deg, #001c4c 0%, rgba(0, 0, 0, 0.1) 100%);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: space-around;
  .item1 {
    top: -70px;
    position: relative;
    width: 170px;
    height: 190px;
    background-image: url(../assets/首页变更/企.png);
    // background: red;
    .text1 {
      top: 160px;
      position: absolute;
      left: 40%;
      // width: 22px;
      // height: 60px;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #99e0ff;
      // line-height: 26px;
    }
  }
  .item2 {
    top: -70px;
    position: relative;
    width: 170px;
    height: 190px;
    background-image: url(../assets/首页变更/车.png);
    // background: red;
    .text1 {
      top: 160px;
      position: absolute;
      left: 45%;
      // width: 22px;
      // height: 60px;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #99e0ff;
      // line-height: 26px;
    }
  }
  .item3 {
    top: -70px;
    position: relative;
    width: 170px;
    height: 190px;
    background-image: url(../assets/首页变更/人.png);
    // background: red;
    .text1 {
      top: 160px;
      position: absolute;
      left: 45%;
      // width: 22px;
      // height: 60px;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #99e0ff;
      // line-height: 26px;
    }
  }
  .item4 {
    top: -70px;
    position: relative;
    width: 170px;
    height: 190px;
    background-image: url(../assets/首页变更/路.png);
    // background: red;
    .text1 {
      top: 160px;
      position: absolute;
      left: 45%;
      // width: 22px;
      // height: 60px;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #99e0ff;
      // line-height: 26px;
    }
  }
  .item5 {
    top: -70px;
    position: relative;
    width: 170px;
    height: 190px;
    background-image: url(../assets/首页变更/事.png);
    // background: red;
    .text1 {
      top: 160px;
      position: absolute;
      left: 45%;
      // width: 22px;
      // height: 60px;
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #99e0ff;
      // line-height: 26px;
    }
  }
  // .active {
  //   animation: dong 2s infinite;
  // }
}
// @keyframes dong {
//   0% {
//     transform: translate(0px, 0px);
//   }
//   50% {
//     transform: translate(0px, -10px);
//   }
//   100% {
//     transform: translate(0px, 0px);
//   }
// }
</style>