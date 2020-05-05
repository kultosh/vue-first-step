new Vue ({
	el: '#first-vue-app',
	data: {
		age: 18,
	},
	methods: {
		add:function(inc){
			this.age += inc;
		},
		subtract:function(dec){
			this.age -= dec;
		},
		click:function(){
			alert('Are You Sure?')
		}
	}
})
