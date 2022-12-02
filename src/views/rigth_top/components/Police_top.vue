<template>
  <div class="box">
    <div class="box_bottom">
      <News2></News2>
    </div>
  </div>
</template>

<script>
import News2 from "./News2.vue";
export default { components: { News2 } };
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .box_top {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .one {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .number {
        font-size: calc(100vw * 19 / 1920);
        font-family: PingFang SC;
        font-weight: 800;
        color: #ffa100;
      }
      .text {
        font-size: calc(100vw * 12 / 1920);
        font-family: PingFang SC;
        font-weight: 800;
        //   color: #ffa100;
      }
    }
    .two {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .number {
        font-size: calc(100vw * 19 / 1920);
        font-family: PingFang SC;
        font-weight: 800;
        color: #00ffb4;
      }
      .text {
        font-size: calc(100vw * 12 / 1920);
        font-family: PingFang SC;
        font-weight: 800;
        //   color: #ffa100;
      }
    }
    .three {
      width: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .number {
        font-size: calc(100vw * 19 / 1920);
        font-family: PingFang SC;
        font-weight: 800;
        color: #00f6ff;
      }
      .text {
        font-size: calc(100vw * 12 / 1920);
        font-family: PingFang SC;
        font-weight: 800;
        //   color: #ffa100;
      }
    }
  }
  .box_bottom {
    flex: 2;
    width: 100%;
    // background-color: rgb(51, 39, 220);
  }
}
</style>