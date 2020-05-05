new Vue ({
	el: '#first-vue-app',
	data: {
		age: 20,
		A: 0,
		B: 0,
	},
	methods: {
		// addA:function(){
		// 	console.log('addA');
		// 	return this.age + this.A;
		// },
		// addB:function() {
		// 	console.log('addB');
		// 	return this.age + this.B;
		// }
	},
	computed: {
		addA:function(){
			console.log('addA');
			return this.age + this.A;
		},
		addB:function() {
			console.log('addB');
			return this.age + this.B;
		}
	}
})
