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
    <div class="table_main">
      <!-- 总数 -->
      <div class="sum">
        <div class="number">{{ number }}</div>
        <div class="img">
          <img src="../../../assets/车切图/车辆类型内.png" alt="" />
        </div>
        <div class="text">{{name}} (保有量)</div>
      </div>
      <!-- 环形图 三率-->
      <div class="sum_pie">
        <div ref="chart4" style="width: 100%; height: 100%"></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      arr: [
        "旅游客运",
        "公路客运",
        "危化品运输",
        "校车",
        "面包车",
        "重货",
        "重挂",
        "出租车",
      ],
      name:'旅游客运',
      num: 0,
      data1: [
        {
          text: "违法发生率",
          value: "95%",
          color: "#5dd054",
        },
        {
          text: "检验率",
          value: "97%",
          color: "#097ff9",
        },
        {
          text: "报废率",
          value: "65%",
          color: "#fdc22b",
        },
      ],
      number: 17513,
    };
  },
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      var data1 = this.data1;
      function dataFormat(
        v = {
          value: "12345,12",
          color: "#5dd054",
        }
      ) {
        return [
          {
            value: 0,
            name: v.value,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00feff",
                  },
                  {
                    offset: 1,
                    color: v.color,
                  },
                ]),
              },
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#fff",
                },
              },
            },
          },
        ];
      }

      function childrenFun(str = "按钮") {
        return [
          {
            type: "text",
            left: "center",
            top: "center",
            style: {
              fill: "#fff",
              text: str,
              font: "14px Microsoft YaHei",
            },
          },
        ];
      }

      myChart.setOption({
        legend: {
          show: false,
        },
        tooltip: {
          show: false,
        },
        series: [
          {
            type: "pie",
            radius: [35, 45],
            center: ["15%", "40%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "center",
              },
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0.3, 0.4, 0.8)",
                shadowBlur: 9,
              },
            },
            data: dataFormat(data1[0]),
          },
          {
            type: "pie",
            radius: [35, 45],
            center: ["49%", "40%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "center",
              },
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0.3, 0.4, 0.8)",
                shadowBlur: 9,
              },
            },
            data: dataFormat(data1[1]),
          },
          {
            type: "pie",
            radius: [35, 45],
            center: ["83%", "40%"],
            hoverAnimation: false,
            label: {
              normal: {
                position: "center",
              },
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0.3, 0.4, 0.8)",
                shadowBlur: 9,
              },
            },
            data: dataFormat(data1[2]),
          },
        ],
        graphic: {
          elements: [
            {
              type: "group",
              left: "6%",
              bottom: "10%",
              z: 100,
              children: childrenFun(data1[0].text),
            },
            {
              type: "group",
              left: "43%",
              bottom: "10%",
              z: 100,
              children: childrenFun(data1[1].text),
            },

            {
              type: "group",
              left: "78%",
              bottom: "10%",
              z: 100,
              children: childrenFun(data1[2].text),
            },
          ],
        },
      });
    },
    change(val) {
      this.num = val;
      this.number = 17562;
      this.data1 = [
        {
          text: "违法发生率",
          value: "100%",
          color: "#5dd054",
        },
        {
          text: "检验率",
          value: "100%",
          color: "#097ff9",
        },
        {
          text: "报废率",
          value: "99.9%",
          color: "#fdc22b",
        },
      ];
      this.name='公路客运'
      this.initCharts4();
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
  width: 450px;
  height: 247px;

  .table {
    width: 450px;
    height: 90px;

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
    height: 157px;
    display: flex;
    justify-content: center;
    align-items: center;
    // 数量
    .sum {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .number {
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ccedff;
      }
      .img {
        width: 89px;
        height: 53px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        width: 56px;
        height: 31px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
      }
    }
    // 图表
    .sum_pie {
      flex: 3;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  //   动态选项
}
</style>