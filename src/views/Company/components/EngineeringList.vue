<template>
  <div class="boxz">
    <div class="title">企业违法(次)</div>
    <div class="list">
      <div class="listitem">
        <div class="name">圣效集团</div>
        <div class="num">122</div>
      </div>
      <div class="listitem">
        <div class="name">江松工程机械</div>
        <div class="num">158</div>
      </div>
      <div class="listitem">
        <div class="name">仁信保洁</div>
        <div class="num">78</div>
      </div>
      <div class="listitem">
        <div class="name">开乐保洁</div>
        <div class="num">105</div>
      </div>
      <div class="listitem">
        <div class="name">宇飞化工</div>
        <div class="num">162</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.boxz {
  width: 100%;
  height: 100%;

  position: relative;
  .title {
    position: absolute;
    top: 0px;
    left: 10px;
  }
  .list {
    position: absolute;
    top: 30px;
    left: 10px;
    width: 200px;
    height: 140px;
    background-color: rgba($color: #002767, $alpha: 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .listitem {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
     
      .num {
        font-size: 16px;
        font-family: LED;
        font-weight: 400;
        color: #00fff9;
      }
      .name {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #ecf9ff;
      }
    }
  }
}
</style>