document.addEventListener("DOMContentLoaded", ()=>{
    let box1 = document.querySelector(".box1"); 
    let imgs12 =  document.querySelector(".events-img1-2"); 

    let box2 = document.querySelector(".box2");
    let imgs34 =  document.querySelector(".events-img3-4"); 

    let box3 = document.querySelector(".box3");
    let imgs56 =  document.querySelector(".events-img5-6"); 
    
    box1.addEventListener("click", ()=>{
        imgs12.classList.remove("hide");
        imgs34.classList.add("hide");
        imgs56.classList.add("hide");
        box1.classList.add("pink");
        box2.classList.remove("pink");
        box3.classList.remove("pink");
    });

    box2.addEventListener("click", ()=>{
        imgs12.classList.add("hide");
        imgs34.classList.remove("hide");
        imgs56.classList.add("hide");
        box1.classList.remove("pink");
        box2.classList.add("pink");
        box3.classList.remove("pink");
    });

    box3.addEventListener("click", ()=>{
        imgs12.classList.add("hide");
        imgs34.classList.add("hide");
        imgs56.classList.remove("hide");
        box1.classList.remove("pink");
        box2.classList.remove("pink");
        box3.classList.add("pink");
    });
});