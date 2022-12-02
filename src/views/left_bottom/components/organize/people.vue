<template>
  <div ref="chart4" style="width: 100%; height: 100%"></div>
</template>
              
              <script>
import "echarts-liquidfill";
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      var value = 0.6;
      var data = [value, value, value];
      myChart.setOption({
        title: {
          text: (value * 100).toFixed(0) + "{a|%}",
          textStyle: {
            fontSize: 20,
            fontFamily: "Microsoft Yahei",
            fontWeight: "normal",
            color: "#fff",
            rich: {
              a: {
                fontSize: 18,
              },
            },
          },
          x: "center",
          y: "35%",
        },
        graphic: [
          {
            type: "group",
            left: "center",
            top: "60%",
            children: [
              {
                type: "text",
                z: 100,
                left: "10",
                top: "middle",
                style: {
                  fill: "#fff",
                  text: "全市行人",
                  font: "16px Microsoft YaHei",
                },
              },
            ],
          },
        ],
        series: [
          {
            type: "liquidFill",
            radius: "90%",
            center: ["50%", "50%"],
            //  shape: 'roundRect',
            data: data,
            backgroundStyle: {
              color: "#0F224C",
            },
            outline: {
              borderDistance: 4,
              itemStyle: {
                borderWidth: 2,
                borderColor: "#FE8704",
                shadowBlur: 0,
              },
            },
            color: ["#FE8704", "#FFB931"],
            label: {
              normal: {
                formatter: "",
              },
            },
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