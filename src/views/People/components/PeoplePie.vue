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
        tooltip: {
          confine: true,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          backgroundColor: "rgba(3, 16, 42, 0.85)",
          borderColor: "rgba(114, 190, 253, 0.6)",
          borderWidth: 1,
          padding: 12,
        },
        grid: {
          left: "5%",
          top: "10%",
          bottom: "15%",
          right: "5%",
        },
        xAxis: {
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
              width: 1, // 这里是为了突出显示加上的
            },
          },
          axisLabel: {
            color: "#fff",
            fontSize: 12,
          },
          data: ["柯城区", "衢江区", "集聚区", "江山", "常山", "龙游", "开化"],
        },
        yAxis: {
          type: "value",

          min: 0,
          max: 10,
          minInterval: 1,
          nameTextStyle: {
            align: "center",
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.15)",
              // type: 'dashed', // dotted 虚线
            },
          },
          splitArea: { show: false },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 12,
            color: "#fff",
            fontFamily: "Bebas",
          },
        },
        series: [
          {
            type: "pictorialBar",
            barCategoryGap: "-20px",
            symbol:
              "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
            label: {
              show: true,
              position: "top",
              distance: 5,
              color: "#fff",
              // fontWeight: 'bolder',
              fontSize: 16,
              fontFamily: "Bebas",
            },
            itemStyle: {
              normal: {
                color(params) {
                  let colorList = [
                    "rgba(65,105,225)",
                    "rgba(100,149,237)",
                    "rgba(30,144,255)",
                    "rgba(70,130,180)",
                    "rgba(0,191,255)",
                    "rgba(0,255,255)",
                    "rgba(135,206,250)"
                  ];
                  return colorList[params.dataIndex];
                },
              },
              emphasis: {
                opacity: 1,
              },
            },
            data: [3, 7, 4, 5, 4, 3, 6],
            z: 10,
          },
        ],
        dataZoom: [
          {
            end: 50,
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