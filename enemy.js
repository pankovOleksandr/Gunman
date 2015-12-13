
    var Enemy = function(reactionTime) {
        this.$gunman = $('<div></div>').addClass('gunman');
        this.walkingTime = reactionTime * 1.2;
        this.shootDelay = reactionTime;
        this.standingTime = 0.2 * reactionTime;
        this.$result = $('<div></div>').addClass("result_msg");
    }

    Enemy.prototype.changeState = function(newState) {

        this.state = newState;
        
        switch(this.state){
            case 'going':
                this.$gunman.appendTo('.wrapper').addClass('gunman_go');
                this.$gunman.animate({right : "50%"},  this.walkingTime, "linear");
                break;
            case 'standing':
                console.log('in standing');
                this.$gunman.removeClass('gunman_go').addClass("gunman_stand");
                var $alert = $('<div></div>');
                $alert.text("FIRE!!!").addClass("gunman_alert");
                setTimeout(function() {
                    $(".wrapper").append($alert);
                }, this.standingTime);                
                setTimeout(function() {
                    $('.gunman_alert').hide();
                }, this.shootDelay /2 );                
                break;
            case 'shooting':
                this.$gunman.removeClass("gunman_stand")
                    .addClass("gunman_shooting");                      
                break;
            case 'winning':
                this.$gunman.removeClass("gunman_stand")
                    .addClass("gunman_shooting"); 
                setTimeout(function() {
                    $(".gunman").hide();
                    }, 5000);                    
                this.$result.text("YOU LOOSE!")
                            .appendTo(".wrapper");           
                break;
            case 'dead':
                $('.gunman_alert').hide();
                this.$gunman.removeClass("gunman_shooting")
                            .addClass("gunman_dead");
                setTimeout(function() {
                    $(".gunman").hide();
                    }, 1000)
                this.$result.text("Congratulations!!! You win!!!")
                            .appendTo(".wrapper");

                                 
                break;
            default:
                statements_def
                break;
        }

    }
         









