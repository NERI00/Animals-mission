abstract class Animals {
    // Data members
    public name: string
    public age: number

    // Constructor
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // Metods
    public display(): void {
        return
    }

    public abstract makeSound(): void;


}