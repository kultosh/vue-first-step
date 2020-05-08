new Vue({
  el: "#vue-refs",
  data: {
    name: 'Iron Man',
  },
  methods: {
    readRefs:function(){
      // console.log(this.$refs.superhero.value);
      this.name = this.$refs.superhero.value;
      console.log(this.$refs.greet.innerHTML);
    }
  }
})
