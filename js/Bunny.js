class Bunny extends Animals {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }
    display() {
        document.write(`<div id="Bunny">
        <strong>Bunny:</strong><br>
        name: ${this.name}<br>
        age: ${this.age}<br>
        gender: ${this.gender}<br><br>
        </div>`);
    }
    makeSound() {
        return "mmmmm...";
    }
}
