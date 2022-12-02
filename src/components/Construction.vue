<template>
  <div class="box">
    <div class="title">
      <div>施工路段: <span style="color: #ffcb00">沿江公路</span></div>
      <div>
        施工时段: <span style="color: #ffcb00">2022.09.01—2022.01.30</span>
      </div>
      <div>施工情况: <span style="color: #1ef746">正常</span></div>
    </div>
    <div class="img">
      <img src="../assets/image/施工路段图.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 375px;
  height: 72px;

  position: relative;
  .title {
    padding: 2px 0;
    position: absolute;
    top: 6px;
    width: 230px;
    height: 80px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #dbdbdb;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .img {
    top: 10px;
    position: absolute;
    right: 18px;
  }
}
</style>