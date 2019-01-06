let $buttons = $('#buttonWrapper>button');
let $slides = $('#slides');
let $images = $slides.children('img');
let current = 0;

function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true);
    let $lastCopy = $images.eq($images.length - 1).clone(true);

    $slides.append($firstCopy);
    $slides.prepend($lastCopy);
}
makeFakeSlides();

$slides.css({
    transform: 'translatex(-400px)'
});



// bindEvents()
// function bindEvents() {
// 
$('#buttonWrapper').on('click', 'button', function (e) {
    //debugger;
    let $button = $(e.currentTarget);
    let index = $button.index();
    gotoslide(index)


    
})
$("#next").on('click',function(){
    gotoslide(current+1)
})
$("#previous").on('click',function(){
    gotoslide(current-1)
})

let timer = setInterval(function(){
    gotoslide(current+1)
},4000)
$('.container').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer = setInterval(function(){
        gotoslide(current+1)
    },4000)
})

function gotoslide(index) {
    if(index > $buttons.length-1){
        index = 0;
    }else if(index < 0){
        index = $buttons.length - 1
    }
    if (current === $buttons.length - 1 && index === 0) {
        //最后一张到第一张
        $slides.css({
            transform: 'translatex(-' + ($buttons.length + 1) * 400 + 'px)'
        }).one('transitionend', function () {
            $slides.hide().offset();
            $slides.css({
                transform: 'translatex(-' + (index + 1) * 400 + 'px)'
            }).show()
        })
    } else if (current === 0 && index === $buttons.length - 1) {
        //第一张到最后一张
        $slides.css({
            transform: 'translatex(0px)'
        }).one('transitionend', function () {
            $slides.hide().offset();
            $slides.css({
                transform: 'translatex(-' + (index + 1) * 400 + 'px)'
            }).show()
        })
    } else {
        let moveL = -(index + 1) * 400;
        $slides.css({
            transform: 'translatex(' + moveL + 'px)'
        }).show();
    }
    current = index
}
// }