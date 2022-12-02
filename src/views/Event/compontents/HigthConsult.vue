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
        { name: "本月", id: 1 },
        { name: "本周", id: 2 },
        { name: "本年", id: 3 },
      ],
    };
  },
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      const min = 100;
      const max = 500;
      const province = [
        "优化斑马线 ",
        "设置信号灯",
        "信号灯时长",
        "噪音扰民",
        "红绿灯时长",
        "斑马线",
      ];
      const data = province.map((value) => [
        value,
        Math.random() * 100,
        Math.random() * 100,
      ]);

      myChart.setOption({
       
        tooltip: {
          show: true,
          backgroundColor: "#fff",
          trigger: "item",
          formatter(item) {
            return `建议条数:&nbsp;${item.value[1].toFixed(0)}条
          `;
          },
          textStyle: {
            fontSize: 16,
          },
        },
        grid: {
          bottom: 25,
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: "#485465",
            },
            show: false,
          },
          data: province,
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#485465",
            },
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            inside: false,
            rotate: 0,
            margin: 12,
            color: "orange",
            fontSize: 16,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#485465"],
              width: 0.5,
              type: "dashed",
            },
          },

          nameLocation: "end",
          nameTextStyle: {
            color: "orange",
            fontSize: 14,
            align: "left",
            padding: [0, 0, 0, -40],
          },
          nameGap: 20,
          show: true,
          scale: true,
          min: 0,
        },
        series: [
          {
            symbolSize(value) {
              return value[0].length * 13;
            },
            label: {
              formatter: "{b}",
              fontSize: 13,
              show: true,
            },
            type: "scatter",
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(25, 100, 150, 0.5)',
              shadowOffsetY: 5,
              normal: {
                borderColor: "rgba(107,209,255,0.4)",
                borderWidth: 1,
                color: new echarts.graphic.RadialGradient(0.5, 0.2, 0.5, [
                    {
                        offset: 0,
                        color: '#fff',
                    },
                    {
                        offset: 1,
                        color: '#378eff',
                    },
                ]),
              },
            },
            data: data,
          },
        ],
      });
    },
  },
  watch: {
    goodsId: function (newVal) {
      this.initCharts4();
    },
    deep: true,
    immediate: true,
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
    flex: 0.5;
    display: flex;
    align-items: flex-end;
  }
  .bottom {
    width: 100%;
    height: 100%;
    flex: 6;
  }
}
</style>