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
      <div class="left">
        <CarPie></CarPie>
      </div>
      <div class="rigth">
        <div class="title">事故数:</div>
        <div class="thing" style="margin-bottom: 10px">
          <div class="top">
            <div class="top_left">
              <div class="num">3475</div>
              <div class="year">今年</div>
            </div>
            <div class="top_rigth">
              <div class="num">3475</div>
              <div class="year">去年</div>
            </div>
          </div>
          <div class="buttom">-0.63%</div>
        </div>
        <div class="title">亡人数:</div>
        <div class="thing">
          <div class="top">
            <div class="top_left">
              <div class="num">44</div>
              <div class="year">今年</div>
            </div>
            <div class="top_rigth">
              <div class="num">39</div>
              <div class="year">去年</div>
            </div>
          </div>
          <div class="buttom">+12.82%</div>
        </div>
      </div>
    </div>
  </div>
</template>
            
            <script>
import CarPie from "./CarPie.vue";

export default {
  components: { CarPie },
  data() {
    return {
      goodsId: "1",
      kindList: [
        { name: "全市", id: 1 },
        { name: "柯城", id: 2 },
        { name: "衢江", id: 3 },
        { name: "集聚区", id: 4 },
        { name: "开化", id: 5 },
        { name: "常山", id: 6 },
        { name: "龙游", id: 7 },
      ],
    };
  },

  methods: {},
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

    flex: 1;
    display: flex;
    align-items: center;
  }
  .bottom {
    width: 100%;
    height: 100%;
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;

    .left {
      flex: 1;
      width: 100%;
      height: 100%;
    }
    .rigth {
      flex: 1;
      width: 100%;
      height: 100%;
      .title {
        width: 100%;
        height: 20px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
      }
      .thing {
        width: 220px;
        height: 85px;
        background: #093a8a;
        margin-top: 10px;
        .top {
          width: 220px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          .top_left {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .num {
              font-size: 28px;
              font-family: PingFang SC;
              font-weight: 800;
              color: #00fff9;
            }
            .year {
              font-size: 18px;
              font-family: Adobe Heiti Std;
              font-weight: normal;
              color: #dbdbdb;
            }
          }
          .top_rigth {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .num {
              font-size: 28px;
              font-family: PingFang SC;
              font-weight: 800;
              color: #00ffae;
            }
            .year {
              font-size: 18px;
              font-family: Adobe Heiti Std;
              font-weight: normal;
              color: #dbdbdb;
            }
          }
        }
        .buttom {
          width: 220px;
          height: 25px;
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: 700;
          color: #ffdb4c;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
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