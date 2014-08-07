$(document).ready(function() {
  var view = new View()
  var model = new Hero()
  var controller = new Controller(view, model)
  controller.bindEvents()
})

function View() {
  this.character = '.character'
}

View.prototype = {
  getCharacter: function() {
    return $(this.character)
  }
}

function Hero() {}

Hero.prototype.jump = function() {

}

function Controller(view, model) {
  this.view = view
  this.model = model
}

Controller.prototype = {
  bindEvents: function(){

	$(document).keydown(function(){
			if (event.keyIdentifier == "Right"){
				console.log('Moving right!')
				var newPosition = $('.long_grass').position().left - 20
				$('.long_grass').css('left', newPosition)
			}
		})

		$(document).keydown(function(){
			var ground = $('.long_grass')
			var currentPosition = ground.position().left
			var maxRightPosition = -Math.abs($('.long_grass').width() - $('#game_view').width())
			if (event.keyIdentifier == "Right" && currentPosition > maxRightPosition){
					ground.css('left', currentPosition -20)
			} else if(event.keyIdentifier == "Left" && currentPosition < 0){
					ground.css('left', currentPosition +20)
			}
		})


    var makeChar = this.view.getCharacter()
    $(document).keydown(function() {
      if (event.keyCode == 38 ) {
        console.log("pressing up")
        $(makeChar).animate({
          'marginTop' : "-=40px"
        },300)
        $(makeChar).animate({
          'marginTop' : "+=40px",
        },200)
      }
    })

  }
}