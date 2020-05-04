new Vue ({
	el: '#first-vue-app',
	data: {
		firstname: 'Santosh',
		lastname: 'Tamang',
		job: 'Developer',
	},
	methods: {
		greet:function(time){
			return 'Good ' + time + ' ' + this.firstname;
		}
	}
})
