<template>
  <div class="box">
    <div class="item">
      <div class="one">
        <div class="number" style="margin-bottom: 2px; color: #ff4043">
          3259
        </div>
        <div class="title">酒驾</div>
      </div>
      <!-- 箭头 -->
      <div class="two">
        <div class="on">
          <img src="../assets/image/jiantou/up.png" alt="" v-if="q" />
          <img src="../assets/image/jiantou/colorup.png" alt="" v-else />
        </div>
        <div class="ons">
          <img src="../assets/image/jiantou/down.png" alt="" v-if="w" />
          <img src="../assets/image/jiantou/colordown.png" alt="" v-else />
        </div>
      </div>
    </div>
    <div class="item">
      <div class="one">
        <div class="number" style="margin-bottom: 2px; color: #ff6229">1050</div>
        <div class="title">醉驾</div>
      </div>
      <!-- 箭头 -->
      <div class="two">
        <div class="on">
          <img src="../assets/image/jiantou/up.png" alt="" v-if="q" />
          <img src="../assets/image/jiantou/colorup.png" alt="" v-else />
        </div>
        <div class="ons">
          <img src="../assets/image/jiantou/down.png" alt="" v-if="w" />
          <img src="../assets/image/jiantou/colordown.png" alt="" v-else />
        </div>
      </div>
    </div>
    <div class="item">
      <div class="one">
        <div class="number" style="margin-bottom: 2px; color: #fccd3e">898</div>
        <div class="title">失驾</div>
      </div>
      <!-- 箭头 -->
      <div class="two">
        <div class="on">
          <img src="../assets/image/jiantou/up.png" alt="" v-if="q" />
          <img src="../assets/image/jiantou/colorup.png" alt="" v-else />
        </div>
        <div class="ons">
          <img src="../assets/image/jiantou/down.png" alt="" v-if="w" />
          <img src="../assets/image/jiantou/colordown.png" alt="" v-else />
        </div>
      </div>
    </div>
    <div class="item">
      <div class="one">
        <div class="number" style="margin-bottom: 2px; color: #408cff">
        3318
        </div>
        <div class="title">超载</div>
      </div>
      <!-- 箭头 -->
      <div class="two">
        <div class="on">
          <img src="../assets/image/jiantou/up.png" alt="" v-if="u" />
          <img src="../assets/image/jiantou/colorup.png" alt="" v-else />
        </div>
        <div class="ons">
          <img src="../assets/image/jiantou/down.png" alt="" v-if="!u" />
          <img src="../assets/image/jiantou/colordown.png" alt="" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: false,
      w: true,
      u: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  // background-color: red;
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-around;

  .item {
    padding-top: 5px;
    position: relative;
    background-image: url(../assets/image/酒驾.png);
    background-size: 100% 100%;
    width: 85px;
    height: 50px;
    background-repeat: no-repeat;

    .number {
      width: 27px;
      height: 14px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 21px;
    }
    .title {
      height: 10px;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #dbdbdb;
      line-height: 21px;
    }
    .one {
      text-align: center;
      margin-top: 4px;
      margin-left: 15px;
      width: 30px;
      height: 30px;
      //   background-color: #3ccc14;
    }
    .two {
      right: 5px;
      top: 15px;
      position: absolute;
      width: 20px;
      height: 20px;
      display: flex;
      .on {
        flex: 1;
      }
      .ons {
        flex: 1;
      }
    }
  }
}
</style>