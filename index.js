// Remember to import the data and Dog class!
import data from "/data.js"
import Dog from "/Dog.js"

const dogElement = document.getElementById("dog")
const crossElement = document.getElementById("vote-cross")
const likeElement = document.getElementById("vote-like")

let moreDogs = true

likeElement.addEventListener("click", () => {
    if(moreDogs) {
        dog.hasBeenLiked = true
        hasBeenSwiped("badge-like.png")
    }
})
crossElement.addEventListener("click", () => {
    if(moreDogs) {
        hasBeenSwiped("badge-nope.png") 
    }
})

const hasBeenSwiped = (image) => {
    dog.hasBeenSwiped = true
    addBadge("badge-like.png")
    getNextDog()
}

const addBadge = (image) => {
    document.getElementById("badge").innerHTML = 
        `<img src='./images/${image}'>`
}

const render = () => {
    dogElement.innerHTML = dog.getHtml()
    dog.setAvatar(dogElement)
}

const getNextDog = () => {
    if(data.length > 0) {
        dog = new Dog(data.shift())
        setTimeout(render, 1500)
    }
    else {
        moreDogs = false
        dog = {}
        setTimeout(() => {
            dogElement.classList.add("no-dog")
            dogElement.innerHTML = `<div>No more dogs available</div>`
        }, 1500)
    }

}

let dog = new Dog(data.shift())

render()