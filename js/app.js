new Vue ({
	el: '#first-vue-app',
	data: {
		age: 18,
		x: 0,
		y:0,
	},
	methods: {
		updateXY:function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		}
	}
})
