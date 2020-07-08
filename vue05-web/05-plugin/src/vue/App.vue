<template>
  <div>
    {{ message }}
    <button @click="clickBtn">梦回</button>
    <h2>{{ name }}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn';
export default {
  name: 'App',
  components: {
    Cpn
  },
  data() {
    return {
      message: '你好啊',
      name: '梦回'
    };
  },
  methods: {
    clickBtn() {
      alert('menghui');
    }
  }
};
</script>

<style>
button {
  width: 200px;
  height: 60px;
  background: green;
}
</style>
