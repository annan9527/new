<template>
  <div class="num">
    <div class="title">设备设施数量统计</div>
    <div class="item1">
      <div>标志牌:</div>
      <div style="color: #00fff9">11802 <span>块</span></div>
    </div>
    <div class="item2">
      <div>护栏:</div>
      <div style="color: #00fff9">11802 <span>片</span></div>
    </div>
    <div class="item3">
      <div>信号灯:</div>
      <div style="color: #00fff9">
        <span style="color: #fcb344; margin-right: 5px">320路口</span
        ><span>(1221组)</span>
      </div>
    </div>
    <div class="item4">
      <div>标线:</div>
      <div style="color: #00fff9">15589<span>处</span></div>
    </div>
    <div class="item5">
      <div>其他:</div>
      <div style="color: #00fff9">1131<span>处</span></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.num {
  position: absolute;
  bottom: 20px;
  left: 0px;
  width: 100%;
  height: 150px;

  padding: 20px;
  .title {
    width: 186px;
    height: 20px;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ecf9ff;
    line-height: 20px;
  }
  .item1 {
    position: absolute;
    top: 62px;
    left: 20px;
    width: 140px;
    height: 20px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ecf9ff;
    line-height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item2 {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 92px;
    left: 20px;
    width: 140px;
    height: 20px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ecf9ff;
    line-height: 47px;
  }
  .item3 {
    position: absolute;
    top: 122px;
    left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 20px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ecf9ff;
    line-height: 47px;
  }
  .item4 {
    position: absolute;
    top: 62px;
    left: 220px;
    width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ecf9ff;
    line-height: 47px;
  }
  .item5 {
    position: absolute;
    top: 92px;
    left: 220px;
    width: 140px;
    height: 20px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: PingFang SC;
    font-weight: 800;
    color: #ecf9ff;
    line-height: 47px;
  }
}
</style>