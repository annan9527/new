<template>
  <div class="box">
    <!-- <div class="table">
      <div class="btn" :class="{ active: show }" @click="show = !show">
        机关序列
      </div>
      <div class="btn" :class="{ active: !show }" @click="show = !show">
        实战序列
      </div>
    </div>
    <div class="main" v-if="show">
      
    </div>

    <div class="mains" v-else>
      <Shizhan></Shizhan>
    </div> -->
    <Bumen></Bumen>
  </div>
</template>

<script>
import Bumen from "./bumen.vue";
import Shizhan from "./shizhan.vue";
export default {
  data() {
    return {
      show: true,
    };
  },
  components: { Bumen, Shizhan },
};
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  height: 220px;

  .table {
    cursor: pointer;
    width: 400px;
    height: 40px;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .main {
    width: 400px;
    height: 180px;
  }
  .mains {
    width: 400px;
    height: 180px;
  }
  .active {
    background: #002249;
  }
}
</style>