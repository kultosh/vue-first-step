new Vue ({
	el: '#first-vue-app',
	data: {
		age: 18,
	},
	methods: {
		add:function(){
			this.age++;
		},
		subtract:function(){
			this.age--;
		},
	}
})
