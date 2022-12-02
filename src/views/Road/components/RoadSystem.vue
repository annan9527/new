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
      goodsId: 1,
      kindList: [
        { name: "305国道", id: 1 },
        { name: "315国道", id: 2 },
        { name: "221国道", id: 3 },
        { name: "205国道", id: 4 },
        { name: "320国道", id: 5 },
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
          top: "16%",
          containLabel: true,
        },
        legend: {
          data: ["2020年", "2021年", "2022年"],
          right: 10,
          top: 12,
          textStyle: {
            color: "#fff",
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
        xAxis: {
          type: "category",
          data: ["市级路长", "柯城", "衢江", "常山"],
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
          max: "100",
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
            name: "2020年",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: "#0269E9",
              },
            },
            data: [80, 40, 30, 30, 30, 40, 40, 40, 30],
          },
          {
            name: "2021年",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: "#00CFFF",
              },
            },
            data: [40, 50, 50, 50, 50, 40, 40, 50, 50],
          },
          {
            name: "2022年",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: "#02E984",
              },
            },
            data: [40, 60, 70, 70, 60, 40, 40, 60, 70],
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