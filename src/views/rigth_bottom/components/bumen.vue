<template>
  <div class="box">
    <div ref="chart4" style="width: 100%; height: 100%"></div>
  </div>
</template>
      
      <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      var arr1 = [];
      var data1 = ["政治处", "车辆管理所", "法制大队"];
      var arr2 = [];
      var data2 = ["柯城大队", "衢江大队", "集聚区大队"];
      var val2 = [];
      var val1 = [];
      var value1 = [60, 58, 46];
      var value2 = [80, 70, 63];
      // for (var i = 0; i < 10; i++) {
      //   arr1.push(data1[i]);
      //   arr1.push("");
      //   val1.push(value1[i]);
      //   val1.push(0);
      //   arr2.push(data1[i]);
      //   arr2.push(data2[i]);
      //   val2.push(0);
      //   val2.push(value2[i]);
      // }
      arr1 = data1;
      arr2 = data2;
      val1 = value1;
      val2 = value2;

      myChart.setOption({
        // backgroundColor : '#03060f',
        legend: {
          top: "0",
          data: [
            {
              name: "机关序列",
            },
            {
              name: "实战序列",
            },
          ],
          itemGap: 32, // 设置间距
          textStyle: {
            color: "#fff",
            fontSize: 14,
            fontFamily: "PingFangSC",
            fontWeight: 300,
          },
        },
        grid: [
          {
            left: 80,
            top: 10, //上边距
            height: 200,
            width: "60%",
          },
          {
            left: 80,
            top: 26, //上边距
            height: 200,
            width: "60%",
          },
          {
            left: 80,
            top: 16, //上边距
            height: 220,
            width: "60%",
          },
          {
            left: 80,
            top: 16, //上边距
            height: 220,
            width: "60%",
          },
        ],
        xAxis: [
          {
            gridIndex: 0,
            max: 100,
            splitNumber: 8,
            show: false,
            axisLine: {
              lineStyle: {
                color: "#10899A",
              },
            },
            axisTick: {
              show: false,
              inside: true,
              lineStyle: {
                color: "#10899A",
                fontSize: 14,
                fontFamily: "PingFangSC",
                fontWeight: 300,
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              formatter: (params) => {
                return "{marginTop|" + params + "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#06D3CD",
                  fontSize: 14,
                  fontFamily: "PingFangSC",
                  fontWeight: 300,
                },
              },
            },
          },
          {
            max: 100,
            show: false,
            gridIndex: 1,
            splitNumber: 8,
            inverse: true,
            axisLine: {
              lineStyle: {
                color: "#10899A",
              },
            },
            axisTick: {
              show: false,
              inside: true,
              lineStyle: {
                color: "#10899A",
                fontSize: 14,
                fontFamily: "PingFangSC",
                fontWeight: 300,
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              formatter: (params) => {
                return "{marginTop|" + params + "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#06D3CD",
                  fontSize: 14,
                  fontFamily: "PingFangSC",
                  fontWeight: 300,
                },
              },
            },
          },
          {
            max: 100,
            show: false,
            gridIndex: 2,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                color: "#10899A",
              },
            },
            axisTick: {
              show: false,
              inside: true,
              lineStyle: {
                color: "#10899A",
                fontSize: 14,
                fontFamily: "PingFangSC",
                fontWeight: 300,
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              formatter: (params) => {
                return "{marginTop|" + params + "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#06D3CD",
                  fontSize: 14,
                  fontFamily: "PingFangSC",
                  fontWeight: 300,
                },
              },
            },
          },
          {
            max: 100,
            show: false,
            gridIndex: 3,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                color: "#10899A",
              },
            },
            axisTick: {
              show: false,
              inside: true,
              lineStyle: {
                color: "#10899A",
                fontSize: 14,
                fontFamily: "PingFangSC",
                fontWeight: 300,
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              formatter: (params) => {
                return "{marginTop|" + params +  "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#06D3CD",
                  fontSize: 14,
                  fontFamily: "PingFangSC",
                  fontWeight: 300,
                },
              },
            },
          },
        ],
        yAxis: [
          {
            gridIndex: 0,
            position: "left",
            data: arr1,
            nameTextStyle: {
              color: "#32353C",
              padding: [0, 0, 0, 8],
              fontSize: 14,
              fontFamily: "PingFangSC",
              fontWeight: 300,
            },
            axisLabel: {
              formatter: (params) => {
                return "{marginTop|" + params + "}";
              },
              margin: 10,
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#fff",
                  fontSize: 12,
                  fontFamily: "PingFangSC",
                  fontWeight: 300,
                },
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#10899A",
              },
            },
            splitLine: {
              show: false,
            },
          },
          {
            gridIndex: 1,
            data: arr2,
            position: "right",
            nameTextStyle: {
              color: "#32353C",
              padding: [0, 0, 0, 0],
              fontSize: 14,
              fontFamily: "PingFangSC",
              fontWeight: 300,
            },
            top: 12,
            axisLabel: {
              formatter: (params) => {
                return "{marginTop|" + params + "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#fff",
                  fontSize: 12,
                  fontFamily: "PingFangSC",
                  fontWeight: 300,
                },
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#10899A",
              },
            },
            splitLine: {
              show: false,
            },
          },
          {
            gridIndex: 2,
            axisLabel: {
              formatter: (params) => {
                return "{marginTop|" + params + "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#06D3CD",
                  fontSize: 14,
                  fontFamily: "PingFangSC",
                  fontWeight: 300,
                },
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#32353C",
              },
            },
            splitLine: {
              show: false,
            },
          },
          {
            gridIndex: 2,
            position: "right",
            axisLabel: {
              formatter: (params) => {
                return "{marginTop|" + params + "}";
              },
              rich: {
                marginTop: {
                  padding: [0, 0, 0, 0],
                  color: "#06D3CD",
                  fontSize: 12,
                  fontFamily: "PingFangSC",
                  fontWeight: 300,
                },
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#32353C",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "机关序列",
            type: "bar",
            label: {
              normal: {
                show: true,
                baseline: "middle",
                fontSize: 12,
                fontWeight: "400",
                position: "insideLeft",
                color: "#fff",
                lineHeight: 14,
                padding: [0, 12, 0, 12],
              },
            },
            itemStyle: {
              barBorderRadius: 10,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "rgba(8,117,255)",
                },
                {
                  offset: 1,
                  color: "#6DE667",
                },
              ]),
            },
            barWidth: 14,
            data: val1,
          },
          {
            name: "实战序列",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                baseline: "middle",
                fontSize: 12,
                fontWeight: "400",
                position: "insideRight",
                color: "#fff",
                lineHeight: 14,
                padding: [0, 12, 0, 12],
              },
            },
            itemStyle: {
              barBorderRadius: 10,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#FCB344",
                },
                {
                  offset: 1,
                  color: "#F64744",
                },
              ]),
            },
            barWidth: 14,
            data: val2,
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
.box {
  width: 400px;
  height: 220px;
}
</style>