<template>
  <div class="ad">
    <img :src="src" alt="" />
  </div>
</template>

<script>
export default {
  props: ['src'],
};
</script>

<style scoped>
.ad {
  width: 33%;
  height: 100px;
  display: inline-block;
}
.ad img {
  width: 100%;
  height: 100%;
}
</style>
