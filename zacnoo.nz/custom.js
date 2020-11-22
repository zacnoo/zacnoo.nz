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
			delay: 200 + (200 * index)
		});
	});
});