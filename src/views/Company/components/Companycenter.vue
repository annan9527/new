<template>
  <div class="box">
    <!-- 隐患整改 -->
    <div class="left_item1">
      <div class="label">
        <div class="name">旺成机械</div>
        <div class="more" @click="open()">
          <img src="../../../assets/企/中间的/更多.png" alt="" />
        </div>
        <div class="number"><span style="color: #ffcb00">3</span>次</div>
      </div>
    </div>
    <!-- 隐患整改 -->
    <div class="left_item2">
      <div class="label">
        <div class="name">仁信保洁</div>
        <div class="more" @click="open()">
          <img src="../../../assets/企/中间的/更多.png" alt="" />
        </div>
        <div class="number"><span style="color: #ffcb00">3</span>次</div>
      </div>
    </div>
    <!-- 隐患整改 -->
    <div class="left_item3">
      <div class="label">
        <div class="name">通达物流</div>
        <div class="more" @click="open()">
          <img src="../../../assets/企/中间的/更多.png" alt="" />
        </div>
        <div class="number"><span style="color: #ffcb00">3</span>次</div>
      </div>
    </div>
    <!-- 隐患整改 -->
    <div class="left_item4">
      <div class="label1">
        <div class="name">四海建设</div>
        <div class="more" @click="open()">
          <img src="../../../assets/企/中间的/更多.png" alt="" />
        </div>
        <div class="number"><span style="color: #ffcb00">3</span>次</div>
      </div>
    </div>
    <!-- 隐患整改 -->
    <div class="left_item5">
      <div class="label1">
        <div class="name">立飞物流</div>
        <div class="more" @click="open()">
          <img src="../../../assets/企/中间的/更多.png" alt="" />
        </div>
        <div class="number"><span style="color: #ffcb00">3</span>次</div>
      </div>
    </div>
    <!-- 隐患整改 -->
    <div class="left_item6">
      <div class="label1">
        <div class="name">通达物流</div>
        <div class="more" @click="open()">
          <img src="../../../assets/企/中间的/更多.png" alt="" />
        </div>
        <div class="number"><span style="color: #ffcb00">3</span>次</div>
      </div>
    </div>

    <ComponentDailog :isshow="showdailog" @close="close(val)"></ComponentDailog>
  </div>
</template>
<script>
import ComponentDailog from "./Dailog/ComponentDailog.vue";
export default {
  data() {
    return {
      showdailog: false,
    };
  },
  components: { ComponentDailog },
  methods: {
    open() {
      this.showdailog = true;
    },
    close(val) {
      this.showdailog = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-image: url(../../../assets/企/企BG.jpg);
  background-position-y: -100px;
  background-repeat: no-repeat;
  position: relative;
  .left_item1 {
    position: absolute;
    left: 570px;
    top: 209px;
    width: 280px;
    height: 70px;
    background-image: url(../../../assets/企/中间的/左/隐患整改_左上.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  .left_item2 {
    position: absolute;
    left: 570px;
    top: 339px;
    width: 250px;
    height: 70px;
    background-image: url(../../../assets/企/中间的/左/隐患整改_左中.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  .left_item3 {
    position: absolute;
    left: 630px;
    top: 459px;
    width: 280px;
    height: 70px;
    background-image: url(../../../assets/企/中间的/左/隐患整改_左下.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  .left_item4 {
    position: absolute;
    left: 1100px;
    top: 19px;
    width: 280px;
    height: 70px;
    background-image: url(../../../assets/企/中间的/右/隐患整改_右上.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  .left_item5 {
    position: absolute;
    left: 1100px;
    top: 109px;
    width: 280px;
    height: 70px;
    background-image: url(../../../assets/企/中间的/右/隐患整改_右中.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  .left_item6 {
    position: absolute;
    left: 1030px;
    top: 249px;
    width: 280px;
    height: 70px;
    background-image: url(../../../assets/企/中间的/右/隐患整改_右下.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }
  .label {
    position: absolute;
    top: 0;
    left: 10px;
    width: 156px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .label1 {
    position: absolute;
    top: 0;
    right: 10px;
    width: 156px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .name {
    font-family: mini;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    background: linear-gradient(180deg, #dbe5f0 0%, #b4d3f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .more {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .number {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 800;
  }
}
</style>