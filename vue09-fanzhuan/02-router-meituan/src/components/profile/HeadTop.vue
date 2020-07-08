<template>
  <div class="head">
    <div class="return"><i class="el-icon-arrow-left"></i></div>
    <div class="my">我的档案</div>
    <div class="set">
      <i class=" el-icon-more-outline"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head {
  height: 47px;
  display: flex;
  font-size: 20px;
  background-color: #fff;
}
.head div {
  width: 50px;
  line-height: 47px;
}
.return {
  margin-left: 20px;
}
.my {
  flex: 1;
  text-align: center;
}
.set {
  text-align: right;
  margin-right: 20px;
}
</style>
