<template>
  <div class="box">
    <!--左边 车辆类型 -->
    <div class="left">
      <!-- 三率   -->
      <div class="table_pie">
        <table-pie></table-pie>
      </div>
      <!-- 市备案电动车 -->
      <div class="car_all">
        <CarAll></CarAll>
      </div>
    </div>
    <!-- 中间主视觉 -->
    <div class="car_center">
      <car-center></car-center>
    </div>

    <!-- 顶部label -->
    <div class="top_label">
      <CarTopLabel></CarTopLabel>
    </div>

    <!-- 重量违法 -->
    <div class="rigth">
      <!-- 电动自行车 -->
      <div class="electricbicycle">
        <ElectriCbicycle></ElectriCbicycle>
      </div>

      <!-- 美团，饿了么违法 -->
      <div class="carry_out">
        <CarryOut></CarryOut>
      </div>
    </div>
  </div>
</template>

<script>
import CarAll from "./components/CarAll.vue";
import CarCenter from "./components/CarCenter.vue";
import CarryOut from "./components/CarryOut.vue";
import CarTopLabel from "./components/CarTopLabel.vue";
import ElectriCbicycle from "./components/ElectriCbicycle.vue";
import TablePie from "./components/TablePie.vue";
export default {
  components: {
    TablePie,
    CarAll,
    CarCenter,
    CarryOut,
    CarTopLabel,
    ElectriCbicycle,
  },
};
</script>

<style lang="scss" scoped>
@keyframes identifier {
  0% {
    transform: translateX(550px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes identifier_t {
  0% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes identifier_r {
  0% {
    transform: translateX(-550px);
  }
  100% {
    transform: translateX(0px);
  }
}
.box {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(../../assets/车切图/车BG.png);
  background-position-y: -100px;
  // 左边 车辆类型
  .left {
    animation: identifier_r 2s;
    position: absolute;
    width: 550px;
    height: 761px;
    left: 20px;
    bottom: 48px;
    background-image: url(../../assets/车切图/left.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .table_pie {
      position: absolute;
      top: 80px;
      left: 30px;
      width: 450px;
      height: 247px;
    }
    // 电动车备案
    .car_all {
      position: absolute;
      top: 396px;
      left: 30px;
      width: 470px;
      height: 340px;
    }
  }
  .car_center {
    position: absolute;
    left: 640px;
    bottom: 0px;
    width: 400px;
    height: 780px;
   
  }

  .top_label {
    animation: identifier_t 2s;
    position: absolute;
    top: 46px;
    left: 264px;
    width: 1400px;
    height: 81px;
  }
  // 重量违法
  .rigth {
    animation: identifier 2s;
    position: absolute;
    width: 550px;
    height: 761px;
    right: 20px;
    bottom: 48px;
    background-image: url(../../assets/车切图/right.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .electricbicycle {
      position: absolute;
      top: 80px;
      right: 30px;
      width: 450px;
      height: 310px;
    }

    .carry_out {
      position: absolute;
      top: 470px;
      right: 30px;
      width: 470px;
      height: 270px;
    }
  }
}
</style>