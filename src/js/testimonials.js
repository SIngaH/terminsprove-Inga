document.addEventListener("DOMContentLoaded", ()=>{
    let testimonials = document.querySelector(".testimonials-api-info");
    let box1 = document.querySelector("#testimonials .box1"); 
    let box2 = document.querySelector("#testimonials .box2"); 
    let box3 = document.querySelector("#testimonials .box3"); 
    
    box1.addEventListener("click", ()=>{
        box1.classList.add("pink");
        box2.classList.remove("pink");
        box3.classList.remove("pink");
        fetcher(0);
    });

    box2.addEventListener("click", ()=>{
        box1.classList.remove("pink");
        box2.classList.add("pink");
        box3.classList.remove("pink");
        fetcher(1);
    });

    box3.addEventListener("click", ()=>{
        box1.classList.remove("pink");
        box2.classList.remove("pink");
        box3.classList.add("pink");
        fetcher(2);
    });

    fetcher(0);

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
            let index2 = index + 1;
            testimonials.innerHTML=`
                <img src="./assets/images/content-img/testimonial_` + index2 + `.jpg" alt="` + result[index].name + `">
                <h4>` + result[index].name + `</h4>
                <p>` + result[index].content + `</p>
                <ul>
                <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://myaccount.google.com/"><i class="fab fa-google-plus-g"></i></a></li>
                </ul>
            `;

        });
    }
});