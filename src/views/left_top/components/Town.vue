<template>
  <div class="box">
    <div class="top">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ nav }}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">儿童</el-dropdown-item>
          <el-dropdown-item command="b">老年人</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
      nav: "儿童",
      arr: [
        ["高家镇", "大州镇", "七里乡", "九华乡", "万田乡"],
        [1, 2, 1, 1, 1],
      ],
    };
  },

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
        color: ["#1890FF"],

        textStyle: {
          fontSize: 12,
          color: "#FFF",
          //   fontStyle: "normal",
          fontWeight: "500",
          fontFamily: "PingFang SC",
        },
        grid: {
          top: "5%",
          left: "5%",
          right: "15%",
          bottom: "0%",
          containLabel: true,
          borderWidth: 0,
          y: 40,
          y2: 60,
        },
        xAxis: {
          type: "value",
          // max:50,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fefef",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
            interval: 0,
            formatter: "{value} 人", // 给每个数值添加%
          },
        },
        yAxis: {
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fefef",
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          type: "category",
          data: this.arr[0],
        },
        series: [
          {
            itemStyle: {
              normal: {
                color: function (params) {
                  // build a color map as your need.
                  var colorList = [
                    "#C1232B",
                    "#B5C334",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                    "#FAD860",
                    "#F3A43B",
                    "#60C0DD",
                    "#D7504B",
                    "#C6E579",
                    "#F4E001",
                    "#F0805A",
                    "#26C0C0",
                  ];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true,
                  position: "right",
                  formatter: "{c}人", //这是关键，在需要的地方加上就行了
                },
                //设置柱子圆角
                barBorderRadius: [0, 20, 20, 0],
              },
              backgroundStyle: {
                color: "#EBEEF5",
              },
            },
            data: this.arr[1],
            type: "bar",
            barWidth: 15, //柱图宽度
          },
        ],
      });
    }, 
    handleCommand(val) {
      if (val === "b") {
        this.nav = "老年人";
        this.arr = [
          ["大洲镇", "高家镇", "九华乡", "万田乡", "百花乡"],
          [1, 2, 1, 1, 1],
        ];
        this.initCharts4();
      } else {
        this.nav = "儿童";
        this.arr = [
          ["高家镇", "大州镇", "七里乡", "九华乡", "万田乡"],
          [1, 2, 1, 1, 1],
        ];
        this.initCharts4();
      }
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