<template>
  <div class="box">
    <div class="top">
      <select v-model="goodsId">
        <option
          v-for="(item, index) in kindList"
          v-bind:value="item.id"
          v-text="item.name"
          :key="index"
        ></option>
      </select>
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
      goodsId: "1",
      kindList: [
        { name: "外卖车违法", id: 1 },
        { name: "快递电动三轮车违法", id: 2 },
        { name: "垃圾车违法", id: 3 },
      ],

      datax: ["美团", "饿了么"],
      datay: [
        [36, 23, 22, 30, 39, 18],
        [32, 33, 12, 10, 19, 15],
      ],
    };
  },
  watch: {
    goodsId: function (newVal) {
      if (newVal === 1) {
        this.datax = ["美团", "饿了么"];
        this.datay = [
          [36, 23, 22, 30, 39, 18],
          [32, 33, 12, 10, 19, 15],
        ];
        this.$nextTick(function () {
          this.initCharts4();
        });
      } else if (newVal === 2) {
        this.datax = ["快递电动三轮车违法", ""];
        this.datay = [[25, 26, 23, 12, 25, 36]];
        this.$nextTick(function () {
          this.initCharts4();
        });
      } else {
        this.datax = ["垃圾车违法", ""];
        this.datay = [[20, 16, 13, 9, 15, 16]];
        this.$nextTick(function () {
          this.initCharts4();
        });
      }
    },
    deep: true,
    immediate: true,
  },

  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      var xData = ["10.16", "10.17", "10.18", "10.19", "10.20", "10.21"];
      let data = this.datax;
      let datay = this.datay;
      myChart.setOption({
      
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          borderWidth: 0,
          top: 50,
          bottom: 25,
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          x: "60%",
          top: "18%",
          textStyle: {
            color: "#90979c",
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: "#fff",
              fontSize: 18,
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            min: 0, //y轴的最小值
            max: 100, //y轴最大值
            interval: 20, //值之间的间隔
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: "#FFF",
              fontSize: 16,
            },
            splitArea: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: data[0],
            type: "line",
            symbolSize: 10,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "rgba(255, 196, 53, 1)",
                barBorderRadius: 1,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#FDC22B", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#FDC22B", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            data: datay[0],
          },
          {
            name: data[1],
            type: "line",
            symbolSize: 10,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#0090FC",
                barBorderRadius: 1,
              },
            },
            lineStyle: {
              normal: {
                width: 2,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#0090FC", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#0090FC", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            data: datay[1],
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
    width: 100%;
    height: 100%;
    padding-left: 0px;
    flex: 1;
    display: flex;
    align-items: flex-end;
  }
  .bottom {
    width: 100%;
    height: 100%;
    flex: 6;
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