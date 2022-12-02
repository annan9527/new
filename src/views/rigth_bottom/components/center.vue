<template>
  <el-carousel
    class="carousel"
    :interval="6000"
    type="card"
    height="300px"
    indicator-position="none"
  >
    <el-carousel-item
      v-for="(item, index) in topImg"
      :key="index"
      :style="{ backgroundImage: 'url(' + item.url + ')' }"
    >
      <div class="item1s">{{ item.item1 }}</div>
      <div class="item2s">{{ item.item2 }}</div>
      <div class="item3s">{{ item.item3 }}</div>
      <div class="item4s">{{ item.item4 }}</div>
    </el-carousel-item>
  </el-carousel>
</template>
      
      <script>
export default {
  data() {
    return {
      topImg: [
        {
          url: require("../../../assets/服务保障/挂车.png"),
          item1: "99.2%",
          item2: "99.2%",
          item3: "99.2%",
          item4: "99.2%",
        },
        {
          url: require("../../../assets/服务保障/货车.png"),
          item1: "99.2%",
          item2: "99.2%",
          item3: "99.2%",
          item4: "99.2%",
        },

        {
          url: require("../../../assets/服务保障/面包车.png"),
          item1: "99.2%",
          item2: "99.2%",
          item3: "99.2%",
          item4: "99.2%",
        },
        {
          url: require("../../../assets/服务保障/两客.png"),
          item1: "99.2%",
          item2: "99.2%",
          item3: "99.2%",
          item4: "99.2%",
        },
      ],
    };
  },
};
</script>
      
<style lang="scss">
.carousel {
  // height: 347px;
  margin: 0 auto;
  .el-carousel__mask {
    background-color: transparent !important;
  }
}

.el-carousel__item {
  margin: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-size: 20px;
  color: #fff;
}

.item1s {
  position: absolute;
  bottom: 60px;
  left: 40px;
  width: 70px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.item2s {
  position: absolute;
  bottom: 60px;
  left: 140px;
  width: 88px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.item3s {
  position: absolute;
  bottom: 60px;
  left: 258px;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item4s {
  position: absolute;
  bottom: 60px;
  left: 367px;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>