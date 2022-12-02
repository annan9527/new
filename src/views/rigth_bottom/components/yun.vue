<template>
  <div class="box">
    <div class="h">云裁决系统</div>
    <div class="chu">
      <span>云处罚数据:</span> <span style="color: #00fff9">616</span>
    </div>
    <div class="bg">
      <div class="num">9941</div>
      <div class="text">(云快办)</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  .h {
    position: absolute;
    top: 30px;
    left: 15px;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ecf9ff;
  }
  .chu {
    position: absolute;
    top: 60px;
    left: 15px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #dbdbdb;
  }
  .bg {
    right: 23px;
    top: 15px;
    position: absolute;
    width: 194px;
    height: 84px;
    background-image: url(../../../assets/服务保障/云裁决.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .text {
      position: absolute;
      right: 71px;
      top: 42px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #00fff9;
    }
    .num {
      position: absolute;
      right: 50px;
      top: 0px;
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>