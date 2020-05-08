 var one = new Vue ({
	el: '#vue-instance-first',
	data: {
    title: "Instance One",
	},
	methods: {

	},
	computed: {
    greet:function(){
      return "Good Day From " + this.title + "!!";
    }
	}
});

var two = new Vue ({
 el: '#vue-instance-second',
 data: {
   title: "Instance Two",
 },
 methods: {
   changeTitle:function(){
    return this.title = one.title;
   }
 },
 computed: {
   greet:function(){
     return "Good Day From " + this.title + "!!";
   },
 }
});

// two.title ="changed form outside";
