<template>
  <div class="header">
    <el-input placeholder="请输入内容" prefix-icon="el-icon-search"> </el-input>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #fc5b27;
  width: 100%;
  height: 40px;
  padding: 5px;
  padding-bottom: 20px;
  background-position: center;
  margin: auto;
}
.el-input {
  width: 95%;
  display: block;
  margin: 5px;
}
</style>

<style>
.el-input__inner {
  border-radius: 15px;
}
</style>
