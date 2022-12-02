<template>
  <div ref="chart4" style="width: 95%; height: 100%; padding-left: 20px"></div>
</template>
  
  <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        title: {
          text: "驾校通过率(%)",
          top: "2%",
          left: "1%",
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
          data: ["科二", "科三"],
          top: "2%",
          right: "0%",
          textStyle: {
            color: "#fff",
            fontSize: "16",
          },
          itemWidth: 16,
          itemHeight: 16,
          //itemGap: 35
        },
        grid: {
          left: "0%",
          top: "40px",
          right: "0%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "江信",
              "安顺",
              "长城",
              "达能",
              "高新",
              "官庄",
              "交通",
              "金盾",
              "联谊",
              "明安",
              "新兴",
              "星光",
              "浙西",
              "双港",
              "东航",
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
              },
            },

            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              // rotate:50,
              show: true,
              splitNumber: 15,
              textStyle: {
                color: "rgba(255,255,255)",
                fontSize: "16",
              },
            },
          },
        ],
        yAxis: [
          {
            min: 0, //y轴的最小值
            max: 100, //y轴最大值
            interval: 20, //值之间的间隔
            type: "value",
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: "16",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                fontSize: "22px",
                color: "rgba(49,176,255,0.5)",
              },
            },
            splitLine: {
              show: true,
              width: 2,
              lineStyle: {
                color: "#03202E",
              },
            },
          },
        ],
        series: [
          {
            name: "科二",
            type: "bar",
            data: [
              31.98, 37.47, 40.64, 36.28, 44.44, 32.89, 49.67, 37.79, 40.57,
              37.02, 61.64, 44.29, 43.36, 100.0, 38.24,
            ],
            barWidth: "20%", //柱子宽度
            barGap: 1, //柱子之间间距
            itemStyle: {
              normal: {
                label: {
                  show: false, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 8,
                  },
                },
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 0,
                    color: "#38B2E6",
                  },
                  {
                    offset: 1,
                    color: "#0B3147",
                  },
                ]),
                opacity: 1,
                // barBorderRadius: 5,
              },
            },
            // markLine: {
            //   symbol: "none", //去掉警戒线最后面的箭头
            //   data: [
            //     {
            //       silent: false, //鼠标悬停事件  true没有，false有
            //       label: {
            //         fontSize: "10px",
            //         position: "middle", // 表现内容展示的位置
            //         formatter: "月平均亡人数上限", // 标线展示的内容
            //         color: "#fff", // 展示内容颜色
            //       },
            //       lineStyle: {
            //         //警戒线的样式  ，虚实  颜色
            //         type: "solid",
            //         color: "#FA3934",
            //       },
            //       yAxis: "2000", // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
            //     },
            //   ],
            // },
          },
          {
            name: "科三",
            type: "bar",
            data: [
              35.0, 36.45, 36.08, 35.54, 30.93, 32.42, 40.74, 36.01, 32.66,
              35.52, 39.24, 39.81, 38.13, 25.0, 33.53,
            ],
            barWidth: "20%",
            // barGap: 1,
            itemStyle: {
              normal: {
                label: {
                  show: false, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 8,
                  },
                },
                color: "#62c98d",
                opacity: 1,
                // barBorderRadius: 5,
              },
            },
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