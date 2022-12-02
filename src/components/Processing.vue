<template>
  <div class="processing">
    <div class="left">
      <div style="width: 22px; height: 22px">
        <img src="../assets/舆情热线/快处数.png" alt="" />
      </div>
      <div class="title">快处数</div>
      <div class="number">15722</div>
    </div>
    <div class="rigth">
      <div class="title">
        <div class="left_title">
          <div>部局布控</div>
          <div>重点车辆</div>
        </div>
        <div class="rigth_title">
          <div>检查率</div>
          <div style="color: #ffcb00; font-size: 16px; font-weight: 500">
            77.76%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.processing {
  width: 350px;
  height: 45px;
  display: flex;
  justify-content: space-around;
  .left {
    padding-left: 10px;
    width: 169px;
    height: 45px;
    border: 1px solid #002047;
    border-radius: 5px;
    display: flex;
    line-height: 45px;
    padding-right: 10px;
    .title {
      width: 100px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;
      margin-left: 10px;
    }
    .number {
      width: 62px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffcb00;
    }
  }
  .rigth {
    width: 169px;
    height: 45px;
    border: 1px solid #002047;
    border-radius: 5px;
    padding-top: 7px;
    padding-left: 15px;

    .title {
      width: 140px;
      height: 32px;
      display: flex;
      justify-content: space-between;
      .left_title {
        width: 56px;
        height: 32px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #ffffff;
        line-height: 18px;
      }
      .rigth_title {
        text-align: center;
        width: 46px;
        height: 29px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #cccccc;
      }
    }
  }
}
</style>