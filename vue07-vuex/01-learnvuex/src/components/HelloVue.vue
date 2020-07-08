<template>
  <div>
    <h2>{{ $store.state.count }}</h2>
    <!-- <h2>{{ $store.state.moduleA.count }}</h2> -->
    <h2>{{ $store.getters.powerCounter }}</h2>

    <p>{{ $store.getters.more20stu }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
