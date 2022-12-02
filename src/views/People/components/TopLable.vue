<template>
  <div class="box">
    <div class="item1">
      <div class="num">32277</div>
    </div>
    <div class="item2">
      <div class="num">1588</div>
    </div>
    <div class="item3">
      <div class="num">668</div>
    </div>
    <div class="item4">
      <div class="num">2458</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 1440px;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item1 {
    width: 192px;
    height: 110px;
    background-image: url(../../../assets/人/TOP/A证.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .num {
      width: 60px;
      height: 30px;
      position: absolute;
      bottom: 20px;
      right: 0px;
      font-weight: 500;
      color: #fff;
      font-size: larger;
      text-align: center;
      line-height: 30px;
    }
  }
  .item2 {
    width: 192px;
    height: 110px;
    background-image: url(../../../assets/人/TOP/B证.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .num {
      width: 60px;
      height: 30px;
      position: absolute;
      bottom: 20px;
      right: 0px;
      font-weight: 500;
      color: #fff;
      font-size: larger;
      text-align: center;
      line-height: 30px;
    }
  }
  .item3 {
    width: 192px;
    height: 110px;
    background-image: url(../../../assets/人/TOP/C证.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .num {
      width: 60px;
      height: 30px;
      position: absolute;
      bottom: 20px;
      right: 0px;
      font-weight: 500;
      color: #fff;
      font-size: larger;
      text-align: center;
      line-height: 30px;
    }
  }
  .item4 {
    width: 192px;
    height: 110px;
    background-image: url(../../../assets/人/TOP/D证.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .num {
      width: 60px;
      height: 30px;
      position: absolute;
      bottom: 20px;
      right: 0px;
      font-weight: 500;
      color: #fff;
      font-size: larger;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>