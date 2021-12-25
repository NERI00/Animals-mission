class Cat extends Animals {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    display() {
        document.write(`<div id="Cat">
       <strong>Cat:</strong><br>
        name: ${this.name}<br>
        age: ${this.age}<br>
        color: ${this.color}<br>
        </div>`);
    }
    makeSound() {
        return "ssssss...";
    }
}
