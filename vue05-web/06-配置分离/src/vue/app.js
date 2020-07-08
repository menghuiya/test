export default {
  template: `
    <div>
      {{message}}
      <button @click="clickBtn">按钮</button>
      <h2>{{name}}</h2>
    </div>
    `,
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
