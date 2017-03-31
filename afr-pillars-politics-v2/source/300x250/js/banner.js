var videoUrl;
var md = new MobileDetect(window.navigator.userAgent);
var isDesktop;
var playVideo = false;
var clickTag;
var bgImage01, bgImage02, bgImage03;
var puppetShadow, manArm, handPuppet, tiePuppet, puppetRightLeg, puppetLeftLeg;

// Banner timings
var timingValues;
var frame01, frame02, frame03, frame04, frame05;

$(document).ready(() => {
    FastClick.attach(document.body);
    init();
})

function init() {

    // Init CSS
    // =========================
    TweenMax.set('.logo-container', {y:26})
    TweenMax.set('.cta-arrow', {rotation:45, transformOrigin:'50% 50%'})
    TweenMax.set('.arrow-circle', {autoAlpha:0, x:-10})

    // Feature images
    // =========================
    puppetShadow = 'puppet-shadow.png';
    manArm = 'man-arm.png';
    handPuppet = 'hand-puppet.png';
    tiePuppet = 'tie.png';
    puppetRightLeg = 'puppet-right-leg.png';
    puppetLeftLeg = 'puppet-left-leg.png';



    // Copy
    // =========================


    $('.frame-2 p').html('ECONOMY<br>CLASS');
    $('.frame-3 p').html("THE POLITICAL<br>PLAYS SHAPING<br>AUSTRALIA");
    $('.frame-4 p').html('KNOW THE ANGLE<br>WITH INSIDER<br>POLITICAL ANALYSIS');
    $('.frame-5 p').html('TRY THE AFR<br>FREE FOR 1 MONTH');

    $('.cta-copy').html('Find out more');

    $('.puppet-shadow').attr('src', puppetShadow);
    $('.bg-image-01').attr('src', bgImage01);
    $('.man-arm').attr('src', manArm);
    $('.hand-puppet').attr('src', handPuppet);
    $('.tie-puppet').attr('src', tiePuppet);
    $('.puppet-right-leg').attr('src', puppetRightLeg);
    $('.puppet-left-leg').attr('src', puppetLeftLeg);





    // Clicktag
    // =========================
    clickTag  = 'http://google.com';

    // Button hover
    // =========================
    $('.button').on('mouseenter', () => {
        TweenLite.to('.arrow-circle', .2, {autoAlpha:1, x:0, ease:Power1.easeOut, overwrite:'all'})
        TweenLite.to('.cta-copy', .2, {x:-5, ease:Power1.easeOut, overwrite:'all'})
    }).on('mouseleave', () => {
        TweenLite.to('.arrow-circle', .2, {autoAlpha:0, x:-10, ease:Power1.easeOut, overwrite:'all'})
        TweenLite.to('.cta-copy', .2, {x:0, ease:Power1.easeOut, overwrite:'all'})
    })

    $('#banner').on('click', () => {
        console.log('clicktag invoked')
        window.open(window.clickTag)
    })

    // Timing values
    // =========================
    timingValues = '1,3,7,10,13'
    timingValues = timingValues.split(',')

    frame01 = timingValues[0];
    frame02 = timingValues[1];
    frame03 = timingValues[2];
    frame04 = timingValues[3];
    frame05 = timingValues[4];

    const manifest = [
        "grumpycat.jpg",
        "photo.jpg",
        ""
    ];

    preloadimages(manifest)
        .done((images) => {
            $('#preloader').hide()
            $('#banner').show()
            start();
        });
}

