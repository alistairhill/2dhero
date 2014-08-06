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
			var currentPosition = $('.long_grass').position().left
			if (event.keyIdentifier == "Right"){
				$('.long_grass').css('left', currentPosition -20)
			} else if(event.keyIdentifier == "Left"){
				$('.long_grass').css('left', currentPosition +20)
			}
		})
  }
}