<template>
  <div ref="chart4" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  methods: {
    initCharts4() {
      var colorList = ["#f36c6c", "#e6cf4e", "#20d180", "#0093ff"];
      var datas = [
        {
          value: 1236,
          name: "衢州高新物流                                                       ",
        },
        {
          value: 1214,
          name: "衢州诚丰物流",
        },
        {
          value: 1129,
          name: "衢州信安物流                                                       ",
        },
        {
          value: 925,
          name: "衢州物流",
        },
        {
          value: 855,
          name: "衢江恒帮物流",
        },
      ];
      let myChart = echarts.init(this.$refs.chart4);

      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          show: false,
        },
        grid: {
          left: "-7%",
          right: "5%",
          top: "5%",
          bottom: "-10%",
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30,
              },
            },
            data: datas.map((item) => item.name),
            axisLabel: {
              margin: 40,
              fontSize: 12,
              align: "left",
              color: "#fff",
              rich: {
                a1: {
                  color: "#fff",
                  backgroundColor: colorList[0],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 2,
                },
                a2: {
                  color: "#fff",
                  backgroundColor: colorList[1],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 2,
                },
                a3: {
                  color: "#fff",
                  backgroundColor: colorList[2],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 2,
                },
                b: {
                  color: "#fff",
                  backgroundColor: colorList[3],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 2,
                },
              },
              formatter: function (params) {
                var index = datas.map((item) => item.name).indexOf(params);
                index = index + 1;
                if (index - 1 < 3) {
                  return ["{a" + index + "|" + index + "}"].join("\n");
                } else {
                  return ["{b|" + index + "}"].join("\n");
                }
              },
            },
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            data: datas.map((item) => item.value),
            axisLabel: {
              show: true,
              fontSize: 16,
              color: "#fff",
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            z: 2,
            name: "违法数",
            type: "bar",
            barCategoryGap: "20%",
            barGap: "20%",
            barWidth: 12,
            data: datas.map((item, i) => {
              var itemStyle = {
                color: i > 3 ? colorList[3] : colorList[i],
               
              };
              return {
                value: item.value,
                itemStyle: itemStyle,
              };
            }),
            label: {
              normal: {
                color: "#fff",
                show: true,
                position: [0, "-15px"],
                textStyle: {
                  fontSize: 14,
                },
                formatter: function (a, b) {
                  return a.name;
                },
              },
            },
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