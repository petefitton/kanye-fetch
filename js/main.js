console.log("👀")

let url = "https://api.kanye.rest"

// fetch(url)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         let text = document.querySelector("h1")
//         text.innerText = data.quote
//     })
//     .catch(err => console.log(err))

btn = document.querySelector('button')

btn.addEventListener('click', () => {
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            let text = document.querySelector("h1")
            text.innerText = data.quote
        })
        .catch(err => console.log(err))
})