<template>
  <div class="main">
    <!-- 法制 -->
    <div class="legality">
      <!-- 云裁决系统 -->
      <div class="yun">
        <Yun></Yun>
      </div>
      <!-- 执法质量排名 -->
      <div class="paiming">
        <Paiming></Paiming>
      </div>
      <!-- 法制数据 -->
      <div class="fazhishuju">
        <Fazhishuju></Fazhishuju>
      </div>
      <!-- 车管立案 -->
      <div class="shuliang">
        <Shuliang></Shuliang>
      </div>
    </div>
    <div class="center">
      <Centers></Centers>
    </div>
    <!-- a1板块 -->
    <div class="publicize">
      <Publicize></Publicize>
    </div>
    <!-- 底部 -->
    <div class="bottoms">
      <div class="rigth">
        <!-- 驾校排名 -->
        <Roader></Roader>
      </div>
      <div class="left">
        <!-- 检测站排名 -->
        <Jianche></Jianche>
      </div>
    </div>
    <div class="performance">
      <!-- 机关序列 -->
      <div class="pie">
        <Pie></Pie>
      </div>
      <!-- 政治 -->
      <!-- 集体荣誉 个人荣誉 -->
      <div class="zhenzhi">
        <Zhenzhi></Zhenzhi>
      </div>
      <!-- 减量空大 -->
      <div class="jianliang">
        <Jianliang></Jianliang>
      </div>
    </div>
  </div>
</template>

<script>
import Roader from "./components/Roader.vue";
import Threed from "./components/Threed.vue";
import Zhuzhuangtu from "./components/zhuzhuangtu.vue";
import Tubiao from "./components/Tubiao.vue";
import Jianche from "./components/jianche.vue";
import Publicize from "./components/publicize.vue";
import Pie from "./components/Pie.vue";
import Yun from "./components/yun.vue";
import Paiming from "./components/paiming.vue";
import Shuliang from "./components/shuliang.vue";
import Jianliang from "./components/jianliang.vue";
import Zhenzhi from "./components/zhenzhi.vue";
import Centers from "./components/center.vue";
import Fazhishuju from "./components/fazhishuju.vue";

export default {
  data() {
    return {
      config: {
        data: [25],
        shape: "round",
      },
    };
  },
  components: {
    Roader,
    Threed,
    Zhuzhuangtu,
    Tubiao,
    Jianche,
    Publicize,
    Pie,
    Yun,
    Paiming,
    Shuliang,
    Jianliang,
    Zhenzhi,
    Centers,
    Fazhishuju,
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
    transform: translateY(280px);
  }
  100% {
    transform: translateY(0px);
  }
}
.main {
  width: 1920px;
  height: 996px;
  position: relative;

  // 法制
  .legality {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 400px;
    height: 948px;
    opacity: 0.9;
    background-image: url(../../assets/服务保障/法制bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: identifier_r 2s;
    // 云裁决系统
    .yun {
      position: absolute;
      top: 100px;
      width: 400px;
      height: 120px;
    }
    // 执法质量排名
    .paiming {
      position: absolute;
      top: 200px;
      width: 400px;
      height: 350px;
    }
    // 法制数据
    .fazhishuju {
      position: absolute;
      left: 28px;
      top: 520px;
      width: 347px;
      height: 220px;
    }
    // 车管立案
    .shuliang {
      position: absolute;
      left: 28px;
      bottom: 20px;
      width: 347px;
      height: 180px;
    }
  }

  //  重点三率
  .center {
    position: absolute;
    top: 40px;
    left: 480px;
    width: 950px;
    height: 350px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-image: url(../../assets/服务保障/6.png);
    // background: red;
  }
  // 宣传板块
  .publicize {
    position: absolute;
    top: 382px;
    left: 510px;
    width: 900px;
    height: 150px;
    // background: rgb(12, 204, 108);
  }
  // 绩效考核
  .performance {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 400px;
    height: 948px;
    opacity: 0.9;
    background-image: url(../../assets/服务保障/绩效bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation: identifier 2s;
    // 3d饼状图
    .pie {
      position: absolute;
      top: 100px;
      width: 400px;
      height: 220px;
    }

    // 政治
    .zhenzhi {
      position: absolute;
      top: 360px;
      width: 400px;
      height: 220px;
    }
    // 减量控大
    .jianliang {
      position: absolute;
      bottom: 0px;
      width: 400px;
      height: 340px;
    }
  }
  // 底部
  .bottoms {
    position: absolute;
    bottom: 35px;
    left: 440px;
    width: 1053px;
    height: 280px;
    background-image: url(../../assets/秩序管理/下面背景.png);
    display: flex;
    animation: identifier_b 2s;
    .rigth {
      flex: 1;
      width: 100%;
      height: 100%;
      margin-right: 30px;
    }
    .left {
      flex: 1;
      width: 100%;
      height: 100%;
    }
  }
}
</style>