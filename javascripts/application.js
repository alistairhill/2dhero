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
		}),

		$(document).keydown(function(){
			if (event.keyIdentifier == "Left"){
				console.log('Moving left!')
				var newPosition = $('.long_grass').position().left + 20
				$('.long_grass').css('left', newPosition)
			}
		})

  }
}