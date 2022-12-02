<template>
  <div class="box">
    <!-- 重点车辆 -->
    <div class="WeigthCar">
      <div class="boxs">
        <!-- 企业车辆 -->
        <Enterprise></Enterprise>
        <!-- 企业亡人数 -->
      </div>
      <div class="city">
        <City></City>
      </div>
    </div>
    <!-- 重点人群 -->
    <div class="WeigthPeople">
      <!-- 各镇儿童死亡人数 -->
      <div class="one">
        <Town></Town>
      </div>
      <div class="two">
        <Old></Old>
      </div>
    </div>
    <!-- 死亡人数 中间 -->
    <div class="Death">
      <Death></Death>
    </div>
    <!-- 八大领域 -->
    <div class="Eigth">
      <Eigth></Eigth>
    </div>
    <!-- 四级路长制 -->
    <div class="Four">
      <Four></Four>
    </div>
    <!-- 隐患数 -->
    <div class="Hiddentrouble">
      <Hiddentrouble></Hiddentrouble>
    </div>
    <!-- 重点道路 -->
    <div class="WeigthRoader">
      <div class="ones">
        <Banner></Banner>
      </div>
      <div class="twos">
        <Guo></Guo>
      </div>
      <div class="threes">
        <Shen></Shen>
      </div>
    </div>
  </div>
</template>

<script>
import Enterprise from "./components/Enterprise.vue";
import City from "./components/city.vue";
import Town from "./components/Town.vue";
import Old from "./components/Old.vue";
import Banner from "./components/shajin.vue";
import Guo from "./components/Guo.vue";
import Shen from "./components/Duofa.vue";
import Hiddentrouble from "./components/Hiddentrouble.vue";
import Eigth from "./components/Eigth.vue";
import Four from "./components/Four.vue";
import Death from "./components/Death.vue";

export default {
  components: {
    Enterprise,
    City,
    Town,
    Old,
    Banner,
    Guo,
    Shen,
    Hiddentrouble,
    Eigth,
    Four,
    Death,
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
.box {
  position: relative;
  width: 1920px;
  height: 996px;
  // 重点车辆
  .WeigthCar {
    position: absolute;

    left: 20px;
    bottom: 20px;
    width: 400px;
    height: 460px;
    opacity: 0.9;
    animation: identifier_r 2s;
    background-image: url(../../assets/安全管理/车辆.png);
    .boxs {
      position: absolute;
      width: 365px;
      height: 170px;
      top: 84px;
      left: 18px;
    
    }
    .city {
      position: absolute;
      width: 365px;
      height: 180px;
      bottom: 20px;
      left: 18px;
     
    }
  }
  // 重点人群
  .WeigthPeople {
    top: 20px;
    position: absolute;
    left: 20px;

    width: 400px;
    height: 470px;
    opacity: 0.9;
    background-repeat: no-repeat;
    background-image: url(../../assets/安全管理/人群.png);
    animation: identifier_r 2s;
    .one {
      width: 365px;
      height: 200px;
      position: absolute;
      top: 84px;
      left: 18px;
    }
    .two {
      width: 365px;
      height: 160px;
      position: absolute;
      bottom: 20px;
      left: 18px;
    }
  }
  // 死亡人数
  .Death {
    position: absolute;
    top: 30px;
    left: 760px;
    // background-image: url(../../assets/安全管理/死亡人数.png);
    // border-radius: 5px;
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    width: 400px;
    height: 280px;

    // background: red;
  }

  //  八大领域
  .Eigth {
    position: absolute;
    top: 347px;
    left: 480px;
    width: 460px;
    height: 310px;
    background: #001b39;
    opacity: 0.7;
    border-radius: 5px;
  }
  .Four {
    position: absolute;
    top: 347px;
    left: 990px;
    width: 460px;
    height: 310px;
    background: #001b39;
    opacity: 0.7;
    border-radius: 5px;
  }

  // 隐患数
  .Hiddentrouble {
    position: absolute;
    background-repeat: no-repeat;
    left: 460px;
    bottom: 0px;
    width: 1000px;
    height: 310px;
    animation: identifier_b 2s;
  }
  // 重点道路
  .WeigthRoader {
    background-repeat: no-repeat;
    position: absolute;
    width: 400px;
    height: 958px;
    opacity: 0.9;
    top: 20px;
    right: 20px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(../../assets/安全管理/道路.png);
    animation: identifier 2s;
    .ones {
      left: 16px;
      width: 375px;
      height: 260px;

      position: absolute;
      top: 80px;
    }
    .twos {
      left: 16px;
      width: 375px;
      height: 260px;

      position: absolute;
      top: 361px;
    }
    .threes {
      left: 16px;
      width: 375px;
      height: 260px;

      position: absolute;
      bottom: 30px;
    }
  }
}
</style>