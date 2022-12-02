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
        series: [
          {
            name: "通行效率",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 100,
            splitNumber: 0,
            radius: "90%",
            center: ["15%", "55%"],
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"]
                ],
              },
              backgroundColor: "none",
            },
            axisTick: {
              // 坐标轴小标记
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
              },
            },
            splitLine: {
              // 分隔线
              length: 8, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "rgba(255,255,255,0.7)",
              },
            },
            axisLabel: {
              show: false,
              borderRadius: 1,
              color: "rgba(255,255,255,0.7)",
              padding: 0,
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              // fontWeight: 'bolder',
              fontSize: 12,
              fontColor: "#FFF",
              color: "#FFF",
              paddingTop: 10,
              offsetCenter: [0, "90%"],
              // fontStyle: 'italic'
            },
            itemStyle: {
              color: "#1092ff",
            },
            detail: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              // borderWidth: 1,
              textBorderColor: "#000",
              textBorderWidth: 1,
              textShadowBlur: 1,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              paddingTop: 10,
              fontFamily: "digital",
              fontSize: 14,
              width: 30,
              color: "#fff",
              rich: {},
              offsetCenter: [0, "50%"],
              formatter: function (value) {
                return value;
              },
            },
            data: [
              {
                value: 84,
                name: "通行效率",
              },
            ],
          },
          {
            name: "主干道速度",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 100,
            splitNumber: 0,
            radius: "90%",
            center: ["50%", "55%"],
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"]
                ],
              },
              backgroundColor: "none",
            },
            axisTick: {
              // 坐标轴小标记
              length: 8, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
              },
            },
            tooltip: {
              formatter: function () {
                if (dataArry.two) {
                  return "主干道速度:" + dataArry.two;
                }
              },
            },
            splitLine: {
              // 分隔线
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "rgba(255,255,255,0.7)",
              },
            },
            axisLabel: {
              show: false,
              borderRadius: 1,
              color: "rgba(255,255,255,0.7)",
              padding: 1,
            },
            title: {
              fontSize: 12,
              fontColor: "#FFF",
              color: "#FFF",
              paddingTop: 10,
              offsetCenter: [0, "90%"],
            },
            itemStyle: {
              color: "#1092ff",
            },
            detail: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              textBorderColor: "#000",
              textBorderWidth: 1,
              textShadowBlur: 1,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              paddingTop: 10,
              fontFamily: "digital",
              fontSize: 14,
              width: 30,
              color: "#fff",
              rich: {},
              offsetCenter: [0, "50%"],
              formatter: function (value) {
                return value;
              },
            },
            data: [
              {
                value: 37,
                name: "主干道速度",
              },
            ],
          },
          {
            name: "畅通比例",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 100,
            splitNumber: 0,
            radius: "90%",
            center: ["85%", "55%"],
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"]
                ],
              },
              backgroundColor: "none",
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
              },
            },
            splitLine: {
              // 分隔线
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "rgba(255,255,255,0.7)",
              },
            },
            tooltip: {
              formatter: function () {
                if (dataArry.three) {
                  return "畅通比例:" + dataArry.three;
                }
              },
            },
            axisLabel: {
              show: false,
              borderRadius: 1,
              color: "rgba(255,255,255,0.7)",
              padding: 1,
            },
            title: {
              fontSize: 12,
              fontColor: "#FFF",
              color: "#FFF",
              paddingTop: 5,
              offsetCenter: [0, "90%"],
            },
            itemStyle: {
              color: "#1092ff",
            },
            detail: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              textBorderColor: "#000",
              textBorderWidth: 1,
              textShadowBlur: 1,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              paddingTop: 10,
              fontFamily: "digital",
              fontSize: 14,
              width: 30,
              color: "#fff",
              rich: {},
              offsetCenter: [0, "50%"],
              formatter: function (value) {
                return value;
              },
            },
            data: [
              {
                value: 98,
                name: "畅通比例",
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