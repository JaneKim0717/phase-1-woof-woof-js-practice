document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(dogs => renderAllDogs(dogs))

    const dogBar = document.getElementById("dog-bar")
    const dogInfo = document.getElementById("dog-info") 

    function renderAllDogs(dogs) {
        dogs.forEach(function(singleDogObj) {
            const newSpan = document.createElement("span")
            newSpan.innerText = singleDogObj.name
            dogBar.appendChild(newSpan)

            
            newSpan.addEventListener("click", function() {
                dogInfo.replaceChildren("")              
                const newDogImage = document.createElement("img")
                newDogImage.src= singleDogObj.image
                dogInfo.appendChild(newDogImage)
                            
                const newDogName = document.createElement("h2")
                newDogName.innerText = singleDogObj.name
                dogInfo.appendChild(newDogName)

                const button = document.createElement("button")
                dogInfo.appendChild(button)
                if (singleDogObj.isGoodDog === true) {
                    return button.innerText = "Good Dog!"
                } else if (singleDogObj.isGoodDog === false) {
                    return button.innerText = "Bad Dog!"
                }

                button.addEventListener("click", function() {
                    if(button.innerText === "Good Dog!") {
                        return button.innerText = "Bad Dog!"
                    } else if(button.innerText === "Bad Dog!") {
                        return button.innerText = "Good Dog!"
                    }                  
                })
            })
        })
    }

})


// fetch(`http://localhost:3000/pups${id}`, {
//     method: "PATCH", 
//     header: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(dogs.isGoodDog)
// })
// .then(response => response.json())
// .then(dogs => )