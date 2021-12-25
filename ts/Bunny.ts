class Bunny extends Animals {
    private gender: string

    constructor(name: string, age: number, gender: string) {
        super(name, age)
        this.gender = gender
    }
    public display() {

         document.write(`<div id="Bunny">
        <strong>Bunny:</strong><br>
        name: ${this.name}<br>
        age: ${this.age}<br>
        gender: ${this.gender}<br><br>
        </div>`)

    }

    public makeSound(): string {
        return "mmmmm..."
    }
    
}