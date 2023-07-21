const timeElement = document.getElementById("time")
const currentDate = new Date().toLocaleDateString()
const currentTime = new Date().toLocaleTimeString()

timeElement.innerText = `The current time is ${currentTime}`

chrome.action.setBadgeText({
    text: "TIME"
}, () => {
    console.log("Finished setting badge text")
})

chrome.storage.sync.get(["name"]).then((result)=>{
    const popupUL = document.querySelector("#popup-ul")
    const popupLI = document.createElement("li")
    popupLI.textContent = `current name is : ${result.name}`
    popupUL.append(popupLI)
})
