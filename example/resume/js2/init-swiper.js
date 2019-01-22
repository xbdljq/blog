!function(){
    var view = View('#mySlides')
    var container = {
        view:null,
        swiper:null,
        swiperOptions :{
            loop: true, // 循环模式选项    
            pagination: {
                el: '.swiper-pagination',
            },    
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init:function(view){
            this.view = view
            this.initSwiper()
        },
        initSwiper:function(){
            this.swiper = new Swiper(
                view.querySelector('.swiper-container'), 
                this.swiperOptions
            )
        }
    }
    container.init(view)
    
}.call()

