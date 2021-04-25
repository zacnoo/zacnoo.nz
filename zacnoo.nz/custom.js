WebFont.load({
    google: {
        families: ['Poppins', 'Nunito Sans']
    }
});
var currentTime = 0;
var delay = 0
var rof = 400
$(document).ready(function() {
startAnimations()
});

var startAnimations = function() {
    anime.remove('#actualinput')
    anime({
        targets: '#actualinput',
        width: ['100%', '0%'],
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        duration: rof,
        delay: delay,
        update: function(anim) {
            anime({
                targets: '#gameinput',
                width: [$('#gameinput').width(), $('#actualinput').width()],
                easing: 'linear',
                duration: '50ms',
                update: function(anime) {
                	console.log($('#gameinput').width())
                }
            })
        }
    })
}