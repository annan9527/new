<template>
  <div class="box">
    <div class="toplabel_item">
      <div class="leftitem">
        <div class="num">72</div>
        <div class="name">企业违法</div>
      </div>
      <div class="centeritem"><div class="name">信安物流</div></div>
      <div class="rigthitem">
        <div class="num">72</div>
        <div class="name">车辆总数</div>
      </div>
    </div>
    <div class="toplabel_item">
      <div class="leftitem">
        <div class="num">72</div>
        <div class="name">企业违法</div>
      </div>
      <div class="centeritem"><div class="name">仁信保洁</div></div>
      <div class="rigthitem">
        <div class="num">72</div>
        <div class="name">车辆总数</div>
      </div>
    </div>
    <div class="toplabel_item">
      <div class="leftitem">
        <div class="num">72</div>
        <div class="name">企业违法</div>
      </div>
      <div class="centeritem"><div class="name">诚丰物流</div></div>
      <div class="rigthitem">
        <div class="num">72</div>
        <div class="name">车辆总数</div>
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
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 cursor: pointer;
  .toplabel_item {
    width: 343px;
    height: 142px;
    background-image: url(../../../assets/企/基础数据.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .leftitem {
      width: 100px;
      height: 142px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .num {
        font-size: 31px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #00fff9;
      }
      .name {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #f9fafa;
      }
    }
    .centeritem {
      width: 140px;
      height: 142px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .name {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 700;
        color: #ffffff;
      }
    }
    .rigthitem {
      width: 100px;
      height: 142px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .num {
        font-size: 31px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #00ff7e;
      }
      .name {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #f9fafa;
      }
    }
  }
}
</style>