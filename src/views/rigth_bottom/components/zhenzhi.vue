<template>
  <div class="box">
    <div class="table">
      <div class="btn" :class="{ active: show }" @click="show = !show">
        个人荣誉
      </div>
      <div class="btn" :class="{ active: !show }" @click="show = !show">
        集体荣誉
      </div>
    </div>
    <!-- 个人荣誉 -->
    <div class="main" v-if="show">
      <div class="tables">
        <div class="top" :class="{ ac: isac }" @click="isac = !isac">民警</div>
        <div class="bottom" :class="{ ac: !isac }" @click="isac = !isac">
          辅警
        </div>
      </div>

      <div class="left" v-if="isac">
        <div class="item">
          <div class="hua">
            <img src="../../../assets/服务保障/劳.png" alt="" />
          </div>
          <div class="myname">
            <div class="my">蓝剑刚</div>
            <div class="gong">个人嘉奖</div>
          </div>
        </div>
        <div class="item">
          <div class="hua">
            <img src="../../../assets/服务保障/劳.png" alt="" />
          </div>
          <div class="myname">
            <div class="my">姚秋雷</div>
            <div class="gong">个人嘉奖</div>
          </div>
        </div>
        <div class="item">
          <div class="hua">
            <img src="../../../assets/服务保障/党.png" alt="" />
          </div>
          <div class="myname">
            <div class="my">吴建洪</div>
            <div class="gong">优秀党务</div>
          </div>
        </div>
      </div>
      <div class="lefts" v-else>
        <div class="item">
          <div class="hua">
            <img src="../../../assets/服务保障/劳.png" alt="" />
          </div>
          <div class="myname">
            <div class="my">徐敏</div>
            <div class="gong">二等治安</div>
          </div>
        </div>
        <div class="item">
          <div class="hua">
            <img src="../../../assets/服务保障/劳.png" alt="" />
          </div>
          <div class="myname">
            <div class="my">郑万怡</div>
            <div class="gong">二等治安</div>
          </div>
        </div>
        <div class="item">
          <div class="hua">
            <img src="../../../assets/服务保障/劳.png" alt="" />
          </div>
          <div class="myname">
            <div class="my">赵小龙</div>
            <div class="gong">三等治安</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 集体荣誉 -->
    <div class="mains" v-else>
      <!-- 获得荣誉 -->
      <div class="good">
        <div class="name">获得荣誉</div>
        <div class="i">2021年度全市公安机关“示范支部”</div>
      </div>
      <!-- 获奖时间 -->

      <div class="good">
        <div class="name">获奖时间</div>
        <div class="i">2022.3.7</div>
      </div>
      <!-- 获奖单位/ -->
      <div class="good">
        <div class="name">获奖单位</div>
        <div class="i">车管所党支部</div>
      </div>
      <!-- 授奖单位 -->
      <div class="good">
        <div class="name">授奖单位</div>
        <div class="i">中共衢州市公安局委员会</div>
      </div>
    </div>
  </div>
</template>

<script>
import Bumen from "./bumen.vue";
import Shizhan from "./shizhan.vue";
export default {
  data() {
    return {
      show: true,
      isac: true,
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
    position: relative;
    .tables {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      width: 46px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        cursor: pointer;
        width: 46px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }
      .bottom {
        cursor: pointer;
        width: 46px;
        height: 30px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        align-items: center;
      }
      .ac {
        background: RGB(1, 105, 250, 0.3);
      }
    }
    .left {
      width: 300px;
      height: 120px;
      position: absolute;
      top: 30px;
      right: 0px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 20px;
      .item {
        position: relative;
        width: 90px;
        height: 120px;

        display: flex;

        .hua {
          top: 0;
          right: 0;
          position: absolute;
          width: 90px;
          height: 71px;

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .myname {
          width: 90px;
          height: 45px;

          position: absolute;
          bottom: 0px;
          left: 0;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .lefts {
      width: 300px;
      height: 120px;
      position: absolute;
      top: 30px;
      right: 0px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 20px;
      .item {
        position: relative;
        width: 90px;
        height: 120px;
        display: flex;
        .hua {
          top: 0;
          right: 0;
          position: absolute;
          width: 90px;
          height: 71px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .myname {
          width: 90px;
          height: 45px;

          position: absolute;
          bottom: 0px;
          left: 0;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  // 集体荣誉
  .mains {
    width: 400px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .good {
      width: 400px;
      height: 30px;

      display: flex;
      .name {
        width: 100px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }
      .i {
        width: 300px;
        height: 30px;
        border-bottom: 1px solid #fff;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffdb4c;
      }
    }
  }
  .active {
    background: #002249;
  }
}
</style>