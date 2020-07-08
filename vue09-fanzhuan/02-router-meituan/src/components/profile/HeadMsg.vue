<template>
  <div>
    <div class="msg">
      <div class="block">
        <el-avatar :size="62" :src="circleUrl"></el-avatar>
      </div>
      <div class="usermsg">
        <div>我是用户昵称</div>
        <div>用户名:xxxxxxx</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        'https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png',
      sizeList: ['large', 'medium', 'small'],
    };
  },
};
</script>

<style scoped>
.msg {
  height: 150px;
  box-shadow: 0 2px 4px rgba(228, 57, 60, 0.4);
  position: relative;
  overflow: hidden;
  border-radius: 0 0 300px 300px/0 0 20px 20px;
  background: linear-gradient(90deg, #eb3c3c, #ff7459);
  box-sizing: border-box;
  min-height: 110px;
  display: flex;
}
.block {
  line-height: 170px;
  margin-left: 30px;
}
.usermsg {
  margin-top: 35px;
  margin-left: 20px;
}
</style>
