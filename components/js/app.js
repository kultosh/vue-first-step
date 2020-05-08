// var data ={
//   name: 'Disney',
// }

Vue.component('greeting',{
  template: '<p>This is the component grettings from {{name}} <button v-on:click="changeName">Change</button></p>',
  data:function(){
    // return data;
    return {
      name: 'Marvel',
    }
  },
  methods: {
    changeName:function(){
      this.name = "DC";
    }
  }
});

new Vue({
  el: "#vue-instance-first",
});

new Vue({
  el: "#vue-instance-second",
})
