<template>
  <div class="box">
    <div class="table">
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
    <select v-model="goodsId">
      <option
        v-for="(item, index) in kindList"
        v-bind:value="item.id"
        v-text="item.name"
        :key="index"
      ></option>
    </select>
    <div class="table_main" v-show="num === 2">
      <div ref="chart5" style="width: 450px; height: 285px"></div>
    </div>
    <div class="table_main" v-show="num !== 2">
      <div ref="chart4" style="width: 450px; height: 285px"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      arr: ["闯红灯", "违停", "执法", "隐患"],
      num: 1,
      data2: [
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
      ],
      goodsId: 1,
      kindList: [
        { name: "本月", id: 1 },
        { name: "本周", id: 2 },
        { name: "本年", id: 3 },
      ],
    };
  },
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      myChart.setOption({
        //你的代码

        tooltip: {
          showContent: true,
          trigger: "axis",
          backgroundColor: "rgba(8,36,68,.7)",
          color: "#fff",
          textStyle: {
            color: "#fff",
          },
          formatter: function (params) {
            let str = '<div style="text-align: left;">';
            str += "<div>数量：" + params[0].data + "起" + " </div>";
            str += "<div>同比" + 12 + "%</div>";
            str += "<div>环比：" + 12 + "%</div></div>";
            return str;
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
          top: "5%",
          bottom: "8%",
          // width: 250,
        },
        xAxis: [
          {
            splitLine: {
              show: false,
            },
            type: "value",
            show: true,
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
            data: ["荷花中路", "三衢路", "白云大道", "荷花中路", "府山街道"],
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
                  return value + "起";
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
    initCharts5() {
      let myChart = echarts.init(this.$refs.chart5);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            console.log(params);
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" +
                params[i].marker +
                params[i].seriesName +
                params[i].value +
                "人";
            }

            return relVal;
          },
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "2%",
          top: "8%",
          containLabel: true,
        },
        legend: {
          data: ["投诉", "建议"],
          right: 10,
          top: 5,
          textStyle: {
            color: "#fff",
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
        xAxis: {
          type: "category",
          data: ["柯城", "衢江", "龙游", "开化", "江山", "常山"],
          axisLine: {
            lineStyle: {
              color: "white",
            },
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: "Microsoft YaHei",
            },
          },
        },
        yAxis: {
          type: "value",
          max: "120",
          axisLine: {
            show: false,
            lineStyle: {
              color: "white",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.3)",
            },
          },
          axisLabel: {},
        },
        series: [
          {
            name: "投诉",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: "#0269E9",
              },
            },
            data: [
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
            ],
          },
          {
            name: "建议",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: "#00CFFF",
              },
            },
            data: [
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
            ],
          },
        ],
        // 拖拽
        dataZoom: [
          {
            end: 60,
            type: "inside",
            xAxisIndex: 0,
            filterMode: "filter",
          },
        ],
      });
      myChart.on("click", function (params) {
        //防止重复点击
        //   if(this.name == e.name){
        //     return false;
        // }
        console.log(params, "123");
      });
    },
    change(val) {
      this.num = val;
      this.data2 = [
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
      ];
      if (val === 2) {
        this.initCharts5();
      } else {
        this.initCharts4();
      }
    },
  },

  watch: {
    goodsId: function (newVal) {
      this.data2 = [
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
      ];
      this.initCharts4();
      this.initCharts5()
    },
    deep: true,
    immediate: true,
  },
  mounted() {
    this.$nextTick(function () {
      this.initCharts4();
      this.initCharts5();
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
    height: 285px;
  }
}
</style>