<template>
  <div class="box">
    <div class="left_pie">
      <div ref="chart4" style="width: 95%; height: 100%"></div>
    </div>
    <div class="rigth_list">
      <div class="item">
        <span class="title" style=" background: #ffc300;"></span>
        纪元电器路口<span style="color: #ffdb4c">已验收</span>
      </div>
      <div class="item">
        <span class="title" style=" background: #00e473;"></span>
        坛贺线路口路段<span style="color: #ffdb4c">已验收</span>
      </div>
      <div class="item">
        <span class="title" style=" background: red;"></span>
        仙岩路路口<span style="color: #ffdb4c">已验收</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      // 色值
      let color = ["#ffc300", "#00e473", "red"];
      // 图例
      let legendData = ["纪元电器路口", "坛贺线路口路段", "仙岩路路口"];
      let pieData = [100, 100, 100];
      // 最大值
      let sum = 100;
      // 图表option整理
      let pieSeries = [];
      pieData.forEach((v, i) => {
        pieSeries.push({
          type: "pie",
          clockWise: false,
          hoverAnimation: false,
          radius: [90 - i * 8 + "%", 80 - i * 8 + "%"],
          center: ["40%", "50%"],
          label: {
            show: false,
          },
          data: [
            // 值
            {
              value: (v / 100) * 270,
              name: legendData[i],
            },
            // 阴影
            {
              value: 270 - (v / 100) * 270,
              name: legendData[i],
              itemStyle: {
                opacity: 0.2,
              },
            },
            // 空白
            {
              value: 80,
              name: legendData[i],
              itemStyle: {
                opacity: 0,
              },
            },
          ],
        });
      });
      myChart.setOption({
        color: color,
        grid: {
          top: "0%",
          bottom: "0%",
          left: "0%",
          containLabel: false,
        },
        legend: {
          show: true,
          icon: "circle",
          top: "10%",
          left: "40%",
          data: legendData,
          width: 40,
          padding: [0, 18],
          itemGap: 5,
          formatter: function (name) {
            const inx = legendData.indexOf(name);
            return "{title|" + name + " }";
          },
          textStyle: {
            rich: {
              title: {
                fontSize: 12,
                lineHeight: 20,
                color: "#fff",
              },
              value: {
                fontSize: 12,
                lineHeight: 10,
                color: "#fff",
              },
            },
          },
        },
        series: pieSeries,
      });
    },
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.initCharts4();
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 470px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  .left_pie {
    flex: 1.5;
    width: 100%;
    height: 100%;
  }
  .rigth_list {
    width: 250px;
    height: 100px;
    background-color: rgba($color: #0269e9, $alpha: 0.3);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      width: 9px;
      height: 9px;
     
      display: inline-block;
    }
    .item {
      margin: 2px;
      padding: 5px;
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>