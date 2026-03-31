window.addEventListener("load",function(){
    // gotop 스크롤 이벤트
    // 변수 선언
    const gotop = this.document.querySelector("#gotop")
    this.window.addEventListener("scroll",()=>{
        if(this.document.documentElement.scrollTop > 1000){
            gotop.style.display = "block";
        }
        else{
            gotop.style.display = "none";
        }
    });
    // gotop 버튼 클릭시 위로 스크롤
    gotop.addEventListener("click",()=>{
        this.window.scrollTo({
            top:0,
            // behavior:"smooth"
        })
    })
})