<template>
  <div class="box">
    <!-- 顶部 -->
    <div class="label">
      <div class="label_item">
        <div class="text">企业总量</div>
        <div class="num">1032</div>
      </div>
      <div class="label_item">
        <div class="text">车辆违法 (数)</div>
        <div class="num">1032</div>
      </div>
      <div class="label_item">
        <div class="text">车辆事故 (数)</div>
        <div class="num">1032</div>
      </div>
    </div>
    <!-- 下面的盒子 -->
    <div class="top">
      <div class="left">
        <div class="title">车辆违法TOP</div>
        <div class="main">
          <CarBad></CarBad>
        </div>
      </div>
      <div class="rigth">
        <div class="title" style=" margin-bottom: 10px;">车辆事故TOP</div>
        <div class="main">
          <div class="name">
            <div
              style="
                font-size: 16px;
                font-family: DigifaceWide;
                font-weight: 400;
                color: #00fff9;
              "
            >
              43
            </div>
            <div style="font-size: 10px; font-weight: 700">衢州高新物流</div>
          </div>
          <div class="names">
            <div
              style="
                font-size: 16px;
                font-family: DigifaceWide;
                font-weight: 400;
                color: #00fff9;
              "
            >
              25
            </div>
            <div style="font-size: 10px; font-weight: 700">衢江诚丰物流</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarBad from "./CarBad.vue";
export default {
  components: { CarBad },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;

  .label {
    top: 10px;
    position: absolute;
    left: 5px;
    width: 449px;
    height: 70px;
    background: rgba($color: #002767, $alpha: 0.4);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .label_item {
      width: 100px;
      height: 50px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      .text {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #ecf9ff;
      }
      .num {
        font-size: 20px;
        font-family: lED;
        font-weight: 400;
        color: #00fff9;
      }
    }
  }
  .top {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    .left {
      flex: 1.5;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        flex: 1;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #dbdbdb;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .main {
        flex: 9;

        width: 100%;
        height: 100%;
      }
    }
    .rigth {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        flex: 1;
        width: 100%;
        height: 100%;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #dbdbdb;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .main {
        flex: 9;
        background-image: url(../../../assets/企/排名背景.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: relative;
        .name {
          position: absolute;
          top: 0px;
          left: 0px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        .names {
          position: absolute;
          top: 50px;
          right: 0px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          display: flex;
        }
      }
    }
  }
}
</style>