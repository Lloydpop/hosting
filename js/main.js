const seeAll=document.querySelector(".see-all")
const host=document.querySelector(".host")
seeAll.addEventListener("click",function(e){
    let tag=e.currentTarget.previousElementSibling
    let text=tag.nextElementSibling.querySelector("p")
    if(tag.classList.contains("add-host")){
        text.innerHTML=`see all features <img src="/myhost/img/line-angle-down-icon.svg" alt="" width="12px">`
        tag.classList.remove("add-host")
    }
    else{
        tag.classList.add("add-host")
        text.innerHTML='see less features <img src="/myhost/img/up.png" alt="" width="16px">'
    }
})
const lins=document.querySelectorAll(".drop-down")
lins.forEach(function(lin){
   let l=lin.previousElementSibling
   l.addEventListener("click",()=>{
       lins.forEach(function(item){
           if(item !==lin){
               item.classList.remove("add-d")
           }
       })
       lin.classList.toggle("add-d")
   })
})
const sp=document.querySelectorAll(".sp")
sp.forEach(function(span){
    let parent=span.parentElement
    parent.addEventListener("click", function(){
        sp.forEach(function(bt){
            if(bt!==span){
                bt.classList.remove("add-d")
            }
        })
        span.classList.toggle("add-d")
    })
})
const fixed=document.querySelector(".fixed")
const closer=document.querySelector(".remove")
const holdS=document.querySelector(".hold-s")
closer.addEventListener("click", function(){
    fixed.classList.remove("add-fixed")
    document.body.style.overflowY="visible"
})
holdS.addEventListener("click", function(){
    fixed.classList.add("add-fixed")
    document.body.style.overflowY="hidden"
})
const container=document.querySelector(".text-content").addEventListener("click", function(){
    lins.forEach(function(lin){
            lin.classList.remove("add-d")
        })
        sp.forEach(function(span){
                span.classList.remove("add-d")
            })
})

const removeFixed=document.querySelector(".remover")
const toogleLang=document.querySelectorAll(".eng")
const listC=document.querySelector(".country")
removeFixed.addEventListener("click", function(){
    listC.classList.remove("add-remover")
    document.body.style.overflowY="visible"
})


toogleLang.forEach(function(lang){
    lang.addEventListener("click", function(){
        if(listC.classList.contains("add-remover")){
            listC.classList.remove("add-remover")
            document.body.style.overflowY="visible"
        }
        else{
            listC.classList.add("add-remover")
            document.body.style.overflowY="hidden"
        }
      
    })
})
const navBar=document.querySelector("#navv")
const toTop=this.document.querySelector(".to-top")
window.addEventListener("scroll", function(e){
    let navHeight=navBar.getBoundingClientRect().height
    if(window.scrollY>navHeight){
        navBar.classList.add("nav-bar")
    }
    else{
        navBar.classList.remove("nav-bar")
    }
    if(this.window.scrollY>600){
        toTop.classList.add("add-top")
    }
    else{
        toTop.classList.remove("add-top")
    }
})
toTop.addEventListener("click",function(){
    window.scrollTo(0,0)
 })
setInterval( function(){
    let date=new Date()
    let day=date.getDay()
    let hour =date.getHours()
    let minute=date.getMinutes()
    let seconds=date.getSeconds()
    hour=hour<10 ? "0" + hour: hour
    minute=minute <10 ?"0" + minute : minute
    seconds=seconds <10 ?"0" + seconds : seconds
let countDown=document.querySelector(".count-down").innerHTML=`<div class="box"><span>:</span>
<span class="namer">days</span>0${day}</div>
<div class="box"><span>:</span><span class="namer">hours</span>${hour}</div>
<div class="box"><span>:</span><span class="namer">minutes</span>${minute}</div>
<div class="box"><span class="namer">seconds</span>${seconds}</div>`
},1000)
