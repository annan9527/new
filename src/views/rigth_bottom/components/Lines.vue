<template>
  <div style="width: 100%; height: 100%; position: relative">
    <div class="select">
      <!-- @command="handleCommand" -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          机动车检验总量<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="柯城支队布局布控重点车辆检查率">
            机动车检验总量</el-dropdown-item
          >
          <el-dropdown-item command="柯城支队布局布控重点车辆检查率">
            机动车检验总量</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div
      ref="chart4"
      class="echarts"
      style="width: 100%; height: 90%; padding-left: 20px"
    ></div>
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
          top: "6%",
          right: "8%",

          textStyle: {
            color: "#fff",
            fontSize: "10",
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
              fontSize: "22px",
              color: "#fff",
            },
          },
          splitLine: {
            show: true,
            width: 2,
            lineStyle: {
              color: "rgba(225,225,255,0.1)",
            },
          },
        },
        series: [
          {
            name: "2021",
            type: "line",
            stack: "Total",
            data: [20, 32, 11, 34, 9, 23, 21, 12, 12, 11, 14, 50],
            lineStyle: {
              type: "line", // 这里，设置折线类型
            },
          },
          {
            name: "2022",
            type: "line",
            stack: "Total",
            data: [22, 12, 11, 34, 29, 30, 30, 22, 12, 11, 24, 20],
            lineStyle: {
              type: "line", // 这里，设置折线类型
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
.select {
  left: 40px;
  top: 40px;
  position: absolute;
  width: 300px;
  height: 30px;
}
.echarts {
  position: absolute;
  top: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-weight: 400;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>