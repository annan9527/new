<template>
  <div class="main">
    <div class="maps">
      
      <div class="map">
        <!-- 拥堵路段排行 -->
        <div class="tops">
          <Top> </Top>
        </div>
        <!-- 勤务播报 -->
        <div class="broadcast">
          <Banner></Banner>
        </div>
        <!-- 在岗人数 -->
        <div class="tops_two">
          <TopList_two></TopList_two>
        </div>
      </div>
    </div>

    <!-- <div class="banner">
      <Banner></Banner>
    </div> -->
    <!-- 月警情数 -->
    <div class="moth_policenumber">
      <Moth_policenumber></Moth_policenumber>
    </div>

    <!-- 底部 -->
    <div class="bottom">
      <!-- 拥堵路段排名 -->
      <div class="item">
        <Yongdu></Yongdu>
      </div>
      <div class="item1">
        <!-- 卡口 -->
        <News></News>
      </div>

      <div class="item2">
        <!-- 折线图 -->
        <LineCharts></LineCharts>
      </div>
    </div>
    <!-- <div class="back" @click="back">
      <div class="img"><img src="../../assets/情指情舆/返回.png" alt="" /></div>
      <div>返回</div>
    </div> -->
    <div class="top">
      <!-- 八分钟到场率 -->
      <div class="one">
        <Police_top></Police_top>
      </div>
      <div class="two">
        <Police_line></Police_line>
      </div>
    </div>
    <div class="center">
      <!-- 近期热点 -->
      <div class="hot">
        <div class="hot_main">
          <News3></News3>
        </div>
      </div>
      <!-- 信访 -->
      <div class="mes">
        <Mes></Mes>
      </div>
    </div>
    <div class="bottoms">
      <Watch></Watch>
    </div>
  </div>
</template>

<script>
import Banner from "./components/banner.vue";
import News from "./components/News.vue";
import LineCharts from "./components/LineCharts.vue";
import Police_top from "./components/Police_top.vue";
import Police_line from "./components/Police_line.vue";
import News3 from "./components/News3.vue";
import Mes from "./components/Mes.vue";
import Watch from "./components/Watch.vue";
import Top from "./components/TopList.vue";
import Moth_policenumber from "./components/Moth_policenumber.vue";
import TopList_two from "./components/TopList_two.vue";

import Yongdu from "./components/yongdu.vue";

export default {
  data() {
    return {
      
      
    };
  },
  methods: {},
  components: {
    Banner,
    News,
    LineCharts,
    Police_top,
    Police_line,
    News3,
    Mes,
    Watch,
    Top,
    Moth_policenumber,
    TopList_two,
    Yongdu,
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 1920px;
  height: 996px;
  position: relative;
  .maps {
    width: 1500px;
    height: 996px;
    background-image: url(../../assets/情指情舆/地图.png);
    background-position-y: -40px;
    background-repeat: no-repeat;
    background-position: 100% 100%;
  }
  //  地图
  .map {
    padding-top: 5px;
    position: absolute;
    width: 1500px;
    height: 996px;
    .tops {
      position: absolute;
      left: 60px;
      top: 180px;
    }
    .tops_two {
      position: absolute;
      right: 60px;
      top: 180px;
    }
  }

  //  勤务播报
  .broadcast {
    position: absolute;
    top: 40px;
    left: 60px;
  }

  // 月警情数
  .moth_policenumber {
    position: absolute;
    left: 50%;
    top: 42px;
    transform: translateX(-50%);
  }
  //  底部
  .bottom {
    left: 16px;
    bottom: 20px;
    position: absolute;
    width: 1460px;
    height: 300px;
    background-color: rgb(5, 5, 5, 0.5);
    display: flex;
    padding-left: 20px;
    .item {
      width: 400px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .item1 {
      width: 800px;
      height: 300px;
    }
    .item2 {
      width: 400px;
      height: 300px;
    }
  }
  // 轮播
  .banner {
    left: 30px;
    bottom: 170px;
    position: absolute;
  }
  // 左边
  // .back {
  //   right: 40px;
  //   position: absolute;
  //   top: 0px;
  //   width: 80px;
  //   height: 30px;
  //   cursor: pointer;
  //   text-align: center;
  //   line-height: 30px;
  //   display: flex;
  //   .img {
  //     width: 30px;
  //     height: 30px;
  //     border-radius: 50%;
  //     background: #032b55;
  //     margin-right: 5px;
  //   }
  //   img {
  //     width: 24px;
  //     height: 24px;
  //   }
  // }
  .top {
    right: 0px;
    top: 10px;
    position: absolute;
    width: 400px;
    height: 310px;
    background-image: url(../../assets/情指情舆/01.png);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    margin-right: 10px;
    background-size: 100% 100%;
    animation: identifier 2s;
    .one {
      width: 400px;
      height: 100px;
      top: 67px;
      position: absolute;
    }
    .two {
      position: absolute;

      top: 170px;
      width: 400px;
      height: 140px;
    }
  }
  .center {
    right: 0px;
    top: 342px;
    position: absolute;
    width: 400px;
    height: 310px;
    background-image: url(../../assets/情指情舆/02.png);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    margin-right: 10px;
    animation: identifier 2s;
    .hot {
      position: absolute;
      top: 70px;
      left: 18px;
      width: 365px;
      height: 50px;
      border-radius: 3px;
      background-image: url(../../assets/情指情舆/热点.png);
      .hot_main {
        width: 250px;
        height: 50px;
        float: right;
      }
    }
    .mes {
      position: absolute;
      left: 0px;
      top: 140px;
    }
  }
  @keyframes identifier {
    0% {
      transform: translateX(400px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  // 车辆监管
  .bottoms {
    padding: 10px;
    right: 0px;
    top: 680px;
    position: absolute;
    width: 400px;
    height: 300px;
    background-image: url(../../assets/情指情舆/感知.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 10px;
    animation: identifier 2s;
    //  车辆监管

    // 考试监管
  }
}
</style>