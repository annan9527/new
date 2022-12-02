<template>
  <dv-scroll-board :config="config" style="width: 100%; height: 100%" />
</template>
          
          <script>
export default {
  data() {
    return {
      config: {
        header: ["地区", "重点工作", "业务工作", "队伍管理", "总分"],
        data: [
          ["柯城", "28.5", "40", "11.4", "79.9"],
          ["衢江", "28.5", "37.5", "13.35", "79.35"],
          ["集聚", "26", "38", "9.3", "73.3"],
        ],
        rowNum: "3",

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
</style>
          
    
  