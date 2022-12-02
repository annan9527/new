<template>
  <div class="boxs" style="width: 100%; height: 100%">
    <div class="title"><h3>外地车辆申请次数排名</h3></div>
    <dv-scroll-board :config="config" style="width: 100%; height: 83%" />
  </div>
</template>
        
        <script>
export default {
  data() {
    return {
      config: {
        header: ["车牌", "车型", "次数"],
        data: [
          ["浙H1223", "货车", "12"],
          ["浙H1223", "货车", "12"],
          ["浙H1223", "货车", "12"],
          ["浙H1223", "货车", "12"],
          ["浙H1223", "货车", "12"],
        ],
        rowNum: "5",
        columnWidth: [120],
        align: ["left"],
        waitTime: "3000",
        // carousel: "page",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        headerBGC: "transparent",
      },
    };
  },
};
</script>
        <style lang="scss" scoped>
.title {
  margin-top: 10px;
  padding-left: 20px;
  margin-bottom: 10px;
}
</style>
        
  
