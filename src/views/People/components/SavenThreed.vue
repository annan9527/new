<template>
  <div ref="chart4" style="width: 100%; height: 100%" class="pie"></div>
</template>
      
      <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            console.log(params);
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" +
                params[i].marker +
                params[i].seriesName +
                params[i].value +
                "%";
            }

            return relVal;
          },
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "2%",
          top: "16%",
          containLabel: true,
        },
        legend: {
          data: ["逾期未审验", "逾期未换证", "满分未学习"],
          right: 10,
          top: 12,
          textStyle: {
            color: "#fff",
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
        xAxis: {
          type: "category",
          data: ["柯城区", "衢江区", "集聚区", "江山", "常山", "龙游", "开化"],
          axisLine: {
            lineStyle: {
              color: "white",
            },
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: "Microsoft YaHei",
            },
          },
        },

        yAxis: {
          type: "value",
          max: "100",
          axisLine: {
            show: false,
            lineStyle: {
              color: "white",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.3)",
            },
          },
          axisLabel: {},
        },

        series: [
          {
            name: "逾期未审验",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#fccb05",
                  },
                  {
                    offset: 1,
                    color: "#f5804d",
                  },
                ]),
                barBorderRadius: 12,
              },
            },
            data: [40, 40, 30, 30, 30, 40, 40, 40, 30],
          },
          {
            name: "逾期未换证",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#8bd46e",
                  },
                  {
                    offset: 1,
                    color: "#09bcb7",
                  },
                ]),
                barBorderRadius: 11,
              },
            },
            data: [40, 50, 50, 50, 50, 40, 40, 50, 50],
          },
          {
            name: "满分未学习",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#248ff7",
                  },
                  {
                    offset: 1,
                    color: "#6851f1",
                  },
                ]),
                barBorderRadius: 11,
              },
            },
            data: [40, 60, 70, 70, 60, 40, 40, 60, 70],
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
};
</script>
      
      <style lang="scss" scoped>
</style>