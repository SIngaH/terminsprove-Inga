document.addEventListener("DOMContentLoaded", ()=>{ 
    let insertImgs = document.querySelector(".billede-gallery");
    let insertImgs2 = document.querySelector(".billede-gallery2");

    fetch("http://localhost:4000/assets", {
        "method": "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then (function(response){
        return response.json();
    })
    .then (function(result){
        result.forEach(img => { /* change to index later */
            if(img.id < 61 ){
                insertImgs.innerHTML+=`
                    <img src="` + img.url + `" alt="` + img.name + `"/>
                `;
            }else if(img.id > 61 && img.id < 67){
                insertImgs2.innerHTML+=`
                    <img src="` + img.url + `" alt="` + img.name + `"/>
                `;
            }
        });
    })
    .catch(error => console.error(error))
});
