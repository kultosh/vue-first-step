new Vue ({
	el: '#first-vue-app',
	data: {
		age: 18,
	},
	methods: {
		logName:function(){
			console.log("You Entered the name!")
		},
		logJob:function(){
			console.log("You Entered the job");
		}
	}
})
