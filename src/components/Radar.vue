<template>
  <div ref="chart4" style="width: 100%; height: 100%"></div>
</template>
    
    <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        color: ["#67F9D8"],
        legend: {},

        radar: [
          {
            center: ["50%", "60%"],
            radius: 60,
            // 圆的半径，数组的第一项是内半径，第二项是外半径。

            indicator: [
              { text: "车辆报废率", max: 100 },
              { text: "车辆检验率", max: 100 },
              { text: "检验通过率", max: 100 },
              { text: "科二三通过率", max: 100 },
              { text: "违法处理率", max: 100 },
            ],
            nameGap: 1, //指示器名称和指示器轴的距离。
            splitNumber: 3,
            shape: "square",
            axisName: {
              formatter: function (value) {
                let list = value.split("");
                let result = "";
                for (let i = 1; i <= list.length; i++) {
                  if (!(i % 3) && list[i] != undefined) {
                    result += list[i - 1] + "\n";
                  } else {
                    result += list[i - 1];
                  }
                }
                return result;
              },
              color: "#428BD4",

              fontSize: 12,
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["#006ac8", "#005daf", "#004381", "#00274e"],
                // 图表背景网格的颜色
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "#1e83e4",
              },
            },
          },
        ],
        series: [
          {
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 1,
              },
            },
            itemStyle: {
              emphasis: {
                // 高亮时的样式
                lineStyle: {
                  width: 5,
                },
                opacity: 1,
              },
            },
            data: [
              {
                value: [99.3, 99.79, 95.64, 35, 98.78],
                areaStyle: {
                  // 单项区域填充样式
                  normal: {
                    color: "rgba(211, 253, 250, 0.8)", // 填充的颜色。[ default: "#000" ]
                  },
                },
              },
            ],
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