const nameInput = document.getElementById("name-input")
const nameForm = document.getElementById("name-form")

nameForm.addEventListener("submit", (event)=>{
    event.preventDefault(); // prevents auto-submitting(redirecting) of the form, i.e. we stay on the page we are currently

    // let's save the names value
    const name = nameInput.value
    chrome.storage.sync.set({name: name}).then(()=>{
        console.log(`The name is ${name}`)
    })

    chrome.storage.sync.get(["name"]).then((result) => {
        const nameUL = document.querySelector("#name-ul")
        let nameLI = document.createElement("li")
        nameLI.innerText = result.name
        nameUL.appendChild(nameLI)
      });
})