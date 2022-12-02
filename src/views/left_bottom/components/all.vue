<template>
  <div class="box">
    <div class="top">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          机动车<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>人</el-dropdown-item>
          <el-dropdown-item>机动车</el-dropdown-item>
          <el-dropdown-item>非机动车</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div>守法率排名</div>
    </div>
    <div class="bottom">
      <div ref="chart4" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "柯城大队",
            value: 29.1,
          },
          {
            name: "衢江大队",
            value: 28.6,
          },
          {
            name: "集聚区大队",
            value: 29.6,
          },
          {
            name: "龙游大队",
            value: 29.4,
          },
          {
            name: "江山大队",
            value: 29.7,
          },
          {
            name: "常山大队",
            value: 29.5,
          },
          {
            name: "开化大队",
            value: 29.5,
          },
        ],
        unit: "分",
        rowNum: "7",
      },
    };
  },
  methods: {
    initCharts4() {
      var data = [29.1, 28.6, 29.6, 29.4, 29.7, 29.5, 29.5];
      var yAxis = [
        "柯城大队",
        "衢江大队",
        "集聚大队",
        "龙游大队",
        "江山大队",
        "常山大队",
        "开化大队",
      ];
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        tooltip: {
          textStyle: {
            fontSize: 16,
          },
        },
        legend: {
          selectedMode: false,
          show: false,
        },
        grid: {
          left: "0%",
          right: "10%",
          bottom: "0%",
          top: 7,
          containLabel: true,
        },
        xAxis: [
          {
            type: "value",
            show: false,
          },
        ],
        yAxis: [
          {
            splitLine: {
              show: false,
            },
            axisLine: {
              // y轴
              show: false,
            },
            type: "category",
            inverse: true, /// 柱状图顺序
            axisTick: {
              show: false,
            },
            data: yAxis,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff",
              },
              formatter: (res, index) => {
                var num = 0;
                num = index + 1;
                if (index === 0) {
                  return "{no1|" + "}" + "{data|" + res + "}";
                } else if (index === 1) {
                  return "{no2|" + "}" + "{data|" + res + "}";
                } else if (index === 2) {
                  return "{no3|" + "}" + "{data|" + res + "}";
                } else if (index === 3) {
                  return "{no4|" + "}" + "{data|" + res + "}";
                } else if (index === 4) {
                  return "{no5|" + "}" + "{data|" + res + "}";
                } else if (index === 5) {
                  return "{no6|" + "}" + "{data|" + res + "}";
                } else if (index === 6) {
                  return "{no6|" + "}" + "{data|" + res + "}";
                }
                return res;
              },
              rich: {
                no1: {
                  color: "#EF5525",
                  fontSize: 14,
                },
                data: {
                  color: "#fff",
                  fontSize: 14,
                },
                no2: {
                  color: "#EFAF25",
                  fontSize: 14,
                },
                no3: {
                  color: "#D0EF25",
                  fontSize: 14,
                },
                no4: {
                  color: "#26EFC2",
                  fontSize: 14,
                },
                no5: {
                  color: "#2BE4FF",
                  fontSize: 14,
                },
                no6: {
                  color: "#2BE4FF",
                  fontSize: 14,
                },
              },
            },
          },
        ],
        series: [
          {
            name: "守法率",
            type: "bar",
            barWidth: 10, // 柱子宽度
            label: {
              show: true,
              position: "right", // 位置
              color: "#fff",
              fontSize: 14,
              distance: 5, // 距离
            }, // 柱子上方的数值
            itemStyle: {
              barBorderRadius: [20, 20, 20, 20],
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                ["#29A0FB", "#51CAD8"].map((color, offset) => ({
                  color,
                  offset,
                }))
              ), // 渐变
            },
            data: data,
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
  padding-left: 28px;
  padding-right: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    padding: 0 5px;
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
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