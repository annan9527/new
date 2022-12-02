<template>
  <div ref="chart4" style="width: 100%; height: 100%; "></div>
</template>
            
            <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      var xData = ["柯城", "衢江", "集聚区", "开化", "常山", "龙游", "江山"];

      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          borderWidth: 0,
          top: 80,
          bottom: 30,
          right: 0,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          x: "60%",
          top: "5%",
          textStyle: {
            color: "#90979c",
          },
          data: ["注销数", "未注销数"],
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                fontSize: 20,
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#00cfff",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "注销数",
            type: "bar",
            stack: "总量",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "#00fff9",
                label: {
                  show: false,
                  textStyle: {
                    color: "#fff",
                  },
                  position: "inside",
                  formatter: function (p) {
                    return p.value > 0 ? p.value : "";
                  },
                },
              },
            },
            data: [709, 1917, 2455, 2610, 1719, 1433, 1544],
          },
          {
            name: "未注销数",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#00ffae",
                barBorderRadius: 0,
                label: {
                  show: false,
                  position: "inside",
                  formatter: function (p) {
                    return p.value > 0 ? p.value : "";
                  },
                },
              },
            },
            data: [327, 1776, 507, 1200, 800, 482, 204],
          },
          {
            name: "总数",
            type: "line",
            symbolSize: 0,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "rgba(252,230,48,1)",
                barBorderRadius: 0,
                label: {
                  show: false,
                  position: "top",
                  formatter: function (p) {
                    return p.value > 0 ? p.value : "";
                  },
                },
              },
            },
            data: [1036, 3693, 2962, 3810, 2519, 1915, 1748],
          },
        ],
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
</style>