function start() {

    // Split text
    // =========================

    var $messaging01 = $(".frame-2 p"),
    mySplitText01 = new SplitText($messaging01, {type:"words"});
    mySplitText01.split({type:"lines, chars, words", linesClass:"splitLines"});

    var $messaging02 = $(".frame-3 p"),
    mySplitText02 = new SplitText($messaging02, {type:"words"});
    mySplitText02.split({type:"lines, chars, words", linesClass:"splitLines"});

    var $messaging03 = $(".frame-4 p"),
    mySplitText03 = new SplitText($messaging03, {type:"words"});
    mySplitText03.split({type:"lines, chars, words", linesClass:"splitLines"});

    var $messaging04 = $(".frame-5 p"),
    mySplitText04 = new SplitText($messaging04, {type:"words"});
    mySplitText04.split({type:"lines, chars, words", linesClass:"splitLines"});

    var tlFeature = new TimelineMax();

    var tlPuppet = new TimelineMax({repeat:20, repeatDelay:0, yoyo:true});

    function animatePuppet(){
      tlPuppet
               .to('.puppet-main', 1, {ease: Back.easeInOut.config(3), rotation:3, y:"+=10" })
               .to('.puppet-shadow', 1, {ease: Back.easeInOut.config(3), rotation:3, y:"+=10" }, "-=1")
               .to('.tie-puppet', 1, {ease: Back.easeInOut.config(3), rotation:-7 }, "-=1")
               .to('.puppet-right-leg', 1, {ease: Back.easeInOut.config(3), rotation:-10}, "-=1")
               .to('.puppet-left-leg', 1, {ease: Back.easeInOut.config(3), rotation:15}, "-=1")



               ;
    }



    function featureAnimation() {
        tlFeature.to('.feature', 1, {ease:Power1.easeInOut, scale:0.25, x:202, y:-232, delay:4.5})
                 .to('.feature', 0.75, {ease:Power1.easeInOut, x:326, delay:3})
                 .set('.feature', {autoAlpha:0})




                 ;
        }


    const tl = new TimelineMax();



    tl.set('.panel-03', {x:-300}) // Reset the panels
      .set('.panel-04', {x:-300}) // Reset the panels
      .set('.panel-05', {x:-300}) // Reset the panels
      .set('.feature', {scale:0.4, x:247, y:-342})
      .set('.puppet-shadow', {x:-460, y:50, alpha:0.3, transformOrigin:"100% 20%"})
      .set('#fr-logo-intro', {opacity:1})
      .call(animatePuppet, [], this, "")
      .to('.panel-01', 1.6, {y:250, ease:Power1.easeInOut})
      .to('.panel-02', 1.1, {y:195, ease:Power1.easeInOut, backgroundColor:"#ffffff", opacity:1, onComplete: () => {
          TweenMax.set('.panel-01', {y:-250}) // Reset the panels

      }}, '-=1.1')
      .to('#fr-logo-intro', 1.1, {ease:Power1.easeInOut, top:"209px"}, "-=1.1")
      .to('#tag-line-intro', 1.1, {ease:Power1.easeInOut, opacity:0}, "-=1.1")
      .to('#logo-lockup-intro .fr-logo-path', 0.5, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=0.85")
      .call(featureAnimation, [], this, "-=0.75")

      .staggerFrom('.frame-2 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")
      .staggerTo('.frame-2 p .splitLines', 0.8, {y:40, alpha:0, ease:Power1.easeInOut, delay:2}, -0.08)

      .staggerFrom('.frame-3 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")
      .staggerTo('.frame-3 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut, delay:2.25}, -0.08)

      .add('frame04', "-=0.6")
      .to('.panel-05', 1.6, {x:0, ease:Power1.easeInOut}, 'frame04')
      .to('.panel-04', 1.3, {x:0, ease:Power1.easeInOut}, 'frame04+=.3')
      .to('.panel-03', 1.1, {x:0, ease:Power1.easeInOut}, 'frame04+=.5')

      .staggerFrom('.frame-4 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut}, 0.08, 'frame04+=1')
      .staggerTo('.frame-4 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut, delay:2}, 0.08)

      .staggerFrom('.frame-5 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut}, 0.08)


      .from('.button', 0.8, {alpha:0, y:20, ease:Power1.easeOut}, "-=0.2")
      .to('.panel-02', 1, {y:170, ease:Power1.easeInOut}, "-=1.3")
      .to('#fr-logo-intro', 1, {y:-21, ease:Power1.easeInOut}, "-=1.3")
      .to('#tag-line-intro', 1, {ease:Power1.easeInOut, opacity:1}, "-=1.3")
      .to('#tag-line-intro .fr-logo-path', 1, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=1.3")
      .from('#tag-line', 1, {alpha:0, ease:Power1.easeOut}, 'endFrame+=1')

      ;






    // Testing
    // =========================
    // tl.pause(8)


    let name = `andrew`
    const surname = `asdfasdf`
    //alert(`sup ${name} ${surname}`)
}
