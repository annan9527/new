<template>
  <div class="box">
    <div class="top_label">
      <div class="img">
        <img src="../../../assets/事/01.png" alt="" />
      </div>
      <div class="text">
        <div class="title">12345热线</div>
        <div class="num">18002<span>(次)</span></div>
      </div>
    </div>
    <div class="top_label">
      <div class="img">
        <img src="../../../assets/事/02.png" alt="" />
      </div>
      <div class="text">
        <div class="title">12123热线</div>
        <div class="num">113435<span>(次)</span></div>
      </div>
    </div>
    <div class="top_label">
      <div class="img">
        <img src="../../../assets/事/03.png" alt="" />
      </div>
      <div class="text">
        <div class="title">8810122热线</div>
        <div class="num">12266<span>(次)</span></div>
      </div>
    </div>
    <div class="top_label">
      <div class="img">
        <img src="../../../assets/事/04.png" alt="" />
      </div>
      <div class="text">
        <div class="title">民呼我为</div>
        <div class="num">113435<span>(次)</span></div>
      </div>
    </div>
    <div class="top_label">
      <div class="img">
        <img src="../../../assets/事/05.png" alt="" />
      </div>
      <div class="text">
        <div class="title">通衢问政</div>
        <div class="num">12266<span>(次)</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 1600px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .top_label {
    width:500px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      flex: 1;
      width: 100%;
      height: 100%;
    }
    .text {
      flex: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      .title {
        height: 31px;
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #66dbff;
      }
      .num {
        height: 22px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}
</style>