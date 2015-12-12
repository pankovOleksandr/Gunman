
 	"use strict"

 	var timer = {
 	  init: init,
	  initialTime : null,
	  currentTime : (new Date()).valueOf(),
	  inervalId   : null,
	};


	function init(battleTime) {
		timer.initialTime = (new Date()).valueOf();
	  	timer.inervalId = setInterval(function(){
  		  timer.currentTime = (new Date()).valueOf();
	 	}, 100);    
    
	    setTimeout(function(){
	      clearInterval(timer.inervalId);	      
	    }, battleTime);
	}

    Object.observe(timer, function(changes){    	
    	if (changes[0].name == "initialTime") return;
    	if (changes[0].name == "timerIsFinished") {
    		game.state = "loose";
    		console.log('timer observe', this);
    	}
  		var interval = new MyInterval(timer.currentTime - timer.initialTime);
  		$('.score_gunman span, .score_user span').text(
  			interval.s + ' : ' + interval.ms);     
	});

	function MyInterval( interval ) {
	  var ret = {};
	  ret.interval = interval;
	  ret.s = Math.floor(interval/1000);
	  ret.ms = (function(){
	    var result = (ret.s) ? (interval-1000*ret.s)/10 : (interval/10);
	    return Math.floor(result);
	  })();	  
	  return ret;
	}

   
 

