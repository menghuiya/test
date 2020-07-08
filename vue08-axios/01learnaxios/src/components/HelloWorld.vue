<template>
  <h2>{{ category }}</h2>
</template>

<script>
import { request } from "../network/request";
export default {
  name: "HelloWorld",
  data() {
    return {
      category: ""
    };
  },
  created() {
    request({
      url: "http://123.207.32.32:8000/category"
    })
      .then(res => {
        // console.log(res);
        this.category = res.data;
      })
      .catch(err => {
        this.category = err;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
