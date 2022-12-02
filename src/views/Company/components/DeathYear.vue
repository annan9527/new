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
                "人";
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
          data: ["2023年", "2022年", "2021年"],
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
          data: ["航埠镇", "樟潭街道", "横山镇", "贺村镇", "青石镇", "芹阳办"],
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
          max: "20",
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
            name: "2021年",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: '#0269E9',
               
              },
            },
            data: [8,5,2,11,3,8],
          },
          {
            name: "2022年",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color:'#00CFFF'
               
              },
            },
            data: [9,3,4,15,1,3],
          },
          {
            name: "2023年",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: '#02E984'
                
              },
            },
            data: [7,5,3,12,5,4],
          },
        ],
          // 拖拽
          dataZoom: [
          {
            end: 60,
            type: "inside",
            xAxisIndex: 0,
            filterMode: "filter",
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