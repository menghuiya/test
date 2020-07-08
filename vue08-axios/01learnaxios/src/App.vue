<template>
  <div id="app">
    <h2>{{ result }}</h2>
    <hr />
    <hello-world></hello-world>
    <hr />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  data() {
    return {
      result: "hhhh"
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style></style>
