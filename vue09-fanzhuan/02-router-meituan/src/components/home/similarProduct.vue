<template>
  <div>
    <img :src="src" alt="" />
    <span>{{ title }}</span>
    <p>$ {{ price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    src: String,
    price: Number,
  },
};
</script>

<style scoped>
div {
  width: 44%;
  display: inline-block;
  margin-right: 2%;
  height: 285px;
  background-color: #fff;
  padding: 2%;
}
span {
  display: block;
  overflow: hidden;
  height: 31px;
  line-height: 15px;
  text-overflow: ellipsis;
  font-size: 13px;
}
img {
  width: 100%;
  height: 194;
}
p {
  color: red;
  margin: 0;
  margin-top: 3px;
}
</style>
