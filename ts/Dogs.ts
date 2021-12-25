class Dogs extends Animals {
    private ageInDogsLife: number

    constructor(name: string, age: number) {
        super(name, age)
        this.ageInDogsLife = age * 7
    }
    public display() {

        document.write(`<div id="Dog">
        <strong>Dog:</strong><br>
        name: ${this.name}<br>
        age: ${this.age}<br>
        ageInDogsLife: ${this.ageInDogsLife}<br><br>
        </div>`)

    }

    public makeSound(): string {
        return "howhow..."
    }

}