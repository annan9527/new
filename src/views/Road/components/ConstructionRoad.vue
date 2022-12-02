<template>
  <div style="width: 100%">
    <div class="table-head">
      <table>
        <!-- 表头 -->
        <thead>
          <tr>
            <th>施工路段</th>
            <th>施工单位</th>
            <th>时段(日期)</th>
            <th>剩余期限</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="{ active: index % 2 === 0 }"
            v-for="(item, index) in arr"
            :key="index"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.num1 }}</td>
            <td>{{ item.num2 }}</td>
            <td>{{ item.num3 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      change: true,
      arr: [
        {
          name: "白云北大道南",
          num1: "衢州嘉洲工程",
          num2: "2021.7-2022.9",
          num3: "2",
        },
        {
          name: "白云北大道南",
          num1: "衢州嘉洲工程",
          num2: "2021.7-2022.9",
          num3: "2",
        },
        {
          name: "白云北大道南",
          num1: "衢州嘉洲工程",
          num2: "2021.7-2022.9",
          num3: "6",
        },
        {
          name: "白云北大道南",
          num1: "衢州嘉洲工程",
          num2: "2021.7-2022.9",
          num3: "8",
        },
        {
          name: "白云北大道南",
          num1: "衢州嘉洲工程",
          num2: "2021.7-2022.9",
          num3: "8",
        },
        {
          name: "白云北大道南",
          num1: "衢州嘉洲工程",
          num2: "2021.7-2022.9",
          num3: "8",
        },
        {
          name: "白云北大道南",
          num1: "衢州嘉洲工程",
          num2: "2021.7-2022.9",
          num3: "12",
        },
        {
          name: "白云北大道南",
          num1: "衢州嘉洲工程",
          num2: "2021.7-2022.9",
          num3: "15",
        },
      ],
    };
  },
};
</script>
    
    <style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  table tbody {
    display: block;
    height: 200px;
    overflow-y: scroll;
  }
  .active {
    background-color: rgba(0, 36, 61, 0.7);
  }
  .active1 {
    color: #00fff9;
    background-color: rgba($color: #00218f, $alpha: 0.5);
  }
  table thead,
  table tbody tr {
    display: table;
    padding: 8px 8px 8px 8px;
    width: 100%;
    table-layout: fixed; /**表格列的宽度由表格宽度决定，不由内容决定*/
    text-align: center;
  }

  thead th,
  tbody td {
    width: 50px;
  }

  table thead {
    width: calc(100% - 1em); /*表头与表格垂直对齐*/
  }
}
//  滚动条优化
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(21, 85, 131, 0.7);
  border-radius: 6px;
  display: none;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-color: rgba(28, 39, 47, 0.7);
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #717293;
}
</style>