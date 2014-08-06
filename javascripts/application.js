$(document).ready(function(){
	bindEvents();
})

function bindEvents(){
	$(document).keydown(function(){
		if (event.keyIdentifier == "Right"){
			console.log('Moving right!')
			var newPosition = $('.long_grass').position().left - 20
			$('.long_grass').css('left', newPosition)
		}
	})
	$(document).keydown(function(){
		if (event.keyIdentifier == "Left"){
			console.log('Moving left!')
			var newPosition = $('.long_grass').position().left + 20
			$('.long_grass').css('left', newPosition)
		}
	})
}