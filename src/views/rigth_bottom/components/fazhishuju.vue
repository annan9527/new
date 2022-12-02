<template>
  <div class="box">
    <!-- 取保候审 -->
    <div class="one">89120</div>
    <!-- 保证金退还 -->
    <div class="two">89120</div>
    <!-- 刑事撤案数 -->
    <div class="three">89120</div>
    <!-- 特殊人员通报 -->
    <div class="four">89120</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-image: url(../../../assets/人/bg/法制数据.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  //  取保候审
  .one {
    left: 0px;
    position: absolute;
    width: 70px;
    height: 20px;
    top: 70px;
    font-weight: 800;
    color: #ffff00;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  //  保证金退还
  .two {
    right: 0px;
    position: absolute;
    width: 70px;
    height: 20px;
    top: 68px;
    font-weight: 800;
    color: #ffff00;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .three {
    left: 0px;
    position: absolute;
    width: 70px;
    height: 20px;
    top: 120px;
    font-weight: 800;
    color: #ffff00;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  .four {
    right: 0px;
    position: absolute;
    width: 70px;
    height: 20px;
    top: 120px;
    font-weight: 800;
    color: #ffff00;
    display: flex;
    justify-content: center;
    justify-items: center;
  }
}
</style>