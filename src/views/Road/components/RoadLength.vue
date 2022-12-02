<template>
  <div class="box">
    <div class="title">总公里数</div>
    <div class="num">
      <div class="num_item">0</div>
      <div class="num_item">9</div>
      <div class="num_item">0</div>
      <div class="num_item">8</div>
      <div class="num_item">4</div>
    </div>
    <div class="same">
      <div class="pie">
        <div
          style="
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 800;
            color: #ffffff;
          "
        >
          1766
        </div>
        <div
          style="
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 800;
            color: #ffffff;
          "
        >
          km
        </div>
      </div>
      <div class="text">临水邻崖</div>

      <!-- 高度落差 -->
      <div class="heigth">
        高度落差:<span style="color: #ffdb4c">1186<span>km</span></span>
      </div>
      <div class="rever">
        临水临江:<span style="color: #ffdb4c">588.616<span>km</span></span>
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
  height: 100%;
  position: relative;
  .title {
    position: absolute;
    left: 85px;
    top: 5px;
  }
  .num {
    position: absolute;
    left: 35px;
    top: 30px;
    width: 170px;
    height: 36px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .num_item {
      width: 30px;
      height: 36px;
      background-image: url(../../../assets/路切图/number.png);
      border-radius: 4px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      font-family: LED;
      font-weight: 400;
      color: #ffdb4c;
    }
  }
  .same {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: rgba($color: #0269e9, $alpha: 0.2);
    border-radius: 3px;
    .pie {
      position: absolute;
      left: 18px;
      top: -30px;
      width: 75px;
      height: 75px;
      z-index: 2;
      background-image: url(../../../assets/路切图/球.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text {
      position: absolute;
      left: 32px;
      top: 40px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 14px;
    }
    .heigth {
      position: absolute;
      left: 98px;
      top: 15px;
      width: 140px;
      height: 20px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #dbdbdb;
    }
    .rever {
      position: absolute;
      left: 98px;
      top: 32px;
      width: 140px;
      height: 20px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #dbdbdb;
      
    }
  }
}
</style>