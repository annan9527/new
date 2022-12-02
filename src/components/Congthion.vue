<template>
  <div class="box">
    <div class="title">
      <span>拥堵路段</span>
      <span style="color: #ffcb00; font-size: 14px; font-style: oblique"
        >TOP5</span
      >
    </div>
    <div class="top">
      <div class="item">
         <div class="i">1</div>
        <div class="name" style="color: #ffcb00;">320国道</div>
        <div class="number">23 <span>次</span></div>
        <div class="size"><img src="../assets/image/jiantou/colorup.png" alt=""></div>
      </div>
      <div class="item">
        <div class="i">2</div>
        <div class="name" style="color:#ffcb00;">205国道</div>
        <div class="number">23 <span>次</span></div>
        <div class="size"><img src="../assets/image/jiantou/colordown.png" alt=""></img></div>
      </div>
      <div class="item">
        <div class="i">3</div>
        <div class="name" style="color:  #00ff33">朱富线</div>
        <div class="number">23 <span>次</span></div>
        <div class="size"><img src="../assets/image/jiantou/colordown.png" alt=""></img></div>
      </div>
      <div class="item">
        <div class="i">4</div>
        <div class="name" style="color: #ffcb00;">浙西大道</div>
        <div class="number">23 <span>次</span></div>
        <div class="size"><img src="../assets/image/jiantou/colordown.png" alt=""></img></div>
      </div>
      <div class="item">
        <div class="i">5</div>
        <div class="name"  style="color: #00ff33;">衢州东互通</div>
        <div class="number">23 <span>次</span></div>
        <div class="size"><img src="../assets/image/jiantou/colordown.png" alt=""></img></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 175px;
  height: 155px;
  background: #202746;
  border-radius: 3px;
  position: relative;
  .color {
    position: absolute;
    top: 40px;
    right: 50px;
  }
  .title {
    padding-top: 10px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ecf9ff;
    width: 100%;
    height: 20px;
    padding-left: 10px;
    line-height: 20px;
  }
  .top {
    position: absolute;
    top: 35px;
    left: 10px;
    width: 155px;
    height: 90px;

    .item {
      width: 155px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #fefefe;
      margin-bottom: 3px;
      display: flex;

      .i {
        flex: 0.5;
      }
      .name {
        flex: 2;
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .number {
        flex: 1;
      }
      .size {
        flex: 0.5;
      }
    }
  }
}
</style>