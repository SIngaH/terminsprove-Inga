function post(this){
    console.log(this);
    fetch("http://localhost:4000/newsletters", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            email: this.value
        })
    })
    .catch(error => console.error(error))
}
// javascript:alert('Thank you for subscribing to our newsletter!')