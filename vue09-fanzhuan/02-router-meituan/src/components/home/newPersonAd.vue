<template>
  <img :src="src" alt="" />
</template>

<script>
export default {
  props: ['src'],
};
</script>

<style scoped>
img {
  width: 50%;
  height: 100%;
  border-radius: 10px;
}
</style>
