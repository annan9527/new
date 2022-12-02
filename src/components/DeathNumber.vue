<template>
  <div class="box">
    <div class="title">
      <div>亡人数</div>
      <div>控制数</div>
    </div>
    <div class="led">
      <div class="ledd">
        <div class="lednumber">2</div>
        <div class="lednumber">4</div>
        <div class="lednumber">2</div>
      </div>
      <div class="ledd">
        <div class="lednumber">2</div>
        <div class="lednumber">2</div>
        <div class="lednumber">9</div>
      </div>
      <div class="same">
        <div style="margin-left: 13px">(同比)</div>
        <div
          style="
            margin-top: 2px;
            font-size: 22px;
            font-family: PingFang SC;
            font-weight: 800;
            color: #ffcb00;
          "
        >
          +3.41%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100px;

  .title {
    justify-content: space-between;
    padding: 0 40px;
    width: 100%;
    height: 20px;
    display: flex;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ecf9ff;
  }
  .led {
    width: 100%;
    height: 80px;
    padding: 10px 3px;
    display: flex;
    justify-content: space-between;
    .ledd {
      display: flex;
      width: 120px;
      height: 40px;
      padding: 0 5px;
    }
    .lednumber {
      margin-left: 5px;
      text-align: center;
      line-height: 36px;
      width: 30px;
      height: 36px;
     background-image: url(../assets/image/number.png);
      border-radius: 4px;
      font-family: led;
      font-size: 36px;
      color: #FFCB00;
    }
    .same {
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      height: 50px;
    }
  }
}
</style>