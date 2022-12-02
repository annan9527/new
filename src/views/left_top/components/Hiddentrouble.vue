<template>
  <div class="box">
    <!-- 所属企业车辆统计 -->
    <div class="Enterprise_car">
      <EnterpriseCar></EnterpriseCar>
    </div>
    <!-- 企业违法 -->
    <div class="Enterprise_bad">
       <EnterpriseBad></EnterpriseBad>
    </div>
  </div>
</template>

<script>
import EnterpriseCar from './EnterpriseCar.vue';
import EnterpriseBad from './EnterpriseBad.vue';
export default { components: { EnterpriseCar, EnterpriseBad } };
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Enterprise_car {
    width: 490px;
    height: 267px;
    background: linear-gradient(0deg, #001c4c 0%, rgba(0, 0, 0, 0.1) 100%);
    border-radius: 5px 5px 0px 0px;
  }
  .Enterprise_bad {
    width: 490px;
    height: 267px;
    background: linear-gradient(0deg, #001c4c 0%, rgba(0, 0, 0, 0.1) 100%);
    border-radius: 5px 5px 0px 0px;
  }
}
</style>