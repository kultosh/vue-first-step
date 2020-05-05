new Vue ({
	el: '#first-vue-app',
	data: {
		firstname: 'Santosh',
		lastname: 'Tamang',
		job: 'Developer',
		website: 'https://vuejs.org/',
		websiteTag: '<a href="https://vuejs.org/">HTML Tag Data Binding</a>'
	},
	methods: {
		greet:function(time){
			return 'Good ' + time + ' ' + this.firstname;
		}
	}
})
