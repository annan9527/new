<template>
  <div class="box">
    <!-- 平均守法率 -->
    <div class="top">
      <div class="left">
        <Car></Car>
      </div>
      <div class="center">
        <Nocar></Nocar>
      </div>
      <div class="rigth">
        <People></People>
      </div>
    </div>
    <div class="bottom">
      <All></All>
    </div>
  </div>
</template>

<script>
import Car from "./organize/car.vue";
import Nocar from "./organize/Nocar.vue";
import People from "./organize/people.vue";
import All from "./all.vue";
export default { components: { Car, Nocar, People, All } };
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  .top {
    top: 80px;
    position: absolute;
    width: 100%;
    height: 120px;

    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      width: 100%;
      height: 100%;

      flex: 1;
    }

    .center {
      width: 100%;
      height: 100%;

      flex: 1;
    }

    .rigth {
      width: 100%;
      height: 100%;

      flex: 1;
    }
  }
  .bottom {
    top: 200px;
    position: absolute;
    width: 100%;
    height: 270px;
    // background: red;
  }
}
</style>