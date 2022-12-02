<template>
  <div class="box">
    <div class="heard">
      <div class="item">路段名称</div>
      <div class="item">2020</div>
      <div class="item">2021</div>
      <div class="item">2022</div>
    </div>
    <div class="body">
      <div class="row">
        <div class="i"></div>
        <div class="name">G320沪瑞线</div>
        <div class="death">27</div>
        <div class="size">29</div>
        <div class="prnten">18</div>
      </div>
      <div class="row">
        <div class="q"></div>
        <div class="name">G205山深线</div>
        <div class="death">16</div>
        <div class="size">24</div>
        <div class="prnten">16</div>
      </div>
      <div class="row">
        <div class="w"></div>
        <div class="name">S221江溪线</div>
        <div class="death">10</div>
        <div class="size">6</div>
        <div class="prnten">0</div>
      </div>
      <div class="row">
        <div class="s"></div>
        <div class="name">S315兰贺线</div>
        <div class="death">11</div>
        <div class="size">22</div>
        <div class="prnten">10</div>
      </div>
      <div class="row">
        <div class="s"></div>
        <div class="name">S305富衢线</div>
        <div class="death">7</div>
        <div class="size">8</div>
        <div class="prnten">6</div>
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
    font-size: 16px;
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