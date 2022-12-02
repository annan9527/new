<template>
  <div class="box">
    <div class="top">
      <span class="el-dropdown-link"> 多发事故路段 </span>
      <!-- <span style="font-size: 16px; color: #fff"> 320国道 </span> -->
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
  data(){
    return {
      goodsId: 1,
      kindList: [
        { name: "白云中大道", id: 1 },
        { name: "荷花中路", id: 2 },
      ],
    }
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
        legend: {
          data: ["2022年", "2021年"],
          top: "2%",
          right: "5%",
          textStyle: {
            color: "#fff",
            fontSize: "20",
          },
          itemWidth: 16,
          itemHeight: 16,
          //itemGap: 35
        },
        grid: {
          left: "5%",
          top: "40px",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "7:00/9:00",
              "9:00/11:00",
              "11:00/1:00",
              "1:00/3:00",
              "3:00/5:00",
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
              },
            },

            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              // rotate:50,
              show: true,
              splitNumber: 15,
              textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12",
              },
            },
          },
        ],
        yAxis: [
          {
            min: 0, //y轴的最小值
            max: 10, //y轴最大值
            interval: 2, //值之间的间隔
            type: "value",
            axisLabel: {
              //formatter: '{value} %'
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: "18",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                fontSize: "22px",
                color: "rgba(49,176,255,0.5)",
              },
            },
            splitLine: {
              show: true,
              width: 2,
              lineStyle: {
                color: "#03202E",
              },
            },
          },
        ],
        series: [
          {
            name: "2022年",
            type: "bar",
            data: [1, 5, 1, 5, 6, 5, 2, 5, 9],
            barWidth: "26%", //柱子宽度

            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 16,
                  },
                },
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 0,
                    color: "#38B2E6",
                  },
                  {
                    offset: 1,
                    color: "#0B3147",
                  },
                ]),
                opacity: 1,
                // barBorderRadius: 5,
              },
            },
            // markLine: {
            //   symbol: "none", //去掉警戒线最后面的箭头
            //   data: [
            //     {
            //       silent: false, //鼠标悬停事件  true没有，false有
            //       label: {
            //         fontSize: "10px",
            //         position: "middle", // 表现内容展示的位置
            //         formatter: "月平均亡人数上限", // 标线展示的内容
            //         color: "#fff", // 展示内容颜色
            //       },
            //       lineStyle: {
            //         //警戒线的样式  ，虚实  颜色
            //         type: "solid",
            //         color: "#FA3934",
            //       },
            //       yAxis: "2000", // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
            //     },
            //   ],
            // },
          },
          {
            name: "2021年",
            type: "bar",
            data: [2, 4, 3, 5, 2, 6, 2, 5, 4],
            barWidth: "26%",
            // barGap: 1,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 16,
                  },
                },
                color: "#62c98d",
                opacity: 1,
                // barBorderRadius: 5,
              },
            },
          },
        ],
        // 拖拽
        dataZoom: [
          {
            end: 100,
            type: "inside",
            xAxisIndex: 0,
            filterMode: "filter",
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
    padding-right: 20px;
    width: 100%;
    height: 100%;
    padding-left: 20px;
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