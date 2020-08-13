
document.querySelector("#button").addEventListener("click", ()=>{
    let email = document.querySelector("#newsletter-email").value;
    console.log(email);
    post(email.value);

})
function post(theEmail){
    fetch("http://localhost:4000/newsletters", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            email: theEmail
        })
    })
    .catch(error => console.error(error))
}
// javascript:alert('Thank you for subscribing to our newsletter!')