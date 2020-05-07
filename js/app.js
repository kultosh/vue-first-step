new Vue ({
	el: '#first-vue-app',
	data: {
		health: 100,
		ended: false,
		loose: false,
	},
	methods: {
		punch:function(){
			 this.health -= 10;
			 let snd = new Audio("./sound/Sharp Punch-SoundBible.com-1947392621.mp3");
			 snd.play();
			 this.cheCon();
		},
		kick:function(){
			 this.health -= 5;
			 let snd = new Audio("./sound/Kick-SoundBible.com-1331196005.mp3");
			 snd.play();
			 this.cheCon();
		},
		jab:function(){
			 this.health -= 15;
			 let snd = new Audio("./sound/Jab-SoundBible.com-1806727891.wav");
			 snd.play();
			 this.cheCon();
		},
		restart:function(){
			 this.health = 100;
			 this.ended = false;
			 this.loose =false;
			 let snd = new Audio("./sound/Boxing Bell Start Round-SoundBible.com-1691615580.mp3");
			 snd.play();
		},
		cheCon:function(){
			if(this.health == 0){
				this.ended = true;
				let snd = new Audio("./sound/Cheering 3-SoundBible.com-1680253418.mp3");
				snd.play();
			};
			if(this.health < 0){
				this.loose = true;
				let snd = new Audio("./sound/Crowd Boo-SoundBible.com-929146967.wav");
				snd.play();
			}
		}
	},
	computed: {
		stat:function(){
			if(this.ended==true){
				return "You Win!";
			}
			else if (this.loose==true) {
				return "You Loose!";
			}
		}
	}
})
