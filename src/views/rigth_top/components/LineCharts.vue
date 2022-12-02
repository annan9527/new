<template>
  <div class="box">
    <div class="top">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-caret-bottom el-icon--right"
            >柯城大队省部局布控重点车辆检查率</i
          >
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>柯城大队省部局布控重点车辆检查率</el-dropdown-item>
          <el-dropdown-item>柯城大队省部局布控重点车辆检查率</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="bottom">
      <div ref="chart4" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>
<!--  -->
      <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["2022", "2021"],

          textStyle: {
            color: "#fff",
            fontSize: "18",
          },
        },
        grid: {
          left: "0%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        },
        yAxis: {
          min: 0, //y轴的最小值
          max: 100, //y轴最大值
          interval: 20, //值之间的间隔
          type: "value",

          axisLine: {
            show: true,
            lineStyle: {
              fontSize: "26px",
              color: "#fff",
            },
          },
          splitLine: {
            show: true,
            width: 2,
            lineStyle: {
              color: "rgba(225,225,255,0.1)",
              fontSize: "26px",
            },
          },
        },
        series: [
          {
            name: "2021",
            type: "line",
            // stack: "Total",
            data: [20, 32, 11, 34, 9, 23, 21, 12, 12, 11, 14, 50],
            lineStyle: {
              type: "dashed", // 这里，设置折线类型
            },
          },
          {
            name: "2022",
            type: "line",
            // stack: "Total",
            data: [22, 12, 11, 34, 29, 30, 30, 22, 12, 11, 24, 20],
            lineStyle: {
              type: "dashed", // 这里，设置折线类型
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
.box {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    // background: red;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    font-size: 16px;
    flex: 1;
    display: flex;
    align-items: flex-end;
  }
  .bottom {
    width: 100%;
    height: 100%;

    flex: 4;
  }
}
.el-dropdown-link {
  cursor: pointer;

  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>