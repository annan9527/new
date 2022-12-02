<template>
  <!-- 主体内容 -->
  <div class="main">
    <!-- 顶部导航 -->
    <div class="top">
      <Top></Top>
    </div>
    <div class="map">
      <Map></Map>
    </div>
    <div class="left_top">
      <div class="name" @click="go('safe')">安全态势</div>
      <!-- 亡人数 -->
      <div class="death_number">
        <DeathNumber></DeathNumber>
      </div>
      <!-- 同比图表 -->
      <div class="death">
        <Death></Death>
      </div>
      <!-- 隐患数 -->
      <div class="progress">
        <Progress></Progress>
      </div>
    </div>
    <div class="left_botton">
      <div class="name" @click="go('order')">秩序管理</div>
      <!-- 拥堵路段 -->
      <div class="congestion">
        <Congthion></Congthion>
      </div>
      <!-- 平均车速 -->
      <div class="avature">
        <Avature></Avature>
      </div>
      <!-- 酒驾趋势 -->
      <div class="trend">
        <Trend></Trend>
      </div>
      <div class="construction">
        <Construction></Construction>
      </div>
    </div>
    <div class="rigth_top">
      <div class="name" @click="go('alerttrends')">情指勤舆</div>
      <!-- 舆情趋势统计 -->
      <div class="PublicSentiment">
        <PublicSentiment></PublicSentiment>
      </div>
      <!-- 警情趋势图 -->
      <div class="linechart">
        <Linechart></Linechart>
      </div>
      <!-- 舆情热线 -->
      <div class="hotline">
        <Hotline></Hotline>
      </div>
      <!-- 快处数 -->
      <div class="processing">
        <Processing></Processing>
      </div>
    </div>
    <div class="rigth_botton">
      <div class="name" @click="go('serve')">服务保障</div>
      <!-- 三格驾考表统计 -->
      <div class="driving">
        <Driving></Driving>
      </div>
      <!-- 雷达 -->
      <div class="radar">
        <Radar></Radar>
      </div>
      <!-- 驾考柱状图 -->
      <div class="schoolrankings">
        <SchoolRankings></SchoolRankings>
      </div>
    </div>
    <div class="botton">
      <Botton></Botton>
    </div>
  </div>
</template>

<script>
import Timer from "../../components/Timer.vue";
import Map from "../../components/Map.vue";
import Death from "../../components/Death.vue";
import Progress from "../../components/Progress.vue";
import DeathNumber from "../../components/DeathNumber.vue";
import Congthion from "../../components/Congthion.vue";
import Avature from "../../components/Avatu.vue";
import Trend from "../../components/Trend.vue";
import Construction from "../../components/Construction.vue";
import Top from "../../components/Top.vue";
import Botton from "../../components/botton.vue";
import Linechart from "../../components/Linechart.vue";
import PublicSentiment from "../../components/PublicSentiment.vue";
import Hotline from "../../components/Hotline.vue";
import Processing from "../../components/Processing.vue";
import Driving from "../../components/Driving.vue";
import Radar from "../../components/Radar.vue";
import SchoolRankings from "../../components/SchoolRankings.vue";
import Speed from "../../components/Speed.vue";

export default {
  methods: {
    login() {
      // this.$message("等待后续开发");
      alert("待开发");
    },
    go(val) {
      // this.$router.push({
      //   path: `/${val}`,
      // });
      this.$router.push(`/${val}`);
    },
  },
  components: {
    Timer,
    Map,
    Death,
    Progress,
    DeathNumber,
    Congthion,
    Avature,
    Trend,
    Construction,
    Top,
    Botton,
    Linechart,
    PublicSentiment,
    Hotline,
    Processing,
    Driving,
    Radar,
    SchoolRankings,
    Speed,
  },
};
</script >

<style lang="scss" scoped>
@keyframes identifier {
  0% {
    transform: translateX(400px);
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
@keyframes identifier_b {
  0% {
    transform: translateY(230px);
  }
  100% {
    transform: translateY(0px);
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
.main {
  position: relative;
  margin-top: 20px;
  width: 1920px;
  height: 980px;
  .top {
    height: 100px;
    position: absolute;
    top: 0px;
    left: 230px;
    animation: identifier_t 2s;
  }
  // 地图
  .map {
    z-index: 999;
    width: 1920px;
    height: 996px;
  }
  // 旋转背景

  .left_top {
    animation: identifier_r 2s;
    left: 20px;
    top: 0;
    position: absolute;
    width: 400px;
    height: 500px;
    opacity: 0.9;
    background-image: url(../../assets/image/外框500px.png);
    cursor: pointer;
    // 标题
    .name {
      position: absolute;
      top: 20px;
      height: 30px;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ecf9ff;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }
    // 亡人数
    .death_number {
      top: 75px;
      position: absolute;
      width: 100%;
      height: 100px;
      // background-color: rgb(30, 186, 186);
      display: flex;
    }
    // 亡人数图表
    .death {
      top: 155px;
      position: absolute;
      width: 400px;
      height: 148px;
    }
    // 隐患数
    .progress {
      top: 325px;
      position: absolute;
    }
  }
  .left_botton {
    animation: identifier_r 2s;
    left: 20px;
    top: 520px;
    position: absolute;
    width: 400px;
    height: 440px;
    opacity: 0.9;
    background-image: url(../../assets/image/外框440px.png);
    .name {
      position: absolute;
      top: 20px;
      height: 30px;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ecf9ff;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }
    // top5
    .congestion {
      position: absolute;
      left: 15px;
      top: 78px;
    }
    // 平均车速
    .avature {
      position: absolute;
      right: 35px;
      top: 73px;
    }
    // 酒驾趋势
    .trend {
      position: absolute;
      top: 250px;
    }
    // 施工现场
    .construction {
      position: absolute;
      bottom: 45px;
      left: 15px;
    }
  }
  .rigth_top {
    animation: identifier 2s;
    right: 20px;
    top: 0;
    position: absolute;
    width: 400px;
    height: 500px;
    opacity: 0.9;
    background-image: url(../../assets/image/外框500px.png);
    .linechart {
      position: absolute;
      top: 190px;
      width: 400px;
      height: 148px;
    }
    .PublicSentiment {
      left: 21px;
      position: absolute;
      top: 80px;
    }
    // 舆情热线
    .hotline {
      left: 21px;
      position: absolute;
      top: 350px;
    }
    // 快处数
    .processing {
      left: 15px;
      position: absolute;
      top: 220px;
    }
    .name {
      position: absolute;
      top: 20px;
      height: 30px;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ecf9ff;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }
  }
  .rigth_botton {
    animation: identifier 2s;
    right: 20px;
    top: 520px;
    position: absolute;
    width: 400px;
    height: 440px;
    opacity: 0.9;
    background-image: url(../../assets/image/外框440px.png);

    .name {
      position: absolute;
      top: 20px;
      height: 30px;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ecf9ff;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }
    .driving {
      position: absolute;
      top: 44px;
      left: 18px;
    }
    // 雷达图
    .radar {
      line-height: 180px;
      position: absolute;
      top: 65px;
      right: 19px;
      width: 200px;
      height: 200px;
    }
    // 驾考排名
    .schoolrankings {
      position: absolute;
      bottom: 11px;
      width: 400px;
      height: 168px;
    }
  }
  // 底部导航栏
  .botton {
    position: absolute;
    bottom: 0px;
    left: 230px;
    animation: identifier_b 2s;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-weight: 400;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>