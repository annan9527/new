<template>
  <div class="box">
    <div class="heard">
      <div class="item">分项邻域</div>
      <div class="item">亡人数</div>
      <div class="item">指标</div>
      <div class="item">占比</div>
    </div>
    <div class="body">
      <div class="row">
        <div class="i"></div>
        <div class="name">危化运输</div>
        <div class="death">2</div>
        <div class="size">总量退出全省前三</div>
        <div class="prnten">/</div>
      </div>
      <div class="row">
        <div class="q"></div>
        <div class="name">渣土车</div>
        <div class="death">0</div>
        <div class="size">4</div>
        <div class="prnten">0</div>
      </div>
      <div class="row">
        <div class="w"></div>
        <div class="name">校车</div>
        <div class="death">0</div>
        <div class="size">0</div>
        <div class="prnten">0</div>
      </div>
      <div class="row">
        <div class="s"></div>
        <div class="name">未成年人</div>
        <div class="death">4</div>
        <div class="size">14</div>
        <div class="prnten">28.57%</div>
      </div>
      <div class="row">
        <div class="s"></div>
        <div class="name">电动自行车</div>
        <div class="death">74</div>
        <div class="size">81</div>
        <div class="prnten">85.06%</div>
      </div>
      <div class="row">
        <div class="s"></div>
        <div class="name">老年人</div>
        <div class="death">100</div>
        <div class="size">138</div>
        <div class="prnten">72.46%</div>
      </div>
      <div class="row">
        <div class="s"></div>
        <div class="name">农村地区</div>
        <div class="death">103</div>
        <div class="size">181</div>
        <div class="prnten">55.08%</div>
      </div>
      <div class="row">
        <div class="s"></div>
        <div class="name">国省道</div>
        <div class="death">55</div>
        <div class="size">95</div>
        <div class="prnten">57.89%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 460px;
  height: 310px;

  .heard {
    padding-left: 20px;
    width: 450px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #cce6ff;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  //   行

  .body {
    width: 460px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .row {
    margin: 2px;
    width: 420px;
    flex: 1;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    display: flex;
    .i {
      width: 10px;
      height: 100%;
      background: #02e984;
    }
    .q {
      width: 10px;
      height: 100%;
      background: #00cfff;
    }
    .w {
      width: 10px;
      height: 100%;
      background: #0269e9;
    }
    .s {
      width: 10px;
      height: 100%;
    }
    .name {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .death {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .size {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .prnten {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>