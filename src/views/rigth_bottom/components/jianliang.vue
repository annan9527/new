<template>
  <div class="box" style="width: 100%; height: 100%">
    <div class="title">减量控大</div>
    <dv-scroll-board :config="config" style="width: 100%; height: 95%" />
  </div>
</template>
          
          <script>
export default {
  data() {
    return {
      config: {
        header: ["驾校名称", "减量控大", "总分"],
        data: [
          ["柯城大队", "25.43", "99"],
          ["衢江大队", "25.91", "98"],
          ["集聚区大队", "25.43", "97"],
          ["龙游大队", "4562", "94"],
          ["江山大队", "2268", "90"],
          ["常山大队", "1310", "89"],
          ["开化大队", "3100", "67"],
        ],
        rowNum: "7",
        index: true,
        indexHeader: "排名",
        index: true,
        // columnWidth: [100],
        align: ["center"],
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
  margin-left: 10px;
  color: #ffdb4c;
}

</style>
          
    
  