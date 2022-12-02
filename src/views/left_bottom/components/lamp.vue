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
        color: ["#FCB344", "#F64744"],
        legend: {
          left: "50%",
          top: "3%",
          itemWidth: 10,
          itemHeight: 8,
          itemGap: 15,
          textStyle: {
            fontFamily: "MicrosoftYaHei",
            fontSize: 14,
            color: "rgba(178, 175, 173, 1)",
          },
          data: ["登记故障", "处理故障"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          backgroundColor: "rgba(42, 51, 74, 0.89)",
          borderColor: "transparent",
          formatter: function (params) {
            let returnData = '<div style="padding: 2px 10px;">';
            returnData +=
              '<span style="font-family: MicrosoftYaHei; font-size: 14px; color: rgba(210, 221, 249, 1);">' +
              params[0].axisValue +
              "</span><br/>";
            for (let i = 0; i < params.length; i++) {
              returnData +=
                '<span style="display:inline-block; width:10px; height:8px; margin-right:5px; border-radius:1px; background-color:' +
                params[i].color +
                '"></span>';
              returnData +=
                '<span style="font-family: MicrosoftYaHei; font-size: 14px; color: rgba(178, 175, 173, 1); ">' +
                params[i].seriesName +
                '：</span><span style="font-family: Verdana; font-size: 12px; color: ' +
                params[i].color +
                '">' +
                params[i].value +
                '</span><span style="display:inline-block; margin-left: 4px; line-height: 10px; font-family: MicrosoftYaHei; font-size: 12px; color: rgba(178, 175, 173, 1);">条</span><br/>';
            }
            returnData += "</div>";
            return returnData;
          },
        },
        grid: {
          left: "0%",
          top: "5%",
          right: "15%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: {
          min: 0, //y轴的最小值
          max: 5000, //y轴最大值
          interval: 1000, //值之间的间隔
          splitNumber: 5,
          type: "value",
          name: "条",
          nameTextStyle: {
            fontFamily: "MicrosoftYaHei",
            fontSize: 12,
            color: "#fff",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            margin: 10,
            fontFamily: "MicrosoftYaHei",
            fontSize: 12,
            color: "#fff",
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          data: ["信号灯", "监控设备", "非现场执法"],
          interval: true,
          axisLine: {
            lineStyle: {
              fontSize: "12",
              color: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            margin: 10,
            fontFamily: "MicrosoftYaHei",
            fontSize: 12,
            color: "#fff",
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "登记故障",
            type: "bar",
            stack: "truck",
            barWidth: 20,
            itemStyle: {
              borderColor: "transparent",
              borderWidth: 3,
            },
            label: {
              show: false,
            },
            data: [1009, 1009, 2006],
          },
          {
            name: "处理故障",
            type: "bar",
            stack: "truck",
            barWidth: 20,
            itemStyle: {
              borderColor: "transparent",
              borderWidth: 3,
            },
            label: {
              show: false,
            },
            data: [2008, 1006, 2004],
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