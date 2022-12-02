<template>
  <div class="one">
    <div class="left">
      <div class="top">
        <div class="item" style="width: 100px; font-weight: 700">
          本月警情总数 :
        </div>
        <div class="item" style="color: #ffcb00">5281</div>
        <div class="item">件</div>
      </div>
      <div class="top">
        <div class="item" style="width: 100px; font-weight: 700">
          重复报警率 :
        </div>
        <div class="item" style="color: #ffcb00">4.75%</div>
      </div>
      <div class="top">
        <div class="item" style="width: 100px; font-weight: 700">
          八分钟到场率 :
        </div>
        <div class="item" style="color: #ffcb00">65.22%</div>
      </div>
    </div>
    <div class="right">
      <div class="name">警情总数</div>
      <div class="number">
        <div class="item">5</div>
        <div class="item">3</div>
        <div class="item">8</div>
        <div class="item">7</div>
        <div class="item">9</div>
      </div>
      <div class="percent">
        ( 同比: <span style="color: #ffcb00">-7.03%</span> )
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.one {
  background-image: url(../assets/舆情/舆情.png);
  border-radius: 10px 0px 0px 10px;
  width: 360px;
  height: 100px;
  display: flex;

  .left {
    flex: 1;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    .top {
      display: flex;
    }
    .item {
      height: 18px;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .right {
    position: relative;
    flex: 1;
    .name {
      text-align: center;
      width: 180px;
      height: 14px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
    .number {
      top: 30px;
      position: absolute;
      width: 180px;
      height: 40px;
      display: flex;
      .item {
        margin-left: 5px;
        text-align: center;
        line-height: 36px;
        width: 30px;
        height: 36px;
        background-image: url(../assets/image/number.png);
        border-radius: 4px;
        font-family: led;
        font-size: 32px;
        color: #ffcb00;
      }
    }
    .percent {
      left: 50%;
      transform: translateX(-35%);
      top: 71px;
      position: absolute;
      width: 120px;
      height: 20px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #dbdbdb;
    }
  }
}
</style>