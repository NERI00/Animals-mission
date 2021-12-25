class Dogs extends Animals {
    constructor(name, age) {
        super(name, age);
        this.ageInDogsLife = age * 7;
    }
    display() {
        document.write(`<div id="Dog">
        <strong>Dog:</strong><br>
        name: ${this.name}<br>
        age: ${this.age}<br>
        ageInDogsLife: ${this.ageInDogsLife}<br><br>
        </div>`);
    }
    makeSound() {
        return "howhow...";
    }
}
