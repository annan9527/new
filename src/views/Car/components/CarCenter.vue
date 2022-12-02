<template>
  <div class="boxs">
    <div class="item1">
      <div class="img">
        <div class="num">67<span style="font-size: 18px"> 次</span></div>
        <div class="name">
          <div>范石忠</div>
          <div class="top">TOP1</div>
        </div>
      </div>
    </div>
    <div class="item2">
      <div class="img">
        <div class="num">53<span style="font-size: 18px"> 次</span></div>
        <div class="name">
          <div>汪建华</div>
          <div class="top">TOP3</div>
        </div>
      </div>
    </div>
    <div class="item3">
      <div class="img">
        <div class="num">45<span style="font-size: 18px"> 次</span></div>
        <div class="name">
          <div>徐新义</div>
          <div class="top">TOP4</div>
        </div>
      </div>
    </div>
    <div class="item4">
      <div class="img">
        <div class="num">39<span style="font-size: 18px"> 次</span></div>
        <div class="name">
          <div>叶友婷</div>
          <div class="top">TOP2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.boxs {
  width: 100%;
  height: 100%;
  position: relative;
  
  .item1 {
    position: absolute;
    width: 124px;
    height: 149px;
    top: 20px;
    left:-40px;
  }
  .item2 {
    position: absolute;
    width: 124px;
    height: 149px;
    top: 380px;
    left: -20px;
  }
  .item3 {
    position: absolute;
    width: 124px;
    height: 149px;
    top: 400px;
    left: 520px;
  }
  .item4 {
    position: absolute;
    width: 124px;
    height: 149px;
    top: 20px;
    left: 520px;
  }
  .img {
    width: 124px;
    height: 125px;
    background-image: url(../../../assets/车切图/圆.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .num {
      font-size: 32px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #7fc8ff;
    }
    .name {
      width: 60px;
      height: 40px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #dbdbdb;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .top {
        color: #ffdb4c;
      }
    }
  }
  .text {
    width: 124px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>