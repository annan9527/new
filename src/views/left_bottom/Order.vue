<template>
  <div class="main">
    <!-- 通行证过期播报 -->
    <div class="go_bad">
      <Overtime></Overtime>
    </div>
    <!-- 重点车辆管理 -->
    <div class="car">
      <div class="text">
        <!-- 渣土车逾速 -->
        <Overspeed></Overspeed>
      </div>
      <!-- 渣土车 -->
      <div class="bannernews">
        <Bannernews></Bannernews>
      </div>
    </div>
    <!-- 组织 -->
    <div class="organize">
      <Organize></Organize>
    </div>
    <!-- 数据统计 -->
    <div class="center">
      <Order_center></Order_center>
    </div>
    <!-- 底部 -->
    <div class="bottoms">
      <Bottom></Bottom>
    </div>
    <!-- 安全措施 -->
    <div class="safe">
      <Threed></Threed>
    </div>
    <!-- 道路施工 -->
    <div class="Roader">
      <Roader></Roader>
    </div>
  </div>
</template>

<script>
import Bannernews from "./components/Bannernews.vue";
import Roader from "./components/Roader.vue";
import Threed from "./components/Threed.vue";
import Bottom from "./components/Bottom.vue";
import Bad from "./components/overtime.vue";
import Overtime from "./components/overtime.vue";
import Overspeed from "./components/overspeed.vue";
import Organize from "./components/organize.vue";
import Order_center from "./components/Order_center.vue";

export default {
  components: {
    Bannernews,
    Roader,
    Threed,
    Bottom,
    Bad,
    Overtime,
    Overspeed,
    Organize,
    Order_center,
  },
};
</script>

<style lang="scss" scoped>
@keyframes identifier {
  0% {
    transform: translateX(400px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes identifier_r {
  0% {
    transform: translateX(-400px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes identifier_b {
  0% {
    transform: translateY(350px);
  }
  100% {
    transform: translateY(0px);
  }
}
.main {
  width: 1920px;
  height: 996px;
  position: relative;
  background: url(../../assets/秩序管理/空白.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .go_bad {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
  .car {
    top: 20px;
    left: 20px;
    position: absolute;
    width: 400px;
    height: 460px;
    // border: 1px solid #fff;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(../../assets/秩序管理/车辆.png);
    animation: identifier_r 2s;
    .text {
      position: absolute;
      top: 84px;
      left: 32px;
      width: 365px;
      height: 158px;
      border-radius: 3px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      // background-image: url(../../assets/秩序管理/右转_02.png);
    }
    // 渣土车
    .bannernews {
      position: absolute;
      bottom: 15px;
      width: 400px;
      height: 175px;
      left: 20px;
      border-radius: 3px;
    }
  }
  // 交通组织
  .organize {
    bottom: 28px;
    left: 20px;
    position: absolute;
    width: 400px;
    height: 460px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(../../assets/秩序管理/交通.png);
    animation: identifier_r 2s;
  }
  // 中间图片
  .center {
    position: absolute;
    top: 80px;
    left: 500px;
  }
  // 底部
  .bottoms {
    position: absolute;
    bottom: 28px;
    width: 970px;
    height: 280px;
    left: 470px;
    animation: identifier_b 2s;
  }
  //  交通安全设施
  .safe {
    background-image: url(../../assets/秩序管理/设施.png);
    right: 21px;
    width: 400px;
    height: 480px;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    top: 20px;
    animation: identifier 2s;
    // 秩序管理数字
    .number {
      margin-left: 5px;
      top: 60px;
      position: absolute;
      width: 390px;
      height: 140px;
      background-image: url(../../assets/秩序管理/信号灯.png);
    }
    // 3d饼图
    .threed {
      bottom: 20px;
      position: absolute;
      width: 400px;
      height: 200px;
    }
  }
  // 道路施工
  .Roader {
    padding-top: 80px;
    background-image: url(../../assets/秩序管理/道路施工.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 21px;
    bottom: 18px;
    width: 400px;
    height: 448px;
    animation: identifier 2s;
  }
}
</style>