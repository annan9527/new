<template>
  <div class="box">
    <div class="left">
      <Num></Num>
    </div>
    <div class="center">
      <!-- 拥堵路段排行 -->
      <Badcroess></Badcroess>
    </div>
    <div class="rigth">
      <Hcsl></Hcsl>
    </div>
  </div>
</template>

<script>
import Badcroess from "./badcroess.vue";
import Hcsl from "./Hcsl.vue";
import Num from "./num.vue";

export default { components: { Badcroess, Hcsl, Num } };
</script>

<style lang="scss" scoped>
.box {
  width: 980px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  .center {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  .rigth {
    flex: 1;
    width: 100%;
    height: 100%;
  }
}
</style>