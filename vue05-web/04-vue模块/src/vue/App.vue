<template>
  <div>
    {{ message }}
    <button @click="clickBtn">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn';
export default {
  name: 'App',
  components: {
    Cpn,
  },
  data() {
    return {
      message: '梦回',
      name: '梦回',
    };
  },
  methods: {
    clickBtn() {
      alert('menghui');
    },
  },
};
</script>

<style>
button {
  width: 200px;
  height: 60px;
  background: green;
}
</style>
