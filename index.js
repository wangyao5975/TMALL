//侧导航区域效果
{
    let labels=document.querySelectorAll(".lunboxia_left_li");
    let menus=document.querySelectorAll(".menu");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        };
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}


//头部nav效果
{
    let nav=document.querySelectorAll(".nav_box");
    let box=document.querySelectorAll(".nav_taobao_xiaoguo");
    nav.forEach(function(ele,index){
        ele.onmouseenter=function(){
            box[index].style.display="block";
        }
        ele.onmouseleave=function(){
            box[index].style.display="none";
        }
    })
}

//banner
{
    let imgs=document.querySelectorAll(".lunboxia_img");
    let pages=document.querySelectorAll(".pagebox li");
    let bannert=document.querySelector(".lunboxia");
    // let next=document.querySelector(".next");
    // let prev=document.querySelector(".prev");
    // console.log(imgs);
    // console.log(pages);
    pages.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<pages.length;i++){
                imgs[i].classList.remove("active");
                pages[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    //自动播放
    let n=0;
    let t=setInterval(move,3000);
    function move() {
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pages[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pages[n].classList.add("active");
    }
    //手指移入时停下来，即清除轮播
    bannert.onmouseenter=function () {
        clearInterval(t);
    }
    //手指离开时继续   再次开启轮播效果
    bannert.onmouseleave=function () {
        t=setInterval(move,3000);
    }
}

//leftbar部分
{
    let topbar=document.querySelector(".topbar");
    let leftbar=document.querySelector(".leftbar");
    window.onscroll=function () {
        let st= document.documentElement.scrollTop;
        if(st>1200){
            topbar.style.display="block";
        }else{
            topbar.style.display="none";
        }
        if(st>1000){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }

    }
}

//楼层跳转
{
    let tips = document.querySelectorAll(".tips");
    let containers = document.querySelectorAll(".container");
    let flag=true;
    tips.forEach(function (ele, index) {
        ele.onclick = function () {
            flag=false;
            let ot = containers[index].offsetTop-50;//模块距顶部的距离减去50
            // console.log(ot);
            // document.documentElement.scrollTop=ot;
            let now = document.documentElement.scrollTop;//获取当前滚动高度 随时变化
            let speed = (ot - now) / 8;//一共走8次，不管点第几个模块，她都是走8次，每次的速度不同
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 200) {
                    clearInterval(t);
                    flag=true;
                }
                document.documentElement.scrollTop = now;
            }, 25);
            for(let i=0;i<tips.length;i++){
                tips[i].classList.remove("active");
            }
            tips[index].classList.add("active");
        };
        //addEventListener 给一个事件添加很多个事件处理程序
        window.addEventListener("scroll", function () {
            let st = document.documentElement.scrollTop;
            if(flag){
                for (let i = 0; i < containers.length; i++) {
                    if (st > containers[i].offsetTop -150) {
                        for (let i = 0; i < tips.length; i++) {
                            tips[i].classList.remove("active");
                        }
                        tips[i].classList.add("active");
                    }
                }
            }
        })

    })
}

//点击回到顶部
{
    let totop=document.querySelector(".return");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=100;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },20)
    }
}
{let totop=document.querySelector(".return2");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=100;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },20)
    }
}
//右侧rightbar
{
    let nav=document.querySelectorAll(".rightbar_icon_item");
    let box=document.querySelectorAll(".rightbar_content");
    nav.forEach(function(ele,index){
        ele.onmouseenter=function(){
            box[index].style.display="block";

        }
        ele.onmouseleave=function(){
            box[index].style.display="none";

        }
    })
}