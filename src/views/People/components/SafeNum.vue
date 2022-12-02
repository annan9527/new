<template>
  <div ref="chart4" style="width: 100%; height: 100%"></div>
</template>
        
        <script>
import * as echarts from "echarts";
export default {
  methods: {
    initCharts4() {
      let myChart = echarts.init(this.$refs.chart4);
      let color = [
        "rgb(39,93,254)",
        "rgb(39,115,254)",
        "rgb(1,155,255)",
        "rgb(23,167,244)",
      ];
      let barPercent = ["-1", "2", "-5", "10", "30"];
      let barName = ["红码", "绿码", "黄码", "黑码"];
      let barData = [110, 100, 90, 80];
      var percentPlace = [];
      var maxNum = 0;
      var imgUp =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAANCAYAAAC6hw6qAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAYJJREFUOI211M9LlFEUxvHPjNZIQkoURkSCEZIVRC1aWAhjraaVgQtXblqIqxYRbcT/QCpoUW3aREST+0RRDDeCi2gmihYGwvgLzHDhoqzFvcU4vM1MoAde3pdz7nm/9znn3Jsq5ey1zaETBRQr3suNe47jF47gWnzKbXM/gN04jvM4i5voRQOa9wMIy1jDddxAKvrn01WSmvAEkzj1n8BjeIt7+Inx6H//L2AGY0IpLmAGl+uEXcECsoLSrKAWiknADEaEHnzFNFowIfSjmg3FzZ3EO1zCLLpivFAJzMSkdixiEAN4LjQ9j+EE0KG45nH8x4OorBTj5/4oLB+ag+jD0ajsIVZi7A6WMIpH6MBd7MTvPC5iC7fxsmJDH4XBKaXiwW8UzszpqOQVNhKU9OMpDuMNXuAZWvEZt/AhIe+vpUo5DcLNcAIHhJpvVcm5itdoK/ONC+X/Xg0GaeFW2MEqpmrACMPQgy/CyN8XlNWEEUq5jW9Yx496kvAJZ+pcu8t+A4fjT/SCchLkAAAAAElFTkSuQmCC";
      var imgDown =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAANCAYAAAC6hw6qAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAV9JREFUOI211EFLVGEUxvHfNNYEOU1ukihzIwW1q5WYGmEfQFALgj6AoBgV7Vq0iBahrty1adPKVraMiCkxQhBslSAIgQgitXChjtrinpFhmGlu4DxwOXDPe87/PO9975spbIzncQabKGmyTuA0zuEacinrrmJFMuAzZP4HuBXxPO6gtUHNLXxGF7J4hVmcTQvcx8+IF/EAbXXWj+AD2vEeQ/iNQXzH9TRAkq35im104Ek0rdRjvEEekxgOZzexhCtYwP00QNiNqTfRide4jBZM4TlOYSzgB1G3ih68lXyOd5jGySrWFxQzhY3x6iFy0bwPezHAQOQeYu4fBkYl7nMo4h7WI3dY7bCsHbzAj3B6G39wtwEMZmL9L/RiMeKRagHL0Ef4iGX0R3EaLeAGPuFC9JgoJ2tt6XEpi5d4quI/refwOHQJ3yQH8egGa2kSbB7dNd6vNwtYkpzuxapn7S9PBUm8Hd9BNgAAAABJRU5ErkJggg==";
      for (var i = 0; i < barData.length; i++) {
        if (barData[i] > maxNum) {
          maxNum = barData[i];
        }
      }
      for (var j = 0; j < barData.length; j++) {
        percentPlace.push(maxNum * 1.5);
      }
      myChart.setOption({
        grid: {
          left: "10%",
          right: "18%",
          bottom: "6%",
          top: "12%",
          containLabel: false,
        },

        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            offset: 10,
            position: "left",
            axisLabel: {
              show: true,
              align: "left",
              textStyle: {
                color: "#fff",
                fontSize: 14,
              },
              formatter: function (value, index) {
                var num = "";
                var str = "";
                num = index + 1;
                str = "{name|" + barName[index] + "}";
                return str;
              },
              rich: {
                num: {
                  color: "#07D6DE",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: [-25, 0, 2, 12],
                },
                name: {
                  color: "#92ACBA",
                  fontSize: 14,
                  padding: [-25, 0, 2, 19],
                },
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: barName,
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: false,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: 12,
              },
              formatter: function (value) {
                return value + "个";
              },
            },
            data: barData,
          },
        ],
        series: [
          {
            type: "bar",
            zlevel: 1,
            label: {
              show: true,
              position: "top", // 位置
              fontSize: 14,
              distance: 4, // 距离
              rich: {
                a: {
                  backgroundColor: {
                    image: imgUp,
                  },
                },
                b: {
                  backgroundColor: {
                    image: imgDown,
                  },
                },
                c: {
                  color: "#E44B00",
                  padding: [0, 0, 0, 9],
                },
                d: {
                  color: "#0FE96E",
                  padding: [0, 0, 0, 9],
                },
              },
              formatter: function (params) {
                if (barPercent[params.dataIndex] > 0) {
                  return [
                    "{a" +
                      "|" +
                      "" +
                      "}" +
                      "{c|" +
                      "+" +
                      barPercent[params.dataIndex] +
                      "个" +
                      "}",
                  ];
                } else {
                  return [
                    "{b" +
                      "|" +
                      "" +
                      "}" +
                      "{d|" +
                      barPercent[params.dataIndex] +
                      "个" +
                      "}",
                  ];
                }
              },
            }, // 柱子上方的数值
            barWidth: 1,
            itemStyle: {
              normal: {
                color: "transparent",
              },
            },
            data: percentPlace,
          },
          {
            name: "",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: (params) => {
                  return color[params.dataIndex];
                },
              },
            },
            barWidth: 10,
            data: barData,
          },
          {
            type: "bar",
            barWidth: 10,
            barGap: "-100%",
            data: barData.map(function (item) {
              return {
                realValue: item,
                value: maxNum + 70,
              };
            }),
            label: {
              show: true,
              position: "right",
              distance: 50,
              align: "right",
              formatter: function (params) {
                return params.data.realValue + "个";
              },
              color: "#41D2DA",
              fontSize: 15,
            },
            itemStyle: {
              normal: {
                color: "#082E5E",
              },
            },
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
        
</style>