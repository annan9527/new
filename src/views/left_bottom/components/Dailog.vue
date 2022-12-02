<template>
  <!-- 蒙版 -->
  <div class="mask" v-show="isshow">
    <div class="layer">
      <div class="main">
        <div class="table">
          <div
            class="table_item1"
            :class="{ active: show === 'one' }"
            @click="change('one')"
          >
            下午
          </div>
          <div
            class="table_item2"
            :class="{ active: show === 'two' }"
            @click="change('two')"
          >
            前半夜
          </div>
          <div
            class="table_item3"
            :class="{ active: show === 'three' }"
            @click="change('three')"
          >
            后半夜
          </div>
        </div>
        <div class="table_main" v-if="isshow">
          <Dailog_table></Dailog_table>
        </div>
      </div>

      <!-- 关闭按钮 -->
      <button class="button1" @click="close"></button>
    </div>
  </div>
</template>
  
  <script>
import Dailog_table from "./Dailog_table.vue";
export default {
  props: {
    isshow: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      show: "one",
    };
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
    change(item) {
      this.show = item;
    },
  },
  components: { Dailog_table },
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
    height: 55%;
    // background: #fff;
    background-image: url(../../../assets/情指情舆/数据战队弹窗.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .main {
      width: 100%;
      height: 90%;

      .table {
        width: 100%;
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .table_item1 {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid gold;
          font-size: 28px;
        }
        .table_item2 {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid gold;
          font-size: 28px;
        }
        .table_item3 {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid gold;
          font-size: 28px;
        }
        .active {
          background: #265c91;
          border: none;
        }
      }
      .table_main {
        width: 100%;
        height: 400px;
        padding: 20px;
      }
    }
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