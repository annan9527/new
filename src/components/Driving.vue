<template>
  <div class="driving">
    <div class="item">
      <div class="name"> 新增驾驶员数量</div>
      <div class="number">27,230</div>
    </div>
    <div class="item1">
      <div class="name">机动车检验总量</div>
      <div class="number">232,209</div>
    </div>
    <div class="item2">
      <div class="name">驾驶证补换证</div>
      <div class="number">71648</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.driving {
  width: 133px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .item {
    position: relative;
    width: 133px;
    height: 47px;
    background-image: url(../assets/驾考统计/E3_03.png);
    .name {
      top: 5px;
      left: 40px;
      position: absolute;
      height: 15px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #00fff6;
    }
    .number {
      margin-top: 2px;
      position: absolute;
      top: 20px;
      left: 40px;
      height: 15px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .item1 {
    position: relative;
    width: 133px;
    height: 47px;
    background-image: url(../assets/驾考统计/E3_06.png);
    .name {
      top: 5px;
      left: 40px;
      position: absolute;
      height: 15px;
      font-size: 10px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #00ff67;
    }
    .number {
      margin-top: 2px;
      position: absolute;
      top: 20px;
      left: 40px;
      height: 15px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .item2 {
    position: relative;
    width: 133px;
    height: 47px;
    background-image: url(../assets/驾考统计/03.png);
    .name {
      top: 5px;
      left: 40px;
      position: absolute;
      height: 15px;
      font-size: 10px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffcb00;
    }
    .number {
      margin-top: 2px;
      position: absolute;
      top: 20px;
      left: 40px;
      height: 15px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }
}
</style>