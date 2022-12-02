<template>
  <div class="box">
    <div class="table">
      <div class="btn" :class="{ active: show }" @click="show = !show">
        企业
      </div>
      <div class="btn" :class="{ active: !show }" @click="show = !show">
        大队
      </div>
    </div>
    <!-- 企业 -->
    <div class="main" v-if="show">
   <CompanySafe></CompanySafe>
    </div>
    <!-- 大队 -->
    <div class="mains" v-else>
       <SquadronSafe></SquadronSafe>
    </div>
  </div>
</template>

<script>
import CompanySafe from './CompanySafe.vue';
import SquadronSafe from './SquadronSafe.vue';
export default {
  components: { CompanySafe, SquadronSafe },
  data() {
    return {
      show: true,
      isac: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 420px;
  height: 324px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .table {
    cursor: pointer;
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../../assets/企/安全切换Bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .btn {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .main {
    margin-top: 10px;
    width: 420px;
    height: 280px;
    position: relative;
   
  }
  // 集体荣誉
  .mains {
    margin-top: 10px;
    position: relative;
    width: 420px;
    height: 280px;
   
  }
  .active {
    background-image: url(../../../assets/企/安全item.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>