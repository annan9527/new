<template>
  <dv-scroll-board
    :config="config"
    style="width: 90%; height: 90%;margin: 0 20px;"
    
  />
</template>
    
    <script>
export default {
  data() {
    return {
      config: {
        
       
        header: ["类型", "位置", "时间"],
        data: [
          ["投诉", "351国道富家", "2022/09/17 14:22"],
          ["建议", "市政府新造大楼", "2022/09/17 12:01"],
          ["建议", "荷花街道", "2022/09/17 11:22"],
          ["建议", "三衢路路口", "2022/09/17 10:23"],
          ["投诉", "X233县道", "2022/09/17 9:22"],
          ["建议", "351国道", "2022/09/17 8:22"],
          ["建议", "大润发路口", "2022/09/17 6:22"],
          ["建议", "白云中大道", "2022/09/17 5:22"],
        ],
        headerHeight: "20",
        columnWidth: [80],
        align: ["center"],
        rowNum: "2",
        waitTime: "10000",
        carousel: "page",
        oddRowBGC: "transparent",
        evenRowBGC: " transparent",
        headerBGC: "#00BAFF",
      },
    };
  },
};
</script>
    <style lang="scss" scoped>
</style>