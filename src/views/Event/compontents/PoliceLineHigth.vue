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

      <div class="table">
        <div class="btn" :class="{ active: !show }" @click="changeitem(1)">
          路段
        </div>
        <div class="btn" :class="{ active: show }" @click="changeitem(2)">
          时段
        </div>
      </div>

      <select v-model="timeId">
        <option
          v-for="(item, index) in time"
          v-bind:value="item.id"
          v-text="item.name"
          :key="index"
        ></option>
      </select>
    </div>
    <div class="bottom">
      <div ref="chart4" style="width: 100%; height: 100%" v-show="show"></div>
      <div v-show="!show" class="sad">
        <div ref="chart5" style="width: 450px; height: 240px"></div>
      </div>
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
        { name: "柯城", id: 1 },
        { name: "衢江", id: 2 },
        { name: "龙游", id: 3 },
        { name: "开化", id: 4 },
        { name: "常山", id: 5 },
        { name: "江山", id: 5 },
      ],
      time: [
        { name: "本日", id: 1 },
        { name: "本周", id: 2 },
        { name: "本年", id: 3 },
      ],
      timeId: 1,
      show: true,
      isac: true,
    };
  },
  methods: {
    changeitem(val) {
      console.log(val);
      if (val === 1) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      const xData = (function () {
        var data = [];
        for (var i = 1; i < 25; i++) {
          data.push(i + "时");
        }
        return data;
      })();
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
          top: 45,
          bottom: 25,
          textStyle: {
            color: "#fff",
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#00CAFC",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            data: xData,
          },
        ],

        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#00CAFC",
              },
            },
          },
        ],

        series: [
          {
            name: "事故数",
            type: "line",
            symbolSize: 5,
            symbol: "circle",
            itemStyle: {
              color: "#00CAFC",
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              data: [
                {
                  type: "max",
                  name: "最大值",
                },
              ],
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
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
              Math.random().toFixed(1) * 100,
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
        // dataZoom: [
        //   {
        //     end: 60,
        //     type: "inside",
        //     xAxisIndex: 0,
        //     filterMode: "filter",
        //   },
        // ],
      });
    },
    initCharts5() {
      let myChart = echarts.init(this.$refs.chart5);

      myChart.setOption({
        color: ["#0058C4", "#0269E9", "#00CFFF", "#00FEFF", "#02E984"],
        series: [
          {
            zlevel: 1,
            type: "funnel",
            left: "10%",
            top: 40,
            //x2: 80,
            bottom: 10,
            width: "60%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 120,
            minSize: "0%",
            maxSize: "100%",
            sort: "none",
            gap: 5,
            label: {
              show: true,
              position: "right",
              color: "#fff",
              align: "right",
              fontSize:'16px',
              formatter: function (params) {
                return params.data.name + ":" + params.data.reaVal + "起";
              },
            },
          
            labelLine: {
              length: 10,
              lineStyle: {
                width: 2,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 0,
            },
            emphasis: {
              label: {
                fontSize: 12,
              },
            },
            data: [
              {
                value: 100,
                name: "白云中大道",
                reaVal: Math.random().toFixed(1) * 100,
              },
              {
                value: 80,
                name: "三衢路口",
                reaVal: Math.random().toFixed(1) * 80,
              },
              {
                value: 60,
                name: "荷花中路",
                reaVal: Math.random().toFixed(1) * 60,
              },
              {
                value: 40,
                name: "荷二路口",
                reaVal: Math.random().toFixed(1) * 50,
              },
              {
                value: 20,
                name: "府山街道",
                reaVal: Math.random().toFixed(1) * 40,
              },
            ],
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
        Math.random().toFixed(1) * 100,
        Math.random().toFixed(1) * 100,
      ];
      this.initCharts4();
      this.initCharts5();
    },
  },
  watch: {
    goodsId: function (newVal) {
      this.initCharts4();
    },
    timeId: function (newVal) {
      this.initCharts4();
    },
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
    justify-content: space-between;
    align-items: center;

    .table {
      cursor: pointer;
      width: 200px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(../../../assets/企/安全切换Bg.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .btn {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .active {
    background-image: url(../../../assets/企/安全item.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .bottom {
    width: 100%;
    height: 100%;
    flex: 6;

    .sad {
      width: 100%;
      height: 100%;
    }
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