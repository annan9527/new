<template>
  <div class="box">
    <!-- 顶部按钮 -->
    <div class="btn1">
      <div class="btn_item1" :class="{ active1: num === 1 }" @click="btn(1)">
        违法未处理
      </div>
      <div class="btn_item2" @click="btn(2)" :class="{ active1: num === 2 }">
        拘留未执行
      </div>
    </div>
    <div class="btn2">
      <div class="btn2_item1" :class="{ active2: nu === 1 }" @click="btn2(1)">一般程序</div>
      <div class="btn2_item2" :class="{ active2: nu === 2 }" @click="btn2(2)">罚款未缴纳</div>
    </div>
    <div class="table">
      <table id="customers">
        <!-- 表头 -->
        <thead>
          <tr>
            <th>地区</th>
            <th>未缴纳</th>
            <th>新增</th>
            <th>合减</th>
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
      arr: [
        { name: "柯城", num1: "1", num2: "5", num3: "10" },
        { name: "衢江", num1: "1", num2: "5", num3: "10" },
        { name: "龙游", num1: "1", num2: "5", num3: "10" },
        { name: "开化", num1: "1", num2: "5", num3: "10" },
      ],
      num: 1,
      nu:1
    };
  },
  methods: {
    btn(val) {
      this.num = val;
    },
    btn2(val) {
      this.nu = val;
    },
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
    .btn_item1 {
      border-radius: 10px 0 0 0;
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn_item2 {
      border-radius: 0 10px 0 0;
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
  .active {
    color: #00fff9;
    background-color: rgba(21, 85, 131, 0.7);
  }
  .active1 {
    color: #00fff9;
    background-color: rgba($color: #00218f, $alpha: 0.5);
  }
  .active2 {
    color: #00fff9;
    border-bottom: 3px solid rgba($color: #00218f, $alpha: 0.5);
  }
  .btn2 {
    cursor: pointer;
    width: 480px;
    height: 30px;
    background-color: rgba($color: #00218f, $alpha: 0.1);
    position: absolute;
    top: 30px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .btn2_item1 {
      border-radius: 10px 0 0 0;
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn2_item2 {
      border-radius: 0 10px 0 0;
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
  .table {
    position: absolute;
    width: 480px;
    height: 120px;
    top: 70px;
    left: 0px;
    // 滚动条
    overflow: auto;
    #customers {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0px 1px;
    }
    #customers td,
    #customers th {
      text-align: center;
      font-size: 16px;
      color: #ffffff;
      padding: 3px 7px 2px 7px;
    }

    #customers th {
      font-size: 16px;
      text-align: center;
      padding-top: 5px;
      padding-bottom: 4px;
      color: #ffffff;
    }
  }
}
//  滚动条优化
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: rgba(21, 85, 131, 0.7);
  border-radius: 6px;
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