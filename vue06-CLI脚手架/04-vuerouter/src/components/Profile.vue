<template>
  <div>
    <h2>我是Profile组件</h2>
    <h3>(｡･∀･)ﾉﾞ嗨</h3>
    <p>{{ $route.query.name }}</p>
    <p>{{ $route.query.age }}</p>
    <p>{{ $route.query.height }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("profle has created");
  }
};
</script>

<style></style>
