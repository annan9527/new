<template>
  <div class="box" style="width: 100%; height: 100%">
    <div class="title">检测站异地车辆检测占比</div>
    <dv-scroll-board :config="config" style="width: 100%; height: 95%" />
  </div>
</template>
        
        <script>
export default {
  data() {
    return {
      config: {
        header: ["检测站", "异地车占比"],
        data: [
          ["浙江衢州安邦机动车检测有限公司", "26.30%"],
          ["衢州市车辆综合性能检测有限公司", "39.11%"],
          ["衢州市衢港机动车辆检测有限公司", "36.12%"],
          ["衢州市力乾汽车综合性能检测有限公司", "27.11%"],
          ["衢州市衢翔机动车辆检测有限公司", "10.90%"],
          ["衢江区星光机动车检测有限公司", "25.07%"],
          ["衢州宁泰机动车检测有限公司", "33.98%"],
          ["衢州宝泰机动车检测有限公司", "34.66%"],
          ["浙江衢州安邦机动车检测有限公司", "26.30%"],
          ["衢州市车辆综合性能检测有限公司", "39.11%"],
          ["衢州市衢港机动车辆检测有限公司", "36.12%"],
          ["衢州市力乾汽车综合性能检测有限公司", "27.11%"],
          ["衢州市衢翔机动车辆检测有限公司", "10.90%"],
          ["衢江区星光机动车检测有限公司", "25.07%"],
          ["衢州宁泰机动车检测有限公司", "33.98%"],
          ["衢州宝泰机动车检测有限公司", "34.66%"],
        ],
        rowNum: "8",
        columnWidth: [300],
        align: ["left"],
        waitTime: "3000",
        // carousel: "page",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        headerBGC: " transparent",
      },
    };
  },
};
</script>
        <style lang="scss" scoped>
.title {
  color: #ffdb4c;
}
</style>
        
  
