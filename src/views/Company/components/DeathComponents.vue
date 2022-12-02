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
          data: [
            "盛安保洁",
            "松工机械",
            "严氏物流",
            "顺创公交",
            "福得物流",
            "方达物流",
            "华通汽运",
            "易人物流"
          ],
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
            formatter: function (params) {
              console.log(params)
              var newParamsName = ""; // 最终拼接成的字符串
              var paramsNameNumber = params.length; // 实际标签的个数
              var provideNumber = 4; // 每行能显示的字的个数
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = ""; // 表示每一次截取的字符串
                  var start = p * provideNumber; // 开始截取的位置
                  var end = start + provideNumber; // 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr; // 最终拼成的字符串
                }
              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              //将最终的字符串返回
              return newParamsName;
            },
          },
        },

        yAxis: {
          type: "value",
          max: "10",
          min:"0",
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
                color: "#0269E9",
              },
            },
            data: [8, 4, 3, 3, 3, 4, 4, 4, 3],
          },
          {
            name: "2022年",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: "#00CFFF",
              },
            },
            data: [3, 2, 2, 4, 3, 3, 2, 3,],
          },
          {
            name: "2023年",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: "#02E984",
              },
            },
            data: [4, 6, 7, 7, 6, 4, 4, 6, 7],
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