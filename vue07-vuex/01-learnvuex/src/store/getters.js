export default {
  powerCounter(state) {
    return state.count * state.count;
  },
  more20stu(state) {
    return state.students.filter(s => s.age > 21);
  },
  more20stuLength(state, getters) {
    return getters.more20stu.length;
  },
  moreAgestu(state) {
    return age => {
      return state.students.filter(s => s.age >= age);
    };
  }
};
