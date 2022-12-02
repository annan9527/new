<template>
  <div class="box">
    <!-- 顶部 -->
    <div class="Roadtop" :class="{ top_open: !show, top_close: show }">
      <Road_Top></Road_Top>
    </div>

    <div class="btn" @click="show = !show" v-if="show">
      <div class="img">
        <img src="../../assets/路切图/view_off.png" alt="" />
      </div>
      <div>点击显示</div>
    </div>
    <div class="btn" @click="show = !show" v-else>
      <div class="img">
        <img src="../../assets/路切图/view.png" alt="" />
      </div>
      <div>点击隐藏</div>
    </div>
    <div class="left" :class="{ left_open: show, left_close: !show }">
      <!-- 城市隧道切换 -->
      <div class="cheack">
        <CityCheack></CityCheack>
      </div>
      <!-- 公里数统计 -->
      <div class="roadlength">
        <road-length></road-length>
      </div>
      <!-- 省级道路事故多发点段 -->
      <div class="accident">
        <Accident></Accident>
      </div>
      <!-- 重点路口守法率 -->
      <div class="intersections">
        <intersections></intersections>
      </div>
    </div>
    <div class="rigth" :class="{ rigth_open: show, rigth_close: !show }">
      <!-- 市级路长制 -->
      <div class="roadsystem">
        <RoadSystem></RoadSystem>
      </div>

      <!-- 过期公告 -->
      <div class="newsbanner">
        <NewBanner></NewBanner>
      </div>
      <!-- 施工路段 -->
      <div class="construction">
        <ConstructionRoad></ConstructionRoad>
      </div>
    </div>
    <div class="map">
      <RoadMap></RoadMap>
    </div>
  </div>
</template>

<script>
import Accident from "./components/Accident.vue";
import CityCheack from "./components/CityCheack.vue";
import ConstructionRoad from "./components/ConstructionRoad.vue";
import Intersections from "./components/Intersections.vue";
import NewBanner from "./components/NewBanner.vue";
import RoadLength from "./components/RoadLength.vue";
import RoadMap from "./components/RoadMap.vue";
import RoadSystem from "./components/RoadSystem.vue";
import Road_Top from "./components/Road_Top.vue";

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    CityCheack,
    RoadLength,
    Intersections,
    NewBanner,
    ConstructionRoad,
    RoadSystem,
    Accident,
    RoadMap,
    Road_Top,
  },
};
</script>

<style lang="scss" scoped>
@keyframes left_open {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-570px);
  }
}
@keyframes left_close {
  0% {
    transform: translateX(-570px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes rigth_open {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(570px);
  }
}
@keyframes rigth_close {
  0% {
    transform: translateX(570px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes top_open {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes top_close {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-300px);
  }
}

.box {
  width: 100%;
  height: 100%;
  position: relative;
  .btn {
    position: absolute;
    width: 87px;
    height: 25px;
    top: 0px;
    right: 916px;
    z-index: 3;
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #f3f8fe;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      width: 30px;
      height: 25px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .left_open {
    animation: left_open 2s forwards;
  }
  .left_close {
    animation: left_close 2s forwards;
  }
  .rigth_open {
    animation: rigth_open 2s forwards;
  }
  .rigth_close {
    animation: rigth_close 2s forwards;
  }

  .top_open {
    animation: top_open 2s forwards;
  }
  .top_close {
    animation: top_close 2s forwards;
  }

  .Roadtop {
    z-index: 2;
    top: 40px;
    left: 160px;
    position: absolute;
    
  }
  .left {
    z-index: 2;
    top: 187px;
    left: 20px;
    width: 550px;
    height: 761px;
    position: absolute;
    background-image: url(../../assets/路切图/左边.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // 隧道检查
    .cheack {
      top: 74px;
      left: 24px;
      position: absolute;
      width: 230px;
      height: 180px;
      border-radius: 3px;
    }
    .accident {
      position: absolute;
      top: 310px;
      left: 24px;
    }
    // 公里数统计
    .roadlength {
      position: absolute;
      right: 50px;
      top: 104px;
      width: 235px;
      height: 150px;
      border-radius: 3px;
    }

    // 重点路口守法率
    .intersections {
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 480px;
      height: 200px;
    }
  }
  .rigth {
    z-index: 2;
    top: 187px;
    right: 20px;
    width: 550px;
    height: 761px;
    position: absolute;
    background-image: url(../../assets/路切图/右边.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;

    // 市级路长
    .roadsystem {
      position: absolute;
      top: 80px;
      right: 20px;
      width: 460px;
      height: 300px;
    }

    // 过期通告
    .newsbanner {
      position: absolute;
      bottom: 260px;
      right: 20px;
      width: 480px;
      height: 50px;
    }

    // 临期预警
    .construction {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 480px;
      height: 230px;
    }
  }
  .map {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>