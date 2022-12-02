<template>
  <div class="box">
    <div ref="chart4" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        backgroundColor: "#001037",
        grid: {
          top: "45%",
          left: "5%",
          right: "2%",
          bottom: "14%",
        },
        formatter: function (item) {
          return item;
        },
        yAxis: {
          show: false,
          data: ["1月"],
          axisLine: {
            lineStyle: {
              color: "#0a4980",
            },
          },
          axisLabel: {
            //  给y轴添加单位
            textStyle: {
              color: "#ADD6FF",
              fontSize: 12,
            },
          },
        },
        xAxis: [
          {
            show: false,
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#0a4980",
              },
            },
            axisLabel: {
              show: true,
              fontSize: 12,
              textStyle: {
                color: "#ADD6FF",
              },
            },
          },
        ],
        series: [
          {
            name: "亡人控制数占比                                                        ",
            type: "bar",
            barWidth: 12,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#1F70FF", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#00CCFF", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            data: [229],
            z: 0,
            zlevel: 0,
            label: {
              show: true,
              position: "right",
              formatter: function (params) {
                return `${params.value == "0.0001" ? 0 : params.value}` + "+"+ "人";
              },
            },
          },
          {
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#011140",
              },
            },
            symbolRepeat: 1,
            // symbolMargin: 300,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [4, 15],
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: [229],
            z: 1,
            zlevel: 0,
          },
          {
            name: "亡人控制数占比                                                        ",
            type: "bar",
            barGap: "-125%",
            data: [229],
            barWidth: 18,
            label: {
              show: true,
              position: ["0%", "-100%"],
              formatter:
                "亡人控制数占比                                                        ",
            },
            itemStyle: {
              normal: {
                color: "transparent",
                barBorderColor: "rgb(148,217,249)",
                barBorderWidth: 1,
              },
            },
            z: 2,
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

<style>
</style>