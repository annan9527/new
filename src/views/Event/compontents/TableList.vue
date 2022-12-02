<template>
  <div class="box">
    <div class="table">
      <div class="label">
        <span
          style="
            width: 4px;
            height: 10px;
            background: #0a65cd;
            display: inline-block;
          "
        ></span>
        <span style="display: inline-block"> 重点关注路口</span>
      </div>
      <div
        class="table_item"
        v-for="(item, index) in arr"
        :key="index"
        :class="{ active: num === index }"
        @click="change(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="table_main">
      <div ref="chart4" style="width: 100%; height: 100%" class="pie"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      arr: ["三衢路口", "荷花中路口", "白云中路口"],
      num: 1,
      data2: [
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
      ],
    };
  },
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
       
        tooltip: {
          showContent: true,
          trigger: "axis",
          backgroundColor: "rgba(8,36,68,.7)",
          color: "#fff",
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          show: false,
          top: "0%",
          right: "10",
          icon: "rect",
          itemWidth: 13,
          itemHeight: 13,
          textStyle: {
            color: "rgba(250,250,250,0.6)",
            fontSize: 16,
          },
        },
        grid: {
          left: "20%",
          right: "15%",
          top: "15%",
          bottom: "8%",
          // width: 250,
        },
        xAxis: [
          {
            splitLine: {
              show: false,
            },
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
              //y轴
              show: false,
            },
            type: "category",
            axisTick: {
              show: false,
            },
            inverse: true,
            data: ["脱机路口", "配时待优化", "临时信号灯"],
            axisLabel: {
              color: "#fff",
              fontSize: 13,
              margin: 10,
              formatter: function (value) {
                if (value.length > 5) {
                  return value.substring(0, 5) + "...";
                } else {
                  return value;
                }
              },
            },
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#29A0FB",
                fontSize: "13",
              },
              formatter: function (value) {
                if (value.length > 5) {
                  return value.substring(0, 5) + "...";
                } else {
                  return value + "件";
                }
              },
            },
            // data: value,
            data: this.data2,
          },
        ],
        series: [
          {
            name: "数量",
            type: "bar",
            barWidth: 14, // 柱子宽度
            showBackground: true,
            MaxSize: 0,
            barBorderRadius: [6, 6, 6, 6],
            backgroundStyle: {
              color: "#CDCED4",
            },
            label: {
              show: false,
              // color: '#A7D6F4',
              // fontSize: 14,
              // distance: 20, // 距离
              // formatter: '{c} ', // 这里是数据展示的时候显示的数据
              // align: "center",
              // position: [290, 0]
            }, // 柱子上方的数值
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                1,
                0,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: "#29A0FB",
                  },
                  {
                    offset: 1,
                    color: "#51CAD8",
                  },
                ],
                false
              ), // 渐变
            },
            data: this.data2,
          },
        ],
      });
    },
    change(val) {
      this.num = val;
      this.data2 = [
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
      ];
      this.initCharts4();
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.initCharts4();
    });
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 450px;
  height: 280px;

  .table {
    width: 450px;
    height: 45px;

    .label {
      float: left;
      width: 108px;
      height: 40px;
      text-align: center;
      line-height: 40px;
     
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
    }

    .table_item {
      float: left;
      width: 108px;
      height: 40px;
      background-color: rgba($color: #45aae0, $alpha: 0.2);
      border-radius: 2px;
      margin: 2px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            -45deg,
            transparent 30%,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent 70%
          )
          no-repeat;
        background-size: 200% 200%;
        background-position: 200% 200%;
      }
      &:hover::before {
        transition: background-position 3s;
        background-position: -100% -100%;
      }
    }
    .active {
      background-color: #ec9621;
    }
  }
  .table_main {
    width: 450px;
    height: 235px;
    
  }
}
</style>