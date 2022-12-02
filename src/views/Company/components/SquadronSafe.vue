<template>
    <div style="width: 100%">
      <div class="table-head">
        <table>
          <!-- 表头 -->
          <thead>
            <tr>
              <th>巡检部门</th>
              <th>巡检次数(本年)</th>
              <th>巡检次数(往年)</th>
              <th>比例</th>
            </tr>
          </thead>
          <tbody>
            <tr
              :class="{ active: index % 2 === 0 }"
              v-for="(item, index) in arr"
              :key="index"
            >
              <td :title="item.name">{{ item.name }}</td>
              <td :title="item.num1">{{ item.num1 }}</td>
              <td :title="item.num2">{{ item.num2 }}</td>
              <td :title="item.num3">{{ item.num3 }}</td>
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
            name: "柯城大队",
            num1: "45",
            num2: "25",
            num3: "-40%",
          }
         
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
      height: 220px;
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
      padding: 12px 12px 12px 12px;
      width: 100%;
      table-layout: fixed; /**表格列的宽度由表格宽度决定，不由内容决定*/
      text-align: center;
    }
  
    thead th,
    tbody td {
      font-size: 12px;
      /*设置表格文字在一行显示*/
  
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用*/
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