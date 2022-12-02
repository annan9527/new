<template>
  <div class="company">
    <!-- 企中间 -->
    <div class="companycenter">
      <Companycenter></Companycenter>
    </div>

    <!-- 顶部Label -->
    <div class="toplabel">
      <TopLabelComponents></TopLabelComponents>
    </div>
    <!--左边 车辆类型 -->
    <div class="left">
      <!-- 工程运输车 -->
      <div class="engineering">
        <EngineeringSafe></EngineeringSafe>
      </div>
      <div class="dangerous">
        <Dangerous></Dangerous>
      </div>
    </div>
    <div class="rigth">
      <!-- 安全走访 -->
      <div class="safelook">
        <SafeLook></SafeLook>
      </div>
      <!-- 高风险运输企业 -->
      <div class="highrisk">
        <HigHrisk></HigHrisk>
      </div>
    </div>
  </div>
</template>

<script>
import Companycenter from "./components/Companycenter.vue";
import Dangerous from "./components/Dangerous.vue";
import EngineeringSafe from "./components/EngineeringSafe.vue";
import HigHrisk from "./components/HigHrisk.vue";
import SafeLook from "./components/SafeLook.vue";
import TopLabelComponents from "./components/TopLabelComponents.vue";
export default {
  data() {
    return {};
  },
  components: {
    SafeLook,
    EngineeringSafe,
    Dangerous,
    HigHrisk,
    TopLabelComponents,
    Companycenter,
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
    transform: translateY(-120px);
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
.company {
  width: 100%;
  height: 100%;
  position: relative;

  .companycenter {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  // 顶部Label
  .toplabel {
    animation: identifier_t 2s;
    position: absolute;
    top: 10px;
    left: 162px;
    width: 1600px;
    height: 142px;
  }

  // 左边
  .left {
    animation: identifier_r 2s;
    position: absolute;
    width: 550px;
    height: 761px;
    left: 20px;
    bottom: 48px;
    background-image: url(../../assets/企/left.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // 工程运输车
    .engineering {
      position: absolute;
      left: 28px;
      top: 80px;
      width: 460px;
      height: 244px;
    }

    // 危化品
    .dangerous {
      position: absolute;
      left: 28px;
      bottom: 40px;
      width: 460px;
      height: 310px;
    }
  }

  // 右边
  .rigth {
    animation: identifier 2s;
    position: absolute;
    width: 550px;
    height: 761px;
    right: 20px;
    bottom: 48px;
    background-image: url(../../assets/企/right.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;

    // 安全走访
    .safelook {
      position: absolute;
      bottom: 20px;
      right: 28px;
      width: 420px;
      height: 224px;
    }

    // 高风险运输企业
    .highrisk {
      position: absolute;
      top: 80px;
      right: 28px;
      width: 480px;
      height: 360px;
    }
  }
}
</style>