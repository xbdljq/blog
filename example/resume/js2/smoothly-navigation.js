!function(){

    var view = View('nav .menu')
    var controller = {
        view :null,
        aTags:null,
        init:function(view){
            this.view = view          
            this.initAnimation();
            this.bindEvents()

        },
        initAnimation:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents:function(){
           let aTags = this.view.querySelectorAll("nav > ul.menu >li>a")
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick =  (e) => {
                    e.preventDefault();
                    let a = e.currentTarget
                    let href = a.getAttribute('href') //'#siteAbout'
                    let element = document.querySelector(href);
                   this.scrollToElement(element)
            
                }
            }
        },
        scrollToElement:function(element){
            let top = element.offsetTop;
            
            let currenTop = window.scrollY;
            let targetTop = top - 80;
    
            let s = targetTop - currenTop
            var t = Math.abs((s / 100) * 300);
            if (t > 500) {
                t = 500;
            }
            var coords = {
                y: currenTop
            }; // Start at (0, 0)
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({
                    y: targetTop
                }, t) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y)
                    //box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
                })
                .start();
        }
    }
    controller.init(view)
     
    
}.call()
