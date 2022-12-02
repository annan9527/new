<template>
  <div class="box">
    <div class="bearing">
      <Bearing></Bearing>
    </div>
    <div class="line">
      <Bottom_line></Bottom_line>
    </div>
  </div>
</template>

<script>
import Bearing from "./Bearing.vue";
import Bottom_line from "./bottom_line.vue";
export default { components: { Bearing, Bottom_line } };
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;

  position: relative;
  .bearing {
    position: absolute;
    top: 45px;
    width: 100%;
    height: 100px;
  }
  .line {
    position: absolute;
    top: 150px;
    width: 100%;
    height: 140px;
  }
}
</style>