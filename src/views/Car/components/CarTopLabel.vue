<template>
  <div class="box">
    <div class="item1">
      <!-- 图片标签 -->
      <div class="label_img">
        <img src="../../../assets/车切图/机动车.png" alt="" />
      </div>
      <!-- 数字标签 -->
      <div class="label_text">
        <div class="top_text">机动车保有量</div>
        <div class="top_num">718409</div>
      </div>
    </div>
    <div class="item2">
      <!-- 图片标签 -->
      <div class="label_img">
        <img src="../../../assets/车切图/新能源.png" alt="" />
      </div>
      <!-- 数字标签 -->
      <div class="label_text">
        <div class="top_text">新能源保有量</div>
        <div class="top_num">14519</div>
      </div>
    </div>
    <div class="item3">
      <!-- 图片标签 -->
      <div class="label_img">
        <img src="../../../assets/车切图/摩托车.png" alt="" />
      </div>
      <!-- 数字标签 -->
      <div class="label_text">
        <div class="top_text">摩托车保有量</div>
        <div class="top_num">143968</div>
      </div>
    </div>
    <div class="item4">
      <!-- 图片标签 -->
      <div class="label_img">
        <img src="../../../assets/车切图/电动自行车.png" alt="" />
      </div>
      <!-- 数字标签 -->
      <div class="label_text">
        <div class="top_text">电动自行车保有量</div>
        <div class="top_num">443511</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 1400px;
  height: 81px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  .item1 {
    width: 287px;
    height: 81px;
    display: flex;
    align-items: center;
    .label_img {
      width: 81px;
      height: 81px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .label_text {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: left;
      padding-left: 10px;
      .top_text {
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #00fff9;
      }
      .top_num {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  .item2 {
    width: 287px;
    height: 81px;
    display: flex;
    align-items: center;
    .label_img {
      width: 81px;
      height: 81px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .label_text {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: left;
      padding-left: 10px;
      .top_text {
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #00fff9;
      }
      .top_num {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  .item3 {
    width: 287px;
    height: 81px;
    display: flex;
    align-items: center;
    .label_img {
      width: 81px;
      height: 81px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .label_text {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: left;
      padding-left: 10px;
      .top_text {
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #00fff9;
      }
      .top_num {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  .item4 {
    width: 357px;
    height: 81px;
    display: flex;
    align-items: center;
    .label_img {
      width: 81px;
      height: 81px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .label_text {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: left;
      padding-left: 10px;
      .top_text {
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #00fff9;
      }
      .top_num {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}
</style>