!function() {
  // 调速使用JQuery语法 采用冒泡机制减少内存消耗
  $('.actions').on('click','button', function(e) {
    let $button = $(e.currentTarget)  //获取到哪个button元素的监听器触发了事件  绑定监听事件的对象
    let speed = $button.attr('data-speed')  //获取点击获得的自定义属性
    // console.log(speed)
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        speedTime = 100
        break;

      case 'middle':
        speedTime = 50
        break;

      case 'fast':
        speedTime = 10
        break;
    }
  })

  // 动画完成后
  function end() {
    alert('皮卡丘已经绘制成功啦~！！！');
  }

    var speedTime = 50
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0;
        setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            // scrollHeight 元素包含的高度（包括溢出窗口不可见的内容），scrollTop向上滚动的像素
            container.scrollTop = container.scrollHeight
            if(n <= code.length) {
              setTimeout(run, speedTime)
            }else {
              fn && fn.call()
            }
        },speedTime)
    }
    let code = `
/*
 *  首先，需要准备皮卡丘的皮
 */
.preview {
    display: flex;
    height: 100%;
    /* border: 1px solid green; */
    justify-content: center;
    align-items: center;
    background-color: yellow;
  }

  .wrapper {
    width: 100%;
    height: 180px;
    /* border: 1px solid red; */
    position: relative;
  }

  .wrapper > :not(:last-child) {
      z-index: 1;
  }

/*
 *  接下来，画皮卡丘的鼻子
 */
  .nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent transparent;
    border-radius: 11px;
    position: absolute;
    top: 28px;
    left: 50%;
    /* transform: translateX(-50%); */
    margin-left: -12px;
  }

/*
 *  接下来，画皮卡丘的眼睛
 */
  .eye {
    width: 49px;
    height: 49px;
    background-color: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
  }
/*
 *  画眼珠子
 */
  .eye::before {
    content: "";
    display: block;
    height: 24px;
    width: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 7px;
    top: -2px;
    border: 2px solid #000;
  }
/*
 *  左眼在左边
 */
  .eye.left {
    left: 50%;
    margin-left: -139px;
  }
/*
 *  右眼在右边
 */
  .eye.right {
    right: 50%;
    margin-right: -139px;
  }
/*
 *  然后画皮卡丘的脸
 */
  .face {
    width: 60px;
    height: 60px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
  }
  /* 左红晕 */
  .face.left {
    left: 50%;
    top: 85px;
    margin-left: -176px;
  }
  /* 右红晕 */
  .face.right {
    right: 50%;
    top: 85px;
    margin-right: -176px;
  }

  /* 上嘴唇 */
  .upLip {
    height: 20px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    background-color: yellow;
  }
  /* 左边上嘴唇 */
  .upLip.left {
    right: 50%;
    top: 55px;
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
  }
  /* 右边上嘴唇 */
  .upLip.right {
    left: 50%;
    top: 55px;
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
  }

  /* 舌头的描绘 */
  .downLip-wrapper{
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    height: 120px;
    width: 100px;
    overflow: hidden;
  }
  /* 舌头绘制开始 */
  .downLip {
    width: 100px;
    height: 800px;
    border-radius: 180px/600px;
    border: 2px solid black;
    bottom: 0;
    position: absolute;
    background: #990513;
    overflow: hidden;
  }
/*
 *  好了，这只皮卡丘是送给你的礼物
 */
  .downLip::after {
    content: "";
    position: absolute;
    bottom: -30px;
    width: 100px;
    height: 120px;
    background: #fc4a62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
  }
`
    writeCode('',code, end)

}.call()