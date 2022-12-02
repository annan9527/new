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
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["案件数量"],
          top: "2%",
          right: "5%",
          textStyle: {
            color: "#fff",
            fontSize: "18",
          },
          itemWidth: 16,
          itemHeight: 16,
          //itemGap: 35
        },
        grid: {
          left: "0%",
          top: "30px",
          right: "5%",
          bottom: "2%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["柯城", "衢江", "集聚区", "龙游", "开化", "常山", "江山"],
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
                width: 1,
              },
            },

            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              // rotate:50,
              show: true,
              splitNumber: 15,
              textStyle: {
                color: "#fff",
                fontSize: "14",
              },
            },
          },
        ],
        yAxis: [
          {
            min: 0, //y轴的最小值
            max: 200, //y轴最大值
            interval: 40, //值之间的间隔
            type: "value",
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: "16",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                fontSize: "22px",
                color: "rgba(49,176,255,0.5)",
              },
            },
            splitLine: {
              show: true,
              width: 2,
              lineStyle: {
                color: "#03202E",
              },
            },
          },
        ],
        series: [
          {
            name: "案件数量",
            type: "bar",
            data: [20, 60, 20, 40, 20, 20, 50],
            barWidth: "25%",
            // barGap: 1,
            itemStyle: {
              normal: {
                label: {
                  show: false, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 18,
                  },
                },
                color: "#62c98d",
                opacity: 1,
                // barBorderRadius: 5,
              },
            },
          },
        ],
        // 拖拽
      });
    },
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      let that = this;
      setTimeout(() => {
        that.initCharts4();
      }, 500);
    });
  },
};
</script>
    
    <style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    width: 100%;
    height: 100%;
    padding-left: 20px;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .bottom {
    width: 100%;
    height: 100%;

    flex: 4;
  }
}
.el-dropdown-link {
  cursor: pointer;
  font-size: 16px;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 16px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 16px;
  margin-bottom: 20px;
}
</style>