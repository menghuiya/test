<template>
  <div class="tab-bar-item" @click="itemClik">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      defualt: "#1296db"
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activestyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClik() {
      // this.isActive = !this.isActive;
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
