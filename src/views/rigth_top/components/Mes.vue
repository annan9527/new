<template>
  <div class="box">
    <div class="left">
      <div class="select">
        <el-dropdown trigger="click"  size="mini">
          <span class="el-dropdown-link">
            柯城大队<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>柯城大队</el-dropdown-item>
            <el-dropdown-item>衢江大队</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="top">
        <div class="one">
          <div class="number">1240</div>
          <div class="text">本日</div>
        </div>
        <div class="two">
          <div class="number">5374</div>
          <div class="text">本周</div>
        </div>
      </div>
      <div class="bottom">
        <div class="number">26890</div>
        <div class="text">本月</div>
      </div>
    </div>
    <div class="rigth">
      <Zero></Zero>
    </div>
  </div>
</template>
  
  <script>
import Zero from "./Zero.vue";
export default { components: { Zero } };
</script>
  
  <style lang="scss" scoped>
.box {
  width: 400px;
  height: 160px;
  display: flex;
  padding: 0 10px;

  .rigth {
    width: 280px;
    height: 160px;
  }
  .left {
    width: 120px;
    height: 160px;
    margin-right: 10px;

    .select {
      position: absolute;
      width: 120px;
      height: 30px;

      text-align: center;
      line-height: 30px;
    }
    .top {
      margin-top: 30px;
      height: 50px;
      width: 120px;
      display: flex;
      justify-content: space-around;
      .one {
        width: 60px;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .number {
          font-size: 19px;
          font-family: PingFang SC;
          font-weight: 800;
          color: #ffa100;
        }
        .text {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 800;
          //   color: #ffa100;
        }
      }
      .two {
        width: 60px;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .number {
          font-size: 19px;
          font-family: PingFang SC;
          font-weight: 800;
          color: #00ffb4;
        }
        .text {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 800;
          //   color: #ffa100;
        }
      }
    }
    .bottom {
      height: 50px;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .number {
        font-size: 19px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #00f6ff;
      }
      .text {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 800;
        //   color: #ffa100;
      }
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>