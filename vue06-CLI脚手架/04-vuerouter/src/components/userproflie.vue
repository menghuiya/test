<template>
  <div>
    <h3>我是{{ $route.query.name }}信息页面</h3>
    <hr />
    <p>{{ $route.query.name }}</p>
    <p>{{ $route.query.age }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
