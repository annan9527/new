<template>
  <div class="box">
   
    <div class="main">
      <Chufa></Chufa>
    </div>
  </div>
</template>

<script>
import Chufa from "./chufa.vue";

export default { components: { Chufa } };
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  height: 200px;

  .title {
    position: absolute;
    left: 20px;
    top: 20px;
    height: 20px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ecf9ff;
    line-height: 47px;
  }
  .main {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 400px;
    height: 150px;
  }
}
</style>