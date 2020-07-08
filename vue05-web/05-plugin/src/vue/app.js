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
