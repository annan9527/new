<template>
  <div class="shui">
    <div class="text">恒通百货</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shui {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  background: transparent;
  border-radius: 50%;
  box-shadow: inset 10px 20px 30px rgba(255, 255, 255, 0.5),
    10px 10px 20px rgba(255, 255, 255, 0.3),
    inset -10px -10px 15px rgba(255, 255, 255, 0.8);
  // animation: move 8s linear infinite alternate;
  position: relative;
  .text {
    position: absolute;
    top: 30px;
    left: 40px;
  }
}

.shui::after {
  content: "";
  position: absolute;
  width: 20%;
  height:  20%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  left: 60%;
  top: 70%;
}
.shui::before {
  content: "";
  position: absolute;
  width: 10%;
  height: 10%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  left: 70%;
  top: 55%;
}
// @keyframes move {
//   25% {
//     border-radius: 41% 59% 70% 30% / 41% 59% 70% 30%;
//   }
//   50% {
//     border-radius: 41% 59% 77% 23% / 41% 59% 77% 23%;
//   }
//   75% {
//     border-radius: 41% 59% 21% 79% / 41% 59% 21% 79%;
//   }
//   100% {
//     border-radius: 41% 59% 70% 30% / 41% 59% 70% 30%;
//   }

</style>