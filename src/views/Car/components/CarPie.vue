<template>
  <div ref="chart4" style="width: 100%; height: 100%" class="pie"></div>
</template>
      
      <script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
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
          type: "scroll",
          orient: "horizontal",
          icon: "square",
          top: "80%",
          left: "center",
          align: "auto",
          padding: [0, 0, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          selectedMode: false, //取消图例上的点击事件
          data: ["柯城", "衢江", "集聚区", "开化", "常山", "江山", "龙游"],
          textStyle: {
            color: "#fff",
          },
        },

        series: [
          {
            type: "pie",
            center: ["50%", "40%"],
            radius: ["50%", "80%"],
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
                name: "柯城",
              },
              {
                value: 25,
                name: "集聚区",
              },
              {
                value: 40,
                name: "衢江",
              },
              {
                value: 30,
                name: "龙游",
              },
              {
                value: 30,
                name: "开化",
              },
              {
                value: 30,
                name: "江上",
              },
              {
                value: 30,
                name: "常山",
              },
              {
                value: 30,
                name: "江上",
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

</style>