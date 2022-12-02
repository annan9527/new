<template>
  <div class="box">
    <div class="top_label">
      <div class="km">381.2/km</div>
      <div class="title">(国道)</div>
    </div>
    <div class="top_label">
      <div class="km">381.2/km</div>
      <div class="title">(省道)</div>
    </div>
    <div class="top_label">
      <div class="km">381.2/km</div>
      <div class="title">(县乡道)</div>
    </div>
    <div class="top_label">
      <div class="km">381.2/km</div>
      <div class="title">(城市道路)</div>
    </div>
    <div class="top_label">
      <div class="km">381.2/km</div>
      <div class="title">(村社道路)</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 1600px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(../../../assets/路切图/顶部Label.png);
  // background: red;
  .top_label {
    width: 177px;
    height: 121px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../../assets/路切图/路顶部.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .km {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #00ffff;
    }
    .name {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #dbdbdb;
    }
  }
}
</style>