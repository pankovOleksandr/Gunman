// require(timer.js)

// Edit by Pankov A.

(function(){

	var canFire;


	var Game =function() {
		this.state = ""
	}

	Game.prototype.init = function(stage) {
		var cowboy = this.cowboy = new Enemy(2000);	
		game.state = stage;		
	}


	$(document).on('click', function(event) {
    	if ( !$(event.target).hasClass('gunman') ) {
      		console.log('Looser');
      		return;
    	}
    	if (!canFire) {
      		console.log('YOU ARE very FAST');
      		// game.state="reset";
      		return;
    	};

    	clearInterval(timer.inervalId);
    	canFire = false;
    	game.state = "win";
    	console.log('USER KILL ENEMY');
  	});

	$(document).on('click', '#start', function(event) {
    	game.init("start");  
  	});

	var game = new Game();

  	/**
	*@object that observe Object game
	*@
	*/
	Object.observe(game, function(changes){
		var game = changes[0].object;
		changes.forEach(function(change) {  
  			if (change.name == "state")
	  			switch(change.object.state){
	  				case "start":
	  					game.cowboy.changeState('going');		
						game.cowboy.standing = setTimeout(function() { 
							game.cowboy.changeState('standing');
							setTimeout(function() {
								game.state = "battle";
								}, game.cowboy.standingTime); 
						    }, game.cowboy.walkingTime);
						$('#start').hide();
						break;
	  				case "battle":
						canFire = true;
						//@func lets cowboy get the gun to shoot
						game.cowboy.shooting = setTimeout(function() { 
							if(!canFire) return;
							game.cowboy.changeState('shooting');
							}, game.cowboy.shootDelay-500);
						timer.init(game.cowboy.shootDelay);
						setTimeout(function(){
							if (!canFire) return;
							game.state = "loose";}, game.cowboy.shootDelay);
						break;
					case "win":
						game.cowboy.changeState("dead");
						
						break;
					case "loose":
						canFire = false;
						console.log('in loose state');
						game.cowboy.changeState("winning");
						
						break;
					default:
						statements_def
						break;
				}
		});
	});


})();

