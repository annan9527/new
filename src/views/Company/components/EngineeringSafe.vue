<template>
  <div class="box">
    <div class="top">
      <select v-model="goodsId">
        <option
          v-for="(item, index) in kindList"
          v-bind:value="item.id"
          v-text="item.name"
          :key="index"
        ></option>
      </select>
    </div>
    <div class="bottom">
      <!-- 工程运输企业圆盘 -->
      <div class="engineeringpie">
        <EngineeringpiePie></EngineeringpiePie>
      </div>
      <!-- 工程运输企业违法列表 -->
      <div class="engineeringlist">
        <EngineeringList></EngineeringList>
      </div>
    </div>
  </div>
</template>

<script>
import EngineeringList from './EngineeringList.vue';
import EngineeringpiePie from "./EngineeringpiePie.vue";
export default {
  data(){
    return {
      goodsId: "1",
      kindList: [
        { name: "渣土车", id: 1 },
        { name: "工程运输车", id: 2 },
        
      ],
    }
  },
  components: { EngineeringpiePie, EngineeringList },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .top {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .bottom {
    width: 100%;
    height: 100%;
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;

    .engineeringpie {
      display: flex;
      flex: 1;
      width: 100%;
      height: 100%;
      
    }
    .engineeringlist {
      display: flex;
      flex: 1;
      width: 100%;
      height: 100%;
      
    }
  }
}
</style>