WebFont.load({
	google: {
		families: ['Poppins', 'Nunito Sans']
	}
});

$(document).ready(function() {
	$('.staggering').each(function(index, el) {
		anime({
			targets: this,
			translateY: 50 + (50 * index),
			backgroundColor: "#F60",
			color: "#151515",
			delay: 1000 + (200 * index)
		});
	});
});

function moveDownwards(element){
	element.parentElement.appendChild(element.cloneNode(true))
	var currentTranlate = getTranslateXY(element);
		var animation = anime({
			targets:element,
			translateY:function(){
				var translation = Math.random()*300;
				if(currentTranlate.translateY > translation){
					return 0;
				}else{
					return translation;
				}
			},
			rotate:Math.random()*360,
			translateX:function(){
				var translation = Math.random()*300;
				if(currentTranlate.translateY > translation){
					return translation;
				}else{
					return 0;
				}
			},
			rotate:Math.random()*360,
			duration:10,
			easing:'easeOutQuad',
			changeComplete:function(){
				moveDownwards(element);
			}
		})
	}

function getTranslateXY(element) {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return {
        translateX: matrix.m41,
        translateY: matrix.m42
    }
}