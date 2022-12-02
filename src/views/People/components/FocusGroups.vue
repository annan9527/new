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
        grid: {
          top: "15%",
          left: "0%",
          right: "0%",
          bottom: "10%",
          containLabel: true,
        },
        legend: {
          data: ["未成年人", "老年人"],
          align: "left",
          right: 10,
          top: 10,
          textStyle: {
            color: "rgba(255,255,255,0.8)",
          },
          itemWidth: 13,
          itemHeight: 10,
          itemGap: 25,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          //           formatter: function (params) {
          //             var result = "";
          //             params.forEach(function (item) {
          //               result = `<div style = "width: 100px;
          // height: 56px;color:#FFFFFF;  background: #3F8CF5; display: flex;flex-direction: column;
          //    justify-content: center;
          //   align-items: center;  color: #22C4E8;">

          // </div>`;
          //             });
          //             return result;
          //           },
        },
        xAxis: [
          {
            type: "category",
            axisLine: { lineStyle: { color: "rgba(180,180,180,0.22)" } },
            splitLine: { show: false },
            axisTick: { show: false },
            splitArea: { show: false },
            axisLabel: {
              interval: 0,
              color: "rgba(153,153,153,1)",
              fontSize: 14,
            },
            data: [
              "柯城区",
              "衢江区",
              "集聚区",
              "江山",
              "常山",
              "龙游",
              "开化",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 3,
            axisLine: {
              show: true,
              lineStyle: { color: "rgba(180,180,180,0.22)" },
            },
            axisTick: { show: false },
            axisLabel: {
              interval: 0,
              color: "#fff",
              fontSize: 14,
            },
            splitArea: { show: false },
            splitLine: { show: false },
          },
        ],

        series: [
          {
            name: "未成年人",
            stack: "overlap1", //堆叠效果(字符需要统一)
            type: "bar",
            barWidth: 20,
            label: {
              show: false,
              position: "top",
              textStyle: { color: "#fff" },
            },
            itemStyle: { color: "#02E984" },
            data: [70, 130, 160, 120, 126, 156, 186],
          },
          {
            name: "老年人",
            stack: "overlap1", //堆叠效果(字符需要统一)
            type: "bar",
            barWidth: 20,
            label: {
              show: false,
              position: "top",
              textStyle: { color: "#fff" },
            },
            itemStyle: { color: "#00CFFF" },
            data: [70, 130, 160, 45, 13, 45, 85],
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