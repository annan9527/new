<template>
  <div class="box">
    <!-- 信号灯 -->
    <div class="lamp">
      <Lamp></Lamp>
    </div>
    <!-- 故障情况 -->
    <div class="failure"></div>
    <!-- 设备设施数量统计 -->
    <div class="num">
      <Statistics></Statistics>
    </div>
  </div>
</template>

<script>
import Statistics from "./Statistics.vue";
import Lamp from "./lamp.vue";
export default { components: { Statistics, Lamp } };
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  // 信号灯
  .lamp {
    position: absolute;
    top: 60px;

    left: 0px;
    width: 100%;
    height: 220px;
  }
  .num {
    position: absolute;
    bottom: 20px;
    left: 0px;
    width: 100%;
    height: 150px;
  }
}
</style>