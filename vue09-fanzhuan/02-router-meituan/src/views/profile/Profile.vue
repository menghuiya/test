<template>
  <div>
    <head-top></head-top>
    <head-msg></head-msg>
  </div>
</template>

<script>
import HeadTop from '../../components/profile/HeadTop';
import HeadMsg from '../../components/profile/HeadMsg';
export default {
  created() {
    window.document.title = '档案';
  },
  components: {
    HeadTop,
    HeadMsg,
  },
};
</script>

<style></style>
