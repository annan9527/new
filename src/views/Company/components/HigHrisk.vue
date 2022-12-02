<template>
  <div class="box">
    <div class="table">
      <div class="btn" :class="{ active: show }" @click="show = !show">
        乡镇街道
      </div>
      <div class="btn" :class="{ active: !show }" @click="show = !show">
        企业
      </div>
    </div>
    <!-- 企业 -->
    <div class="main" v-if="show">
      <div class="top">
        <div class="top_item">
          <div class="pie">
            <div class="num" style="color: #00fff9">258</div>
            <div class="ren">(人)</div>
          </div>
          <div class="text">2021年亡人</div>
        </div>
        <div class="top_item">
          <div class="pie">
            <div class="num" style="color: #02e984">220</div>
            <div class="ren">(人)</div>
          </div>
          <div class="text">2022年亡人</div>
        </div>
        <div class="top_item">
          <div class="pie">
            <div class="num" style="color: #eaff00">228</div>
            <div class="ren">(人)</div>
          </div>
          <div class="text">2023年亡人</div>
        </div>
      </div>
      <div class="list">
        <DeathYear></DeathYear>
      </div>
    </div>
    <!-- 大队 -->
    <div class="mains" v-else>
      <div class="top">
        <div class="top_item">
          <div class="pie">
            <div class="num" style="color: #00fff9">36</div>
            <div class="ren">(人)</div>
          </div>
          <div class="text">2021年亡人</div>
        </div>
        <div class="top_item">
          <div class="pie">
            <div class="num" style="color: #02e984">22</div>
            <div class="ren">(人)</div>
          </div>
          <div class="text">2022年亡人</div>
        </div>
        <div class="top_item">
          <div class="pie">
            <div class="num" style="color: #eaff00">51</div>
            <div class="ren">(人)</div>
          </div>
          <div class="text">2023年亡人</div>
        </div>
      </div>
      <div class="list">
       <DeathComponentsCopy></DeathComponentsCopy>
      </div>
    </div>
  </div>
</template>

<script>
import CompanySafe from "./CompanySafe.vue";
import DeathComponentsCopy from './DeathComponents.vue';
import DeathYear from "./DeathYear.vue";
import SquadronSafe from "./SquadronSafe.vue";
export default {
  components: { CompanySafe, SquadronSafe, DeathYear, DeathComponentsCopy },
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
  width: 100%;
  height: 100%;
  padding-left: 15%;
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
    height: 310px;
    position: relative;
  }
  .top {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .top_item {
        width: 80px;
        height: 100px;

        .pie {
          width: 80px;
          height: 75px;
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: url(../../../assets/企/绿.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
         margin-bottom: 10px;

          .num {
            font-size: 24px;
            font-family: led;
            font-weight: 400;
          }
          .ren {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #dbdbdb;
          }
        }
        .text {
          width: 80px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 800;
          color: #dbdbdb;
        }
      }
    }
    .list {
      margin-top: 10px;
      width: 100%;
      height: 220px;
    }
  // 集体荣誉
  .mains {
    margin-top: 10px;
    position: relative;
    width: 420px;
    height: 310px;
  }
  .active {
    background-image: url(../../../assets/企/安全item.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>