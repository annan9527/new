<template>
  <div class="top">
    <div class="item1">
      <div class="title">卡口</div>
      <div class="number">399</div>
    </div>
    <div class="item2">
      <div class="title">电子警察</div>
      <div class="number">2171</div>
    </div>
    <div class="item3">
      <div class="title">信号灯</div>
      <div class="number">381</div>
    </div>
    <div class="item4">
      <div class="title">机动车</div>
      <div class="number">712364</div>
    </div>
    <div class="item5">
      <div class="title">驾驶员</div>
      <div class="number">845164</div>
    </div>
  </div>
</template>

<script>
import { findBanner } from "../api/home";
export default {
  data() {
    return {
      obj: null,
    };
  },
  methods: {
    find() {
      findBanner().then((e) => {
        console.log(e)   
      });
    },
  },
  created() {
    this.find();
  },
};
</script>

<style lang="scss" scoped>
.top {
  width: 1000px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .item1 {
    width: 170px;
    height: 80px;
    opacity: 0.9;
    background-image: url(../assets/image/头部/卡口.png);
    padding-left: 65px;
    padding-top: 20px;
    .title {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
      opacity: 0.7;
    }
    .number {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;
    }
  }
  .item2 {
    width: 170px;
    height: 80px;
    opacity: 0.9;
    background-image: url(../assets/image/头部/电子警察.png);
    padding-left: 65px;
    padding-top: 20px;
    .title {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
      opacity: 0.7;
    }
    .number {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;
    }
  }
  .item3 {
    width: 170px;
    height: 80px;
    opacity: 0.9;

    background-image: url(../assets/image/头部/信号灯.png);
    padding-left: 65px;
    padding-top: 20px;
    .title {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
      opacity: 0.7;
    }
    .number {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;
    }
  }
  .item4 {
    width: 170px;
    height: 80px;
    opacity: 0.9;
    background-image: url(../assets/image/头部/机动车.png);
    padding-left: 65px;
    padding-top: 20px;
    .title {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
      opacity: 0.7;
    }
    .number {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;
    }
  }
  .item5 {
    width: 170px;
    height: 80px;
    opacity: 0.9;
    background-image: url(../assets/image/头部/驾驶员.png);
    padding-left: 65px;
    padding-top: 20px;
    .title {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
      opacity: 0.7;
    }
    .number {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;
    }
  }
}
</style>