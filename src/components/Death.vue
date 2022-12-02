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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2022年", "2021年"],
          top: "2%",
          right: "0%",
          textStyle: {
            color: "#fff",
            fontSize: "15",
          },
          itemWidth: 8,
          itemHeight: 8,
          //itemGap: 35
        },
        grid: {
          left: "0%",
          top: "20px",
          right: "0%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              // "10月",
              // "11月",
              // "12月",
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
                color: "rgba(255,255,255,.6)",
                fontSize: "15",
              },
            },
          },
        ],
        yAxis: [
          {
            min: 0, //y轴的最小值
            max: 200, //y轴最大值
            interval: 40, //值之间的间隔
            type: "value",
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: "15",
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
            name: "2022年",
            type: "bar",
            data: [
              80, 30, 30, 50, 40, 70, 60, 20, 60, 80, 30, 30, 50, 10, 70, 60,
              20, 60,
            ],
            barWidth: "25%", //柱子宽度
            barGap: 1, //柱子之间间距
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 12,
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
            name: "2021年",
            type: "bar",
            data: [
              60, 40, 50, 30, 60, 30, 50, 30, 50, 60, 40, 50, 30, 10, 30, 50,
              30, 50,
            ],
            barWidth: "25%",
            // barGap: 1,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 12,
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
      myChart.getZr().on("click", (params) => {
        let pointInPixel = [params.offsetX, params.offsetY]
          if (myChart.containPixel('grid', pointInPixel)) {
            let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
            console.log(xIndex)
          }
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