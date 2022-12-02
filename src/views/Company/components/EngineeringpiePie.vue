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
          padding: [10, 0, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          selectedMode: false, //取消图例上的点击事件
          data: ["圣效", "高新", "仁信", "旺成", "信安", "恒帮", "诚丰"],
          textStyle: {
            color: "#fff",
          },
        },

        series: [
          {
            type: "pie",
            center: ["50%", "40%"],
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
                name: "圣效",
              },
              {
                value: 25,
                name: "高新",
              },
              {
                value: 40,
                name: "仁信",
              },
              {
                value: 30,
                name: "旺成",
              },
              {
                value: 30,
                name: "信安",
              },
              {
                value: 30,
                name: "恒帮",
              },
              {
                value: 30,
                name: "诚丰",
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