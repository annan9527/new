<template>
  <div class="box">
    <div class="title">
      <div class="left">最新亡人数</div>
      <div class="rigth" style="color: #fff">同比：<span>-8.6%</span></div>
    </div>
    <!-- 亡人数数量 -->
    <div class="center">
      <div class="item">0</div>
      <div class="item">2</div>
      <div class="item">4</div>
      <div class="item">2</div>
    </div>
    <div class="bottom">
      <div class="text">229人</div>
      <div class="pie">
        <Deathpie></Deathpie>
      </div>
    </div>
    <div class="bottoms">
      <div class="text">12月</div>
      <div class="pie">
        <Deathpies></Deathpies>
      </div>
    </div>
  </div>
</template>

<script>
import Deathpie from "./Deathpie.vue";
import Deathpies from "./Deathpies.vue";
export default {
  components: { Deathpie, Deathpies },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  .title {
    width: 400px;
    height: 25px;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ffdb4c;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .center {
    margin-top: 20px;
    width: 400px;
    height: 105px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
      width: 86px;
      height: 105px;
      border-radius: 4px;
      background-image: url(../../../assets/安全管理/number.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      font-size: 92px;
      font-family: led;
      font-weight: 400;
      color: #ffdb4c;
      text-align: center;
      line-height: 105px;
    }
  }
  .bottom {
    position: relative;
    margin-top: 24px;
    width: 400px;
    height: 60px;

    .text {
      right: 12px;
      top: 8px;
      position: absolute;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffdb4c;
      z-index: 999;
    }
    .pie {
      width: 100%;
      height: 100%;
    }
  }
  .bottoms {
    position: relative;
    margin-top: 10px;
    width: 400px;
    height: 60px;

    .text {
      right: 12px;
      top: 8px;
      position: absolute;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffdb4c;
      z-index: 999;
    }
    .pie {
      width: 100%;
      height: 100%;
    }
  }
}
</style>