<template>
  <div class="box">
    <div class="item">
      <div class="text">本月</div>
      <div class="text">警情数</div>
      <div class="number">1661</div>
    </div>
    <div class="item">
      <div class="text">到达</div>
      <div class="text">现场数</div>
      <div class="number">1562</div>
    </div>
    <div class="item">
      <div class="text">八分钟</div>
      <div class="text">到场率</div>
      <div class="number">23.75%</div>
    </div>
    <div class="item">
      <div class="text">部局布控重点</div>
      <div class="text">车辆检查率</div>
      <div class="number">99.75%</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 80px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    width: 131px;
    height: 77px;
    background-image: url(../../../assets/情指情舆/月警情数.png);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
    .number {
      font-size: 26px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffcb00;
    }
  }
}
</style>