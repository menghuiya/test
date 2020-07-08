<template>
  <div>
    <h2>我是cpn标题</h2>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data() {
    return {
      name: 'CPN组件的name'
    };
  }
};
</script>

<style></style>
