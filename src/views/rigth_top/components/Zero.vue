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
        title: {
          text: `信访件内
  容类型`,
          // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
          x: "45px",
          // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
          y: "70px",
          // itemGap设置主副标题纵向间隔，单位px，默认为10，

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
          triggerEvent: true,
        },
        legend: {
          icon: "circle",
          orient: "vertical",
          right: 10,
          bottom: 1,
          selectedMode: false, //取消图例上的点击事件
          data: ["举报类", "建议类", "咨询类", "求助类", "投诉类", "申诉类"],
          textStyle: {
            color: "#fff",
          },
        },

        series: [
          {
            name: "信访件内容类型",
            type: "pie",
            center: ["30%", "52%"],
            radius: ["50%", "80%"],
            avoidLabelOverlap: false,
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
              { value: 1048, name: "举报类" },
              { value: 735, name: "建议类" },
              { value: 580, name: "咨询类" },
              { value: 484, name: "求助类" },
              { value: 300, name: "投诉类" },
              { value: 300, name: "申诉类" },
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