function Player(name, teamColor){
		this.enemies = []; //敌人
		this.partners = []; //队友
		this.name = name;
		this.teamColor = teamColor;
		this.state = 'live';
}
Player.prototype.win = function() {
	//kill all
	console.log(`${this.name} win`);
}
Player.prototype.loose = function() {
	console.log(`${this.name} loose`);
}
Player.prototype.dei = function() {
	console.log(`${this.name} dei`);
	this.state = 'dei';
	let all_dead = true;//都死了
	for (var i =0,partners; partner = this.partners[i++];){
		if (partner.state === 'live') {
			all_dead = false;
			break;
		}
	}
	if (all_dead){
		this.loose();
		// this.loose();
		for (var i=0, partner; partner = this.partners[i++];){
			partner.loose();
		}
		for (var i = 0, enemy; enemy = this.enemies[i++];){
			enemy.win();
		}
	}
}
//组队 生成玩家， 工厂类来负责 
var players = [];
var PlayerFactory = function(name, teamColor) {
	var newPlayer =new Player(name, teamColor);
	for (var i =0, player; player=players[i++];){
		if(player.teamColor == newPlayer.teamColor) {
			player.partners.push(newPlayer);
			newPlayer.partners.push(player);
		}else {
			player.enemies.push(newPlayer);
			newPlayer.enemies.push(player);
		}
	}
	players.push(newPlayer);
	return newPlayer;
}
var Player1 = PlayerFactory('皮蛋', 'red');
var Player2 = PlayerFactory('小乖', 'red');
var Player3 = PlayerFactory('宝宝', 'red');
var Player4 = PlayerFactory('小强', 'red');
//队友是谁？ 敌人是谁？ 交给工厂去做
var Player5 = PlayerFactory('黑龙', 'blue');
var Player6 = PlayerFactory('小明', 'blue');
var Player7 = PlayerFactory('cc', 'blue');
var Player8 = PlayerFactory('小小洋', 'blue');
console.log(Player1.partners, Player1.enemies);
Player1.dei();
Player2.dei();
Player3.dei();
Player4.dei();


