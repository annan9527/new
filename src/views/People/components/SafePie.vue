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
        title: {
          // 主标题文本样式设置
          textStyle: {
            fontSize: 12,
            fontWeight: "bolder",
            color: "#fff",
          },
          // 副标题文本样式设置
        },
        tooltip: {
          trigger: "item",

          formatter: function (name) {
            return name.data.name + ":" + name.data.value + "%";
          },
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          right: 5,
          bottom: 20,
          selectedMode: false, //取消图例上的点击事件
          data: ["黑码", "绿码", "红码", "黄码"],
          textStyle: {
            color: "#fff",
          },
        },

        series: [
          {
            type: "pie",
            center: ["32%", "52%"],
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            //  roseType: 'radius',
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "10",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 5,
                name: "黑码",
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                      {
                        offset: 0,
                        color: "#8FCEFF",
                      },
                      {
                        offset: 1,
                        color: "#2778FF",
                      },
                    ]),
                  },
                },
              },
              {
                value: 25,
                name: "绿码",
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                      {
                        offset: 0,
                        color: "#8FFFE9",
                      },
                      {
                        offset: 1,
                        color: "#27FF97",
                      },
                    ]),
                  },
                },
              },
              {
                value: 40,
                name: "黄码",
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                      {
                        offset: 0,
                        color: "#E6B400",
                      },
                      {
                        offset: 1,
                        color: "#F8C202",
                      },
                    ]),
                  },
                },
              },
              {
                value: 30,
                name: "红码",
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                      {
                        offset: 0,
                        color: "#FF8F8F",
                      },
                      {
                        offset: 1,
                        color: "#FF2727",
                      },
                    ]),
                  },
                },
              },
            ],
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
.pie {
  -webkit-filter: drop-shadow(0 0 15px #ffffff);
  filter: drop-shadow(0 0 15px #685f5f);
}
</style>