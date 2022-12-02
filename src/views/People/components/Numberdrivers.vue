<template>
  <div class="box">
    <!-- 吸毒人员 -->

    <div class="xidu">
      <div class="title">
        <div class="ava" style="line-height: 10px">
          <img src="../../../assets/人/吸毒.png" alt="" />
        </div>
        <div>吸毒人员：</div>
      </div>
      <!-- 进度 -->
      <div class="progress">
        <div ref="chart4" style="width: 100%; height: 100%" class="pie"></div>
      </div>
      <!-- 数量统计 -->
      <div class="num">
        <div style="color: #ffdb4c">7</div>
        <div>/</div>
        <div>14</div>
      </div>
    </div>
    <!-- 精神人员 -->
    <div class="jinshen">
      <div class="title">
        <div style="line-height: 10px; margin-right: 10px">
          <img src="../../../assets/人/精神病.png" alt="" />
        </div>
        <div>精神病人员:</div>
      </div>
      <!-- 精神人员图标表 -->
      <div class="main">
        <people-pie></people-pie>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import PeoplePie from './PeoplePie.vue';

export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      let data = {
        activeTotalForToday: 7,
        carTotal: 14,
      };
      myChart.setOption({
        animation: true,
        grid: {
          top: "center",
          // bottom: "1%", //也可设置left和right设置距离来控制图表的大小
          left: "1%",
          right: ".5%", //也可设置left和right设置距离来控制图表的大小
        },
        xAxis: {
          type: "value",
          gridIndex: 0,
          min: 0,
          max: data.carTotal,
          interval: 25,
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis: [
          {
            data: ["市区"],
            axisLine: {
              show: false, //隐藏X轴轴线
            },
            axisTick: {
              show: false, //隐藏X轴刻度
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            // 值
            name: "情况",
            type: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 1,
                    color: "#0051FF",
                  },
                  {
                    offset: 0,
                    color: "#00DDFF",
                  },
                ]),
              },
            },
            data: [data.activeTotalForToday],
            z: 10,
            zlevel: 2,
            label: {
              show: false,
            },
          },
          {
            // 值分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#002a4c",
              },
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [6, 20],
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: [data.activeTotalForToday],
            width: 15,
            z: 0,
            zlevel: 3,
          },
          {
            //辅助背景图形
            name: "背景条",
            type: "bar",
            barWidth: "20",
            barGap: "-100%",
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: "RGBA(13, 58, 82, 1)",
              },
              barBorderRadius: 10,
            },
            data: [data.carTotal],
            z: 0,
            zlevel: 0,
          },
          {
            // 背景分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#002a4c",
              },
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [6, 20],
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: [data.carTotal],
            width: 15,
            z: 0,
            zlevel: 1,
          },
        ],
      });
      myChart.on("click", function (params) {
        //防止重复点击
        //   if(this.name == e.name){
        //     return false;
        // }
        console.log(params, "123");
      });
    },
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.initCharts4();
    });
  },
  components: {PeoplePie},
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;

  // 吸毒人员
  .xidu {
    padding-left: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 480px;
    height: 50px;
    background-color: rgba($color: #108de7, $alpha: 0.2);
    border-radius: 3px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    display: flex;
    justify-items: center;
    align-items: center;

    .title {
      flex: 2;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .progress {
      flex: 6;
      width: 100%;
      height: 100%;
    }
    .num {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  // 精神人员
  .jinshen {
    position: absolute;
    top: 50px;
    left: 0;
    width: 480px;
    height: 160px;

    .title {
      width: 480px;
      height: 20px;

      display: flex;
      justify-content: left;
      align-items: center;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
    .main {
      
      width: 480px;
      height: 140px;
    }
  }
}
</style>