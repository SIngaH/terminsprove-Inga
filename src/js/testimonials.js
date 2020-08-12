document.addEventListener("DOMContentLoaded", ()=>{
    let testimonials = document.querySelector(".testimonials-api-info");
    let box1 = document.querySelector("#testimonials .box1"); 
    let box2 = document.querySelector("#testimonials .box2"); 
    let box3 = document.querySelector("#testimonials .box3"); 
    console.log(box1);
    
    box1.addEventListener("click", ()=>{
        box1.classList.add("pink");
        box2.classList.remove("pink");
        box3.classList.remove("pink");
        fetcher(1);
    });

    box2.addEventListener("click", ()=>{
        box1.classList.remove("pink");
        box2.classList.add("pink");
        box3.classList.remove("pink");
        fetcher(2);
    });

    box3.addEventListener("click", ()=>{
        box1.classList.remove("pink");
        box2.classList.remove("pink");
        box3.classList.add("pink");
        fetcher(3);
    });

    fetcher(1);

    function fetcher(index){
        fetch("http://localhost:4000/testemonials", {
            "method": "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then (function(response){
            return response.json();
        })
        .then (function(result){
            result.forEach(get => {
                if(get.id === index){
                    console.log(get);
                    testimonials.innerHTML=`
                        <img src="./assets/images/content-img/testimonial_` + get.id + `.jpg" alt="` + get.name + `">
                        <h4>` + get.name + `</h4>
                        <p>` + get.content + `</p>
                        <ul>
                            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://myaccount.google.com/"><i class="fab fa-google-plus-g"></i></a></li>
                        </ul>
                    `;
                }
            });
        });
    }
});