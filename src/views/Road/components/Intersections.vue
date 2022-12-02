<template>
  <div class="box">
    <!-- 顶部按钮 -->
    <div class="btn1">
      <div
        class="btn_item"
        :class="{ active1: num === index }"
        v-for="(item, index) in titlearr"
        :key="index"
        @click="num = index"
      >
        {{ item }}
      </div>
    </div>
    <div class="table">
      <div style="width: 100%">
        <div class="table-head">
          <table>
            <!-- 表头 -->
            <thead>
              <tr>
                <th>所属大队</th>
                <th>点位名称</th>
                <th>行人</th>
                <th>非机动车</th>
                <th>机动车</th>
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
                <td>{{ item.num4 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      titlearr: ["城市道路路口", "县(市、区)路口", "一类视频监控点"],
      num: 0,
      change: true,
      arr: [
        {
          name: "柯城",
          num1: "花园大道路口",
          num2: "95%",
          num3: "56%",
          num4: "78%",
        },
        {
          name: "衢江",
          num1: "花园大道路口",
          num2: "58%",
          num3: "59%",
          num4: "82%",
        },
        {
          name: "龙游",
          num1: "花园大道路口",
          num2: "59%",
          num3: "85%",
          num4: "48%",
        },
        {
          name: "开化",
          num1: "花园大道路口",
          num2: "65%",
          num3: "96%",
          num4: "59%",
        },
        {
          name: "常山",
          num1: "花园大道路口",
          num2: "78%",
          num3: "40%",
          num4: "68%",
        },
        {
          name: "江山",
          num1: "花园大道路口",
          num2: "83%",
          num3: "53%",
          num4: "75%",
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

  .btn1 {
    cursor: pointer;
    width: 480px;
    height: 30px;
    background-color: rgba($color: #00218f, $alpha: 0.1);
    position: absolute;
    border-radius: 10px 10px 0 0;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .btn_item {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .active {
    background-color: rgba(0, 36, 61, 0.7);
  }
  .active1 {
    color: #00fff9;
    background-color: rgba($color: #00218f, $alpha: 0.5);
  }

  .table {
    position: absolute;
    width: 480px;
    height: 120px;
    top: 40px;
    left: 0px;
    table tbody {
      display: block;
      height: 130px;
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
      padding: 5px 6px 5px 6px;
      width: 100%;
      table-layout: fixed; /**表格列的宽度由表格宽度决定，不由内容决定*/
      text-align: center;
    }

    thead th,
    tbody td {
      word-break: keep-all;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      width: 50px;
    }

    table thead {
      width: calc(100% - 1em); /*表头与表格垂直对齐*/
    }
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