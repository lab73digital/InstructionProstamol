$(document).ready(function () {
    $( "#target" ).on('click', function() {
        $( "#p-for-col" ).slideToggle();
        $('.img--rotated').toggleClass('rotated');
    });
    var controller = new ScrollMagic.Controller();
    var timelinemax = new TimelineMax();
    var tween1 = new TimelineMax().fromTo('.b-2--animation1', .6, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1
    }).fromTo('.b-2--animation2', .6, {
        opacity: 0
    }, {
        opacity: 1
    }).staggerFromTo('.b-2--animation3', .4, {
        y: -100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        onComplete: function () {
            timelinemax.to(this.target, .25, {
                y: -10
            }).to(this.target, .15, {
                y: 0
            });
        }
    }, .4).fromTo('.b-2--animation3_1', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-2--animation3_2', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-2--animation3_3', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-2--animation3_4', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-2--animation5', .6, {
        opacity: 0
    }, {
        opacity: 1
    });

    var tween2 = new TimelineMax().fromTo('.b-4--animation1', .6, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1
    }).fromTo('.b-4--animation2', .6, {
        opacity: 0
    }, {
        opacity: 1
    }).staggerFromTo('.b-4--animation3', .3, {
        y: -100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    }, .4).fromTo('.b-4--animation3_1', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-4--animation3_2', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-4--animation3_3', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-4--animation3_1_1', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-4--animation3_2_2', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-4--animation3_3_3', .3, {
        opacity: 0
    }, {
        opacity: 1
    }).fromTo('.b-4--animation5', .6, {
        opacity: 0
    }, {
        opacity: 1
    });

    var tween3 = new TimelineMax().fromTo('.b-5--animation1', .6, {
        opacity: 0
    }, {
        opacity: 1
    }).add(TweenMax.fromTo('.b-5--animation1_1l', .6, {
        x: -300,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }), '.b-5--animation1').add(TweenMax.fromTo('.b-5--animation1_1r', .6, {
        x: 300,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }), '.b-5--animation1').add(TweenMax.fromTo('.b-5--animation1_2l', .6, {
        x: -300,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }), 'b-5--animation1_1r').add(TweenMax.fromTo('.b-5--animation1_2r', .6, {
        x: 300,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }), 'b-5--animation1_1r').fromTo('.b-5--animation3', .9, {
        opacity: 0
    }, {
        opacity: 1
    });

    var tween4 = new TimelineMax().fromTo('.hr-animation1', .5, {
        x: -50
    }, {
        x: 0,
        opacity: 1
    }).fromTo('.hr-animation2', .5, {
        x: -50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }).fromTo('.hr-animation3', .5, {
        x: -50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }).fromTo('.hr-animation4', .5, {
        x: -50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    });

    new ScrollMagic.Scene({
        triggerElement: ".b-2--animation1",
        reverse: false
    }).setTween(tween1).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".b-4--animation2__point",
        reverse: false
    }).setTween(tween2).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".b-5--animation1",
        reverse: false
    }).setTween(tween3).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".hr-animation1",
        reverse: false
    }).setTween(tween4).addTo(controller);

});

