<template>
  <div class="line">
    <div class="left">
      <img src="../assets/舆情热线/03.png" alt="" />
    </div>
    <div class="rigth">
      <div class="item">
        <div class="tell">881012</div>
        <div class="number">8656</div>
      </div>
      <div class="items">
        <div class="tell">12123</div>
        <div class="number">9018</div>
      </div>
      <div class="item">
        <div class="tell">12345</div>
        <div class="number">1603</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.line {
  width: 360px;
  height: 80px;
  display: flex;
  .left {
    width: 50px;
    height: 80px;
    text-align: center;
    padding-top: 25px;
  }
  .rigth {
    display: flex;
    flex: 1;
    height: 80px;
    width: 310px;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    .item {
      position: relative;
      width: 80px;
      height: 70px;
      background-image: url(../assets/首页变更/3.png);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .tell {
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #ffa100;
      }
      .number {
        font-size: 23px;
        font-family: SourceHanSansCN;
        font-weight: 700;
        color: #fff;
      }
    }
    .items {
      position: relative;
      width: 80px;
      height: 70px;
      background-image: url(../assets/首页变更/3.png);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .tell {
        font-size: 16px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: #ffa100;
      }
      .number {
        font-size: 20px;
        font-family: SourceHanSansCN;
        font-weight: 700;
        color: #fff;
      }
    }
  }
}
</style>