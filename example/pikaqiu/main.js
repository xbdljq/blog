!function(){
    var duration = 20;
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0
        setInterval(()=>{
            n += 1;
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },duration)
    }
    let code = `
    /*
    *首先准备皮卡丘的皮
    */
    .preview{
        border:1px solid green;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffdc2b;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
        
    }
    .wrapper>:not(:last-child){
        z-index: 1;
    }
    
    /*接下来， 给皮卡丘画个鼻子吧 */
    .nose{
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-top-color: #000;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-50%)
    }
    /* 接下来，给皮卡丘画眼睛吧 */
    .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000;
    }
    .eye::before{
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        top: -1px;
        border: 1px solid #000;
    }
    /* 这是左眼*/
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    /* 这是右眼*/
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    /* 然后，画上红扑扑脸颊 */
    .face{
        width: 68px;
        height: 68px;
        background: #fc3d1c;
        border: 2px solid #000;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left{
        right: 50%;
        margin-right: 110px;
    }
    .face.right{
        left: 50%;
        margin-left: 110px;
    }
    /* 画个上嘴唇 */
    .upperLip{
        height: 30px;
        width: 90px;
        border: 3px solid #000;
        position: absolute;
        top: 52px;
        background: #ffdc2b;
        /* background: red; */
    }
    .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 48px 28px;
        border-top: none;
        border-right: none;
        transform: rotate(-18deg);
    }
    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 48px 28px;
        border-top: none;
        border-left: none;
        transform: rotate(18deg);
    }
    /* 画个下嘴唇 */
    .lowerLip-wrapper{
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -100px;
        height: 102px;
        width: 200px;
        overflow: hidden;
    }
    .lowerLip{
        border: 2px solid #000;
        width: 200px;
        height: 1000px;
        background: #a81414;
        border-radius: 208px/1000px;
        position: absolute;
        left:0;
        bottom: 0;
        overflow: hidden;
        
    
    }
    .lowerLip::after{
        content: '';
        width: 100px;
        height: 80px;
        background: #fc4a62;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left:-50px;
    }
    /*好了，这只皮卡丘送给你*/
    `
    writeCode('',code)

    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed');
        console.log(speed)
        $button.addClass('active').sibling('.active').removeClass('active')
    })
}.call()