<template>
  <el-carousel height="167px" :interval="9000">
    <el-carousel-item v-for="(item, index) in arr" :key="index">
      <div class="item">
        <div class="item_lable">{{ item.name }}</div>
      </div>
      <div class="item_timer">
        按期换证率:
        <span style="color: #00deff">{{ item.timer }}</span>
      </div>
      <div class="item_learn">
        满分学习率:
        <span style="color: #00deff">{{ item.learn }}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "A1",
          timer: "99.37%",
          learn: "99.91%",
        },
        {
          name: "A2",
          timer: "99.37%",
          learn: "99.91%",
        },
        {
          name: "A3",
          timer: "99.37%",
          learn: "99.91%",
        },
        {
          name: "B1",
          timer: "99.37%",
          learn: "99.91%",
        },
        {
          name: "B2",
          timer: "99.37%",
          learn: "99.91%",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.item {
  position: absolute;
  top: 15px;
  left: 20px;
  width: 190px;
  height: 120px;
  border: 5px solid #9fd3ff;
  border-radius: 14px;
  background: #033685;
  -webkit-filter: drop-shadow(0 0 10px #ffffff);
  filter: drop-shadow(0 0 10px #81cbe5);
  .item_lable {
    position: absolute;
    left: 19px;
    bottom: 20px;
    width: 50px;
    height: 37px;
    font-size: 32px;
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
  }
}
.item_timer {
  position: absolute;
  top: 47px;
  right: 20px;
  width: 154px;
  height: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: 24px;
}
.item_learn {
  position: absolute;
  top: 87px;
  right: 20px;
  width: 154px;
  height: 24px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: 24px;
}
</style>