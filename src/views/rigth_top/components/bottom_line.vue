<template>
  <div ref="chart4" style="width: 100%; height: 100%"></div>
</template>
            
            <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      let xLabel = [
        "6:00",
        "8:00",
        "12:00",
        "15:00",
        "24:00"
      ];
      let res2 = [111, 117, 110, 121, 111, 210, ];
      let res3 = [121, 201, 181, 116, 117, 118, ];
      let res4 = [312, 118, 118, 400, 310, 351, ];

      myChart.setOption({
       
        tooltip: {
          trigger: "axis",
          backgroundColor: "transparent",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(126,199,255,0)", // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "rgba(126,199,255,1)", // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(126,199,255,0)", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
          formatter: (p) => {
            let dom = `<div style=" background: #ccc;">
    
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${
              p[0] ? "flex" : "none"
            };color:rgb(243,58,57)">
                <span style="font-size:14px;color:rgb(243,58,57);">${
                  p[0] ? p[0].seriesName : ""
                }</span>：
                <span style="font-size:14px;color:rgb(243,58,57);">${
                  p[0] ? p[0].data : ""
                }</span>
            </div>
            <div style="width:100%;height:100%;display:${
              p[1] ? "flex" : "none"
            };color:rgb(255,128,0);">
                <span style="font-size:14px;color:rgb(255,128,0);">${
                  p[1] ? p[1].seriesName : ""
                }</span>：
                <span style="font-size:14px;color:rgb(255,128,0);">${
                  p[1] ? p[1].data : ""
                }</span>
            </div>
            <div style="width:100%;height:100%;display:${
              p[2] ? "flex" : "none"
            };color:rgb(252,210,84);">
                <span style="font-size:14px;color:rgb(252,210,84);">${
                  p[2] ? p[2].seriesName : ""
                }</span>：
                <span style="font-size:14px;color:rgb(252,210,84);">${
                  p[2] ? p[2].data : ""
                }</span>
            </div>
            <div style="width:100%;height:100%;display:${
              p[3] ? "flex" : "none"
            };color:rgba(25,163,223,1);">
                <span style="font-size:14px;color:rgba(25,163,223,1);">${
                  p[3] ? p[3].seriesName : ""
                }</span>：
                <span style="font-size:14px;color:rgba(25,163,223,1);">${
                  p[3] ? p[3].data : ""
                }</span>
            </div>
        </div>
    </div>`;
            return dom;
          },
        },
        legend: {
          align: "left",
          right: "10%",
          top: "0%",
          type: "plain",
          textStyle: {
            color: "#ffffff",
            fontSize: 12,
          },
          icon: "rect",
          itemGap: 12,
          itemWidth: 12,

          data: [
            {
              name: "区域内流量",
            },
            {
              name: "进城流量",
            },
            {
              name: "出城流量",
            },
          ],
        },
        grid: {
          top: "15%",
          left: "10%",
          right: "10%",
          bottom: "15%",
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#rgb(77,83,141)",
                width: 4,
              },
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "#7ec7ff",
                padding: 0,
                fontSize: 12,
              },
              formatter: function (data) {
                return data;
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#192a44",
              },
            },
            axisTick: {
              show: true,
            },
            data: xLabel,
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 400,
            interval: 100,
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
              },
              formatter: function (value, index) {
                // value大于10时除以10并拼接k，小于10按原格式显示
                if (value >= 10) {
                  value = value / 10 + "0";
                } else if (value < 10) {
                  value;
                }
                return value;
              },
            },
            nameTextStyle: {
              color: "#7ec7ff",
              fontSize: 16,
              padding: 10,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#192a44",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#rgb(77,83,141)",
                width: 4,
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],

        series: [
        
          {
            name: "区域内流量",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            lineStyle: {
              normal: {
                width: 2,
                color: "rgb(255,128,0)", // 线条颜色
              },
            },
            itemStyle: {
              color: "rgb(255,128,0)",
            },
            tooltip: {
              show: true,
            },

            data: res2,
          },
          {
            name: "进城流量",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            lineStyle: {
              normal: {
                width: 2,
                color: "rgb(252,210,84)", // 线条颜色
              },
            },
            itemStyle: {
              color: "rgb(252,210,84)",
            },
            tooltip: {
              show: true,
            },

            data: res3,
          },
          {
            name: "出城流量",
            type: "line",
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            lineStyle: {
              normal: {
                width: 2,
                color: "rgba(25,163,223,1)", // 线条颜色
              },
            },
            itemStyle: {
              color: "rgba(25,163,223,1)",
            },
            tooltip: {
              show: true,
            },

            data: res4,
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