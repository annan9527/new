<template>
  <!-- 蒙版 -->
  <div class="mask" v-show="isshow">
    <div class="layer">
      <!-- 列表 -->
      <el-form ref="form" :model="tableData" label-width="80px">
        <el-form-item>
          <span slot="label">
            <span style="color: #fff; font-size: 20px">车牌</span>
          </span>
          <el-input
          readonly=“readonly”
            v-model="tableData.chepai"
            style="color: #fff; font-size: 20px;"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <span slot="label">
            <span style="color: #fff; font-size: 20px">卡口</span>
          </span>
          <el-input
          readonly=“readonly”
            v-model="tableData.kakou"
            style="color: #fff; font-size: 20px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <span slot="label">
            <span style="color: #fff; font-size: 20px">时间</span>
          </span>
          <el-input
          readonly=“readonly”
            v-model="tableData.time"
            style="color: #fff; font-size: 20px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <span slot="label">
            <span style="color: #fff; font-size: 20px">照片</span>
          </span>
          <!-- 卡口图片 -->
          <img
            src="../../../assets/image/施工路段图.png"
            alt=""
            style="width: 320px; height: 200px"
          />
        </el-form-item>
      </el-form>
      <button class="button1" @click="close"></button>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    isshow: {
      default: false,
      type: Boolean,
    },
    tableData: {
      default: {},
    },
  },
  data() {
    return {
      activitylogVisible: false,
      activeDetail: {},
      html: undefined, //内容
    };
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1110;
  // text-align: center;
  opacity: 1;
  transform: scale(1);
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out 0s;
  .layer {
    padding-right: 10%;
    position: relative;
    padding: 85px 20px 20px 20px;
    background-repeat: no-repeat;
    width: 40%;
    height: 50%;
    // background: #fff;
    background-image: url(../../../assets/情指情舆/数据战队弹窗.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .button1 {
      opacity: 0;
      top: 0%;
      right: -0.5%;
      position: absolute;
      width: 15%;
      height: 8%;
      border: 0px solid #43a7de;
      background: linear-gradient(0deg, #265c91 0%, #2e70b3 100%);
      border-radius: 0.13rem;
      background-image: url(../../../assets/情指情舆/关闭.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>