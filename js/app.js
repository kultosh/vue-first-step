new Vue ({
	el: '#first-vue-app',
	data: {
		health: 100,
		brust: false,
	},
	methods: {
		punch:function(){
			 this.health -= 10;
		},
		restart:function(){
			 this.health = 100;
		},
	},
	computed: {
		bagBlast:function(){
		if(this.health == 0){
			return {bagblast: this.brust = true};
		}
		}
	}
})
