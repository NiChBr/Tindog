// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getHtml() {
        const {name, age, bio} = this
        return `<div class="badge" id="badge">
                </div>
                <div>
                    <div class="dog-info">${name}, ${age}</div>
                    <div class="dog-bio">${bio}</div>
                </div>`
    }
    
    setAvatar(element) {
        element.style.backgroundImage = `url(${this.avatar})`
    }
}

export default Dog