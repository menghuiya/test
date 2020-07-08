<template>
  <div>
    <h2>班级信息</h2>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    console.log('您离开了班级信息页面');
    next();
  },
};
</script>

<style scoped></style>
