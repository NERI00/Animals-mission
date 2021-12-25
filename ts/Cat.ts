class Cat extends Animals {
    private color: string

    constructor(name: string, age: number, color: string) {
        super(name, age)
        this.color = color
    }
    public display() {
        document.write(`<div id="Cat">
       <strong>Cat:</strong><br>
        name: ${this.name}<br>
        age: ${this.age}<br>
        color: ${this.color}<br>
        </div>`)
    }

    public makeSound(): string {
        return "ssssss..."
    }
}