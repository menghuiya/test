<template>
  <div class="home">
    <table border="1">
      <thead>
        <tr>
          <th>学号</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>
            <router-link :to="'/about/' + item.num">{{
              item.name
            }}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss">
table {
  width: 500px;
  margin: auto;
}
table tr {
  height: 50px;
}
</style>
<script>
export default {
  data() {
    return {
      list: [
        {
          num: '1001',
          name: 'zhangsan',
        },
        {
          num: '1002',
          name: 'lisi',
        },
        {
          num: '1001',
          name: 'wangwu',
        },
      ],
    };
  },
};
</script>
