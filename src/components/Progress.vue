<template>
  <div class="box">
    <div class="heard">
      <div class="left" style="font-size: 16px; color: #ffcb00">隐患数</div>
      <div class="rigth">
        <div
          style="
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffcb00;
          "
        >
          1181
        </div>
        <div
          style="
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #0e80ff;
          "
        >
          /
        </div>
        <div
          style="
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #0e80ff;
          "
        >
          1168
        </div>
        <div
          style="
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #fff;
            margin-left: 7px;
          "
        >
          (完成/总数)
        </div>
      </div>
    </div>
    <div class="two">
      <span
        style="
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          width: 100px;
          font-size: 18px;
        "
        >省级</span
      >

      <span style="font-family: PingFang SC; font-weight: 500; color: #0e80ff"
        >(3)</span
      >
      <!-- 进度条 -->
      <div style="display: flex; width: 100%">
        <span
          style="
            width: 100px;
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
            margin-right: 5px;
            line-height: 15px;
          "
          >整改进度 :</span
        >
        <!-- 进度条 -->
        <el-progress
          :percentage="100"
          style="width: 320px"
          :stroke-width="12"
        ></el-progress>
      </div>
    </div>
    <div class="two">
      <span
        style="
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          width: 100px;
          font-size: 18px;
        "
        >市级</span
      >

      <span style="font-family: PingFang SC; font-weight: 500; color: #0e80ff"
        >(22)</span
      >
      <!-- 进度条 -->
      <div style="display: flex; width: 100%">
        <span
          style="
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
            margin-right: 5px;
            line-height: 15px;
            width: 100px;
            font-size: 18px;
          "
          >整改进度 :</span
        >
        <!-- 进度条 -->
        <el-progress
          :percentage="100"
          style="width: 320px"
          :stroke-width="12"
        ></el-progress>
      </div>
    </div>
    <div class="two">
      <span
        style="
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          width: 100px;
          font-size: 18px;
        "
        >县级</span
      >

      <span style="font-family: PingFang SC; font-weight: 500; color: #0e80ff"
        >(23)</span
      >
      <!-- 进度条 -->
      <div style="display: flex; width: 100%">
        <span
          style="
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
            margin-right: 5px;
            line-height: 15px;
            width: 100px;
            font-size: 18px;
          "
          >整改进度 :</span
        >
        <!-- 进度条 -->
        <el-progress
          :percentage="100"
          style="width: 320px"
          :stroke-width="12"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  height: 150px;
  // background-color: brown;
  .heard {
    width: 100%;
    padding: 0px 5px 0px 15px;
    height: 18px;
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ecf9ff;
    }
    .rigth {
      display: flex;
      width: 200px;
      height: 100%;
      justify-content: center;
      align-content: center;
    }
  }
  .two {
    padding: 10px 5px 0px 15px;
    width: 100%;
    height: 50px;
    // background-color: aquamarine;
    line-height: 20px;
  }
  // 进度条样式.el-progress-bar__outer,
}
</style>