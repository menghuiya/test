<template>
  <div>
    <cart-top></cart-top>
  </div>
</template>

<script>
import CartTop from '../../components/cart/CartTop';
export default {
  created() {
    window.document.title = '购物车';
  },
  components: {
    CartTop,
  },
};
</script>

<style></style>
