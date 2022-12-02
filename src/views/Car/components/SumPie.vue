<template>
  <div ref="chart4" style="width: 100%; height: 100%"></div>
</template>
            
            <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      var data1 = [
        {
          text: "违法发生率",
          value: "95%",
          color: "#5dd054",
        },
        {
          text: "检验率",
          value: "97%",
          color: "#097ff9",
        },
        {
          text: "报废率",
          value: "65%",
          color: "#fdc22b",
        },
      ];

      function dataFormat(
        v = {
          value: "12345,12",
          color: "#5dd054",
        }
      ) {
        return [
          {
            value: 0,
            name: v.value,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00feff",
                  },
                  {
                    offset: 1,
                    color: v.color,
                  },
                ]),
              },
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#fff",
                },
              },
            },
          },
        ];
      }

      function childrenFun(str = "按钮") {
        return [
          {
            type: "text",
            left: "center",
            top: "center",
            style: {
              fill: "#fff",
              text: str,
              font: "14px Microsoft YaHei",
            },
          },
        ];
      }

      myChart.setOption({
        legend: {
          show: false,
        },
        tooltip: {
          show: false,
        },
        series: [
          {
            type: "pie",
            radius: [35, 45],
            center: ["15%", "40%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "center",
              },
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0.3, 0.4, 0.8)",
                shadowBlur: 9,
              },
            },
            data: dataFormat(data1[0]),
          },
          {
            type: "pie",
            radius: [35, 45],
            center: ["49%", "40%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "center",
              },
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0.3, 0.4, 0.8)",
                shadowBlur: 9,
              },
            },
            data: dataFormat(data1[1]),
          },
          {
            type: "pie",
            radius: [35, 45],
            center: ["83%", "40%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "center",
              },
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0.3, 0.4, 0.8)",
                shadowBlur: 9,
              },
            },
            data: dataFormat(data1[2]),
          },
        ],
        graphic: {
          elements: [
            {
              type: "group",
              left: "6%",
              bottom: "10%",
              z: 100,
              children: childrenFun(data1[0].text),
            },
            {
              type: "group",
              left: "43%",
              bottom: "10%",
              z: 100,
              children: childrenFun(data1[1].text),
            },

            {
              type: "group",
              left: "78%",
              bottom: "10%",
              z: 100,
              children: childrenFun(data1[2].text),
            },
          ],
        },
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