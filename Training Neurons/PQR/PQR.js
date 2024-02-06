function crear() {
    let type = document.querySelector("#type");
    let description = document.querySelector("#description");
    let email = document.querySelector("#email");

    let queja = {
        type: type.value,
        description: description.value,
        email: email.value
    }

    let url = "http://localhost:3000/pqr"

    fetch(url , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(queja)
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data) & location.reload();
    });
}