<template>
  <div class="box">
    <!-- 顶部标签 -->
    <div class="top">
      <top-lable></top-lable>
    </div>
    <!-- 交安码 事故重点人群 积案清理 -->
    <div class="left">
      <div class="safesign">
        <!-- 交安码 -->
        <div class="safepie">
          <safe-pie></safe-pie>
        </div>
        <!-- 数量统计 -->
        <div class="safenum">
          <SafeNum></SafeNum>
        </div>
      </div>
      <!-- 事故重点人群 -->
      <div class="focusgroups">
        <focus-groups></focus-groups>
      </div>
      <!-- 积案清理 -->
      <div class="clear">
        <clear></clear>
      </div>
    </div>
    <!-- 中间内容 -->
    <div class="center"></div>
    <!-- ab证三率 注销驾驶员数 -->
    <div class="rigth">
      <!-- AB证三率 -->
      <div class="Ab_three">
        <ab-three></ab-three>
      </div>
      <!-- 三率 -->
      <div class="three">
        <saven-threed></saven-threed>
      </div>
      <!-- 注销驾驶员数 -->
      <div class="Numberdrivers">
        <numberdrivers></numberdrivers>
      </div>
    </div>
  </div>
</template>

<script>
import AbThree from "./components/AbThree.vue";
import Clear from "./components/Clear.vue";
import FocusGroups from "./components/FocusGroups.vue";
import Numberdrivers from "./components/Numberdrivers.vue";
import SafeNum from "./components/SafeNum.vue";
import SafePie from "./components/SafePie.vue";
import SavenThreed from "./components/SavenThreed.vue";
import TopLable from "./components/TopLable.vue";
export default {
  components: {
    SafePie,
    SafeNum,
    FocusGroups,
    Clear,
    AbThree,
    SavenThreed,
    Numberdrivers,
    TopLable,
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
  // height: 996px;
  position: relative;

  // 顶部
  .top {
    animation: identifier_t 2s;
    position: absolute;
    top: 30px;
    left: 236px;
    width: 1440px;
    height: 110px;
  }

  .left {
    animation: identifier_r 2s;
    left: 20px;
    bottom: 48px;
    position: absolute;
    width: 550px;
    height: 761px;
    background-image: url(../../assets/人/left.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // 交安
    .safesign {
      position: absolute;
      top: 80px;
      left: 30px;
      width: 450px;
      height: 147px;
      display: flex;
      justify-content: center;
      align-items: center;
      // 交安码
      .safepie {
        flex: 2;
        width: 100%;
        height: 100%;
      }
      //  数量
      .safenum {
        flex: 3;
        width: 100%;
        height: 100%;
      }
    }

    // 事故重点人群
    .focusgroups {
      position: absolute;
      top: 305px;
      left: 30px;
      width: 460px;
      height: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    // 积案清理
    .clear {
      position: absolute;
      top: 544px;
      left: 30px;
      width: 480px;
      height: 200px;
    }
  }
  // 中间主视觉
  .center {
    z-index: -999;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../../assets/人/主视觉.png);
  }
  .rigth {
    animation: identifier 2s;
    right: 20px;
    bottom: 48px;
    position: absolute;
    width: 550px;
    height: 761px;
    background-image: url(../../assets/人/右bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // AB证三率
    .Ab_three {
      width: 450px;
      height: 167px;
      position: absolute;
      top: 80px;
      right: 30px;
    }
    // 三率

    .three {
      width: 450px;
      height: 200px;
      position: absolute;
      top: 260px;
      right: 30px;
    }

    // 注销驾驶员数
    .Numberdrivers {
      width: 480px;
      height: 220px;
      position: absolute;
      top: 520px;
      right: 30px;
    }
  }
}
</style>