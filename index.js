// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    }).then(res => {
        return res.json()
    })
    .then(data => {
        const body = document.querySelector("body");
        const h1 = document.createElement("h1");
        h1.innerHTML = data.id;
        body.appendChild(h1);
    })
    .catch(data => {
        const body = document.querySelector("body");
        body.innerHTML = data.message;
    })
};
