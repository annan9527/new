<template>
  <div ref="chart4" style="width: 100%; height: 100%; padding-left: 20px;"></div>
</template>
    
    <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        title: {
          text: "警情趋势",
          top: "0%",
          right: "5%",
          textStyle: {
            color: "#fff",
            fontSize: "16",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2021", "2022"],
          top: "0%",
          left: "5%",
          textStyle: {
            color: "#fff",
            fontSize: "16",
          },
          itemWidth: 8,
          itemHeight: 8,
          icon: "square",
        },
        grid: {
          left: "0",
          top: "30",
          right: "10",
          bottom: "0",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              // "10",
              // "11",
              // "12",
            ],
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            axisLabel: {
              //   margin: 10,
              color: "#e2e9ff",
              textStyle: {
                fontSize: 16,
              },
            },
          },
        ],
        yAxis: [
          {
            min: 0, //y轴的最小值
            max: 10000, //y轴最大值
            interval: 2000, //值之间的间隔
            splitNumber: 3,
            axisLabel: {
              formatter: "{value}",
              color: "#e2e9ff",
              textStyle: {
                fontSize: 12,
              },
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
                type: "dotted",
              },
            },
          },
        ],
        series: [
          
          {
            name: "2021",
            type: "line",
            //  smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            areaStyle: {
              normal: {
                color: "rgba(101,192,205,.1)",
              },
            },
            lineStyle: {
              normal: {
                color: "#58c8da",
                width: 2,
              },
            },

            itemStyle: { normal: { color: "#58c8da" } },
            data: [7532,5005,6283,6592,6827,6351,6881,6707,6426],
          },
          {
            name: "2022",
            type: "line",
            //   smooth: true,
            symbol: "circle",
            symbolSize: 3,
            showSymbol: false,
            areaStyle: {
              normal: {
                color: "rgba(39,255,151,.1)",
              },
            },

            lineStyle: {
              normal: {
                color: "rgba(39,255,151,.8)",
                width: 2,
              },
            },

            itemStyle: { normal: { color: "rgba(39,255,151)" } },
            data: [6606,4930,4082,5962,6359,6714,7209,6736,2842],
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