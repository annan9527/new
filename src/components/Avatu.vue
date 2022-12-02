<template>
  <div class="bg">
    <el-progress
      :width="90"
      type="dashboard"
      :percentage="percentage"
      :color="colors"
      :stroke-width="8"
      stroke-linecap="butt"
      :show-text="false"
    ></el-progress>
    <div class="number">{{ percentage }}</div>
    <div class="speed">平均车速</div>
    <div class="text" v-if="percentage >= 50">(畅通)</div>
    <div class="texts" v-else>(拥堵)</div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      percentage: 62, //速度
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    // increase() {
    //   if (this.percentage >= 100) {
    //     this.percentage = 0;
    //   } else {
    //     this.percentage += 10;
    //   }
    // },
  },
  created() {
    // let that = this;
    // setInterval(() => {
    //   that.increase();
    // }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url(../assets/image/环形进度.png);
  width: 150px;
  height: 150px;
  padding-top: 35px;
  background-size: 100% 100%;
  // background-color: aqua;
  text-align: center;
  line-height: 150px;
  position: relative;
  // background: #00ff6a;

  // ::v-deep .el-progress-circle__track {
  //     stroke: #a91a1a;
  //   }

  .number {
    top: 0px;
    left: 45px;
    position: absolute;
    width: 57px;
    height: 18px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #00ffff;
  }
  .speed {
    position: absolute;
    top: 22px;
    left: 50px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
  }
  .text {
    position: absolute;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #00ffff;
    line-height: 29px;
    top: 106px;
    left: 55px;
  }
  .texts {
    position: absolute;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ff0000;
    line-height: 29px;
    top: 106px;
    left: 55px;
  }
}
//  c
</style